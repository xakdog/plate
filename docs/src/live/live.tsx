import React, { useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock';
import { Highlight } from '@styled-icons/boxicons-regular/Highlight';
import { Subscript } from '@styled-icons/foundation/Subscript';
import { Superscript } from '@styled-icons/foundation/Superscript';
import { FormatIndentDecrease } from '@styled-icons/material';
import { BorderAll } from '@styled-icons/material/BorderAll';
import { BorderBottom } from '@styled-icons/material/BorderBottom';
import { BorderClear } from '@styled-icons/material/BorderClear';
import { BorderLeft } from '@styled-icons/material/BorderLeft';
import { BorderRight } from '@styled-icons/material/BorderRight';
import { BorderTop } from '@styled-icons/material/BorderTop';
import { Check } from '@styled-icons/material/Check';
import { FontDownload } from '@styled-icons/material/FontDownload';
import { FormatAlignCenter } from '@styled-icons/material/FormatAlignCenter';
import { FormatAlignJustify } from '@styled-icons/material/FormatAlignJustify';
import { FormatAlignLeft } from '@styled-icons/material/FormatAlignLeft';
import { FormatAlignRight } from '@styled-icons/material/FormatAlignRight';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import { FormatIndentIncrease } from '@styled-icons/material/FormatIndentIncrease';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted';
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered';
import { FormatQuote } from '@styled-icons/material/FormatQuote';
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { Image } from '@styled-icons/material/Image';
import { Keyboard } from '@styled-icons/material/Keyboard';
import { LineWeight } from '@styled-icons/material/LineWeight';
import { Link } from '@styled-icons/material/Link';
import { Looks3 } from '@styled-icons/material/Looks3';
import { Looks4 } from '@styled-icons/material/Looks4';
import { Looks5 } from '@styled-icons/material/Looks5';
import { Looks6 } from '@styled-icons/material/Looks6';
import { LooksOne } from '@styled-icons/material/LooksOne';
import { LooksTwo } from '@styled-icons/material/LooksTwo';
import { OndemandVideo } from '@styled-icons/material/OndemandVideo';
import { Search } from '@styled-icons/material/Search';
import {
  addColumn,
  addRow,
  AlignToolbarButton,
  BalloonToolbar,
  BlockToolbarButton,
  CodeBlockElement,
  CodeBlockToolbarButton,
  ColorPickerToolbarDropdown,
  Combobox,
  createAlignPlugin,
  createAutoformatPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createExitBreakPlugin,
  createFindReplacePlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontFamilyPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentListPlugin,
  createIndentPlugin,
  createItalicPlugin,
  createJuicePlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createPlateEditor,
  createPlateUI,
  createPlateUIEditor,
  createPlugins,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSingleLinePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  deleteColumn,
  deleteRow,
  deleteTable,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_DEFAULT,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_LI,
  ELEMENT_LIC,
  ELEMENT_LINK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_MENTION,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TODO_LI,
  ELEMENT_TR,
  ELEMENT_UL,
  getParent,
  getPlateActions,
  getPlugin,
  getPluginType,
  HeadingToolbar,
  ImageToolbarButton,
  indent,
  indentList,
  insertEmptyCodeBlock,
  insertNodes,
  insertTable,
  isBlockAboveEmpty,
  isElement,
  isSelectionAtBlockStart,
  isType,
  KEYS_HEADING,
  LinkToolbarButton,
  ListToolbarButton,
  MARK_BG_COLOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_COLOR,
  MARK_FONT_SIZE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  MarkToolbarButton,
  MediaEmbedToolbarButton,
  MentionCombobox,
  MentionElement,
  outdent,
  outdentList,
  pipeRenderLeaf,
  Plate,
  SearchHighlightToolbar,
  serializeHtml,
  setNodes,
  StyledElement,
  StyledLeaf,
  TableToolbarButton,
  toggleIndentList,
  toggleList,
  ToolbarButton,
  unwrapList,
  usePlate,
  usePlateEditorRef,
  usePlateEditorState,
  usePlateEventId,
  usePlateSelection,
  usePlateSelectors,
  withProps,
  withStyledProps,
} from '@udecode/plate';
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-excalidraw';
import { createLineHeightPlugin } from '@udecode/plate-line-height';
import { LineHeightToolbarDropdown } from '@udecode/plate-line-height-ui';
import { createEditor, Editor, Transforms } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import { clearBlockFormat } from './config/autoformat/autoformatUtils';
import {
  AlignToolbarButtons,
  BasicElementToolbarButtons,
  BasicMarkToolbarButtons,
  HighlightToolbarButton,
  IndentToolbarButtons,
  KbdToolbarButton,
  ListToolbarButtons,
  MarkBallonToolbar,
  TableToolbarButtons,
} from './config/components/Toolbars';
import { withStyledDraggables } from './config/components/withStyledDraggables';
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders';
import { CONFIG } from './config/config';
import { PLUGINS } from './config/plugins';
import { VALUES } from './config/values/values';
import {
  createEditableVoidPlugin,
  EDITABLE_VOID,
} from './examples/editable-voids/createEditableVoidPlugin';
import { EditableVoidElement } from './examples/editable-voids/EditableVoidElement';
import { IFrame } from './examples/iframe/IFrame';
import { createPreviewPlugin } from './examples/preview-markdown/createPreviewPlugin';
import { PreviewLeaf } from './examples/preview-markdown/PreviewLeaf/PreviewLeaf';
import { HighlightHTML } from './utils/HighlightHTML';

// Add react-live imports you need here
const ReactLiveScope = {
  ...React,
  getPlateActions,
  usePlateSelectors,
  createJuicePlugin,
  StyledElement,
  toggleIndentList,
  React,
  addColumn,
  addRow,
  BallonToolbarMarks: MarkBallonToolbar,
  BalloonToolbar,
  BorderAll,
  BorderBottom,
  BorderClear,
  BorderLeft,
  BorderRight,
  BorderTop,
  Check,
  clearBlockFormat,
  CodeAlt,
  CodeBlock,
  CodeBlockElement,
  Combobox,
  CONFIG,
  createAlignPlugin,
  createAutoformatPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createEditableVoidPlugin,
  createEditor,
  createPlateUIEditor,
  createPlateEditor,
  createExcalidrawPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontFamilyPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createIndentListPlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
  PreviewLeaf,
  createPreviewPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSingleLinePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  deleteColumn,
  deleteRow,
  deleteTable,
  DndProvider,
  Editable,
  EDITABLE_VOID,
  EditableVoidElement,
  Editor,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_DEFAULT,
  ELEMENT_EXCALIDRAW,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_LI,
  ELEMENT_LIC,
  ELEMENT_LINK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_MENTION,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TODO_LI,
  ELEMENT_TR,
  ELEMENT_UL,
  ExcalidrawElement,
  FontDownload,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorText,
  FormatIndentDecrease,
  FormatIndentIncrease,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatStrikethrough,
  FormatUnderlined,
  getParent,
  getPlugin,
  getPluginType,
  pipeRenderLeaf,
  HeadingToolbar,
  Highlight,
  HighlightHTML,
  HTML5Backend,
  IFrame,
  Image,
  indent,
  indentList,
  insertEmptyCodeBlock,
  insertNodes,
  insertTable,
  isBlockAboveEmpty,
  isElement,
  isSelectionAtBlockStart,
  isType,
  Keyboard,
  KEYS_HEADING,
  LineWeight,
  Link,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
  LooksOne,
  LooksTwo,
  MARK_BG_COLOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_COLOR,
  MARK_FONT_SIZE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  MentionCombobox,
  MentionElement,
  OndemandVideo,
  outdent,
  outdentList,
  Plate,
  PLUGINS,
  ReactEditor,
  Search,
  serializeHtml,
  setNodes,
  Slate,
  StyledLeaf,
  Subscript,
  Superscript,
  toggleList,
  AlignToolbarButton,
  ToolbarButton,
  AlignToolbarButtons,
  BasicElementToolbarButtons,
  BasicMarkToolbarButtons,
  IndentToolbarButtons,
  ListToolbarButtons,
  TableToolbarButtons,
  CodeBlockToolbarButton,
  ColorPickerToolbarDropdown,
  BlockToolbarButton,
  HighlightToolbarButton,
  ImageToolbarButton,
  KbdToolbarButton,
  LineHeightToolbarDropdown,
  LinkToolbarButton,
  ListToolbarButton,
  MarkToolbarButton,
  MediaEmbedToolbarButton,
  SearchHighlightToolbar,
  TableToolbarButton,
  Transforms,
  unwrapList,
  useCallback,
  usePlateEventId,
  createFindReplacePlugin,
  usePlate,
  usePlateEditorRef,
  usePlateSelection,
  usePlateEditorState,
  VALUES,
  withProps,
  withReact,
  withStyledDraggables,
  withStyledPlaceHolders,
  withStyledProps,
};

export default ReactLiveScope;
