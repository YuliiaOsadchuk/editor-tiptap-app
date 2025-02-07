import { EditorContent as EditorTiptap, Editor } from '@tiptap/react';
import IconButton from '../button/iconButton';
import ArrowUp from '../../assets/arrow-up.svg?react';
import MicrophoneIcon from '../../assets/microphone.svg?react';
import ShareScreen from '../../assets/share-screen.svg?react';
import StarsIcon from '../../assets/stars.svg?react';
import Button from '../button';
import Input from '../input';
import styles from './EditorContent.module.less';

interface EditorContentPros {
  editor: Editor;
  newLink: string;
  setNewLink: (link: string) => void;
  showLinkInput: boolean;
  onBlur: () => void;
}

const EditorContent: React.FC<EditorContentPros> = ({
  editor,
  newLink,
  setNewLink,
  showLinkInput,
  onBlur,
}) => (
  <div className={styles.editorContent}>
    <div className={styles.adornment}>
      <IconButton>
        <StarsIcon />
      </IconButton>
      {showLinkInput && (
        <div className={styles.input}>
          <Input
            placeholder="Enter url"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onBlur={onBlur}
          />
        </div>
      )}
      <EditorTiptap editor={editor} />
    </div>
    <div className={styles.adornment}>
      <IconButton variant="contained" type="rounded">
        <ShareScreen />
      </IconButton>
      <IconButton variant="outlined" type="rounded">
        <MicrophoneIcon />
      </IconButton>
      <Button>
        Send <ArrowUp />
      </Button>
    </div>
  </div>
);

export default EditorContent;
