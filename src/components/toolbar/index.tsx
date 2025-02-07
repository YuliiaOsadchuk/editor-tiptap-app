/// <reference types="vite-plugin-svgr/client" />

import IconButton from '../button/iconButton';
import { Editor } from '@tiptap/react';
import BoldIcon from '../../assets/bold.svg?react';
import UnderlineIcon from '../../assets/underline.svg?react';
import ItalicIcon from '../../assets/italic.svg?react';
import StrikeIcon from '../../assets/strike.svg?react';
import CodeBlockIcon from '../../assets/code.svg?react';
import LinkIcon from '../../assets/link.svg?react';
import { setLink } from '../../helpers';
import styles from './Toolbar.module.less';

interface ToolbarProps {
  editor: Editor;
  newLink: string;
  setShowLinkInput: (showLinkInput: boolean) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  editor,
  newLink,
  setShowLinkInput,
}) => (
  <div className={styles.toolbar}>
    <IconButton onClick={() => editor.chain().focus().toggleBold().run()}>
      <BoldIcon />
    </IconButton>
    <IconButton onClick={() => editor.chain().focus().toggleUnderline().run()}>
      <UnderlineIcon />
    </IconButton>
    <IconButton onClick={() => editor.chain().focus().toggleItalic().run()}>
      <ItalicIcon />
    </IconButton>
    <IconButton onClick={() => editor.chain().focus().toggleStrike().run()}>
      <StrikeIcon />
    </IconButton>
    <IconButton onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
      <CodeBlockIcon />
    </IconButton>
    <IconButton
      onClick={() => {
        setShowLinkInput(true);
        setLink(editor, newLink);
      }}
    >
      <LinkIcon />
    </IconButton>
  </div>
);

export default Toolbar;
