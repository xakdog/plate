import {
  deleteText,
  ELEMENT_DEFAULT,
  getEditorString,
  getRangeBefore,
  getRangeFromBlockStart,
  isBlock,
  isVoid,
  PlateEditor,
  setElements,
  someNode,
  Value,
} from '@udecode/plate-core';
import castArray from 'lodash/castArray';
import { Range } from 'slate';
import { AutoformatBlockRule } from '../types';
import { getMatchRange } from '../utils/getMatchRange';

export interface AutoformatBlockOptions<V extends Value = Value>
  extends AutoformatBlockRule<V> {
  text: string;
}

export const autoformatBlock = <V extends Value>(
  editor: PlateEditor<V>,
  {
    text,
    trigger,
    match: _match,
    type = ELEMENT_DEFAULT,
    allowSameTypeAbove = false,
    preFormat,
    format,
    triggerAtBlockStart = true,
  }: AutoformatBlockOptions<V>
) => {
  const matches = castArray(_match as string | string[]);

  for (const match of matches) {
    const { end, triggers } = getMatchRange({
      match: { start: '', end: match },
      trigger,
    });

    if (!triggers.includes(text)) continue;

    let matchRange: Range | undefined;

    if (triggerAtBlockStart) {
      matchRange = getRangeFromBlockStart(editor) as Range;

      // Don't autoformat if there is void nodes.
      const hasVoidNode = someNode(editor, {
        at: matchRange,
        match: (n) => isVoid(editor, n),
      });
      if (hasVoidNode) continue;

      const textFromBlockStart = getEditorString(editor, matchRange);

      if (end !== textFromBlockStart) continue;
    } else {
      matchRange = getRangeBefore(editor, editor.selection as Range, {
        matchString: end,
      });
      if (!matchRange) continue;
    }

    if (!allowSameTypeAbove) {
      // Don't autoformat if already in a block of the same type.
      const isBelowSameBlockType = someNode(editor, { match: { type } });
      if (isBelowSameBlockType) continue;
    }

    deleteText(editor, { at: matchRange });

    if (preFormat) {
      preFormat(editor);
    }

    if (!format) {
      setElements(
        editor,
        { type },
        {
          match: (n) => isBlock(editor, n),
        }
      );
    } else {
      format(editor);
    }

    return true;
  }

  return false;
};
