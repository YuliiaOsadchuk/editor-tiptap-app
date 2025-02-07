import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import EditorContent from '../../components/editorContent';
import Toolbar from '../../components/toolbar';
import { useState } from 'react';
import { setLink } from '../../helpers';
import styles from './EditorPage.module.less';

const CONTENT = 'Write a song about chicken';

const EditorPage = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    content: CONTENT,
  }) as Editor;

  const previousLink = editor.getAttributes('link').href || '';
  const [newLink, setNewLink] = useState(previousLink);
  const [showLinkInput, setShowLinkInput] = useState(false);

  const handleInputBlur = () => {
    setShowLinkInput(false);
    setLink(editor, newLink);
  };

  return (
    <main className={styles.editorPage}>
      <div className={styles.toolbar}>
        <Toolbar
          editor={editor}
          newLink={newLink}
          setShowLinkInput={setShowLinkInput}
        />
      </div>
      <div className={styles.editorSection}>
        <div className={styles.answerSection}>
          <h3>Some text</h3>
        </div>
        <div className={styles.editorContent}>
          <EditorContent
            editor={editor}
            newLink={newLink}
            onLinkChange={setNewLink}
            showLinkInput={showLinkInput}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </main>
  );
};

export default EditorPage;
