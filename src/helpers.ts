import { Editor } from '@tiptap/react';

export const setLink = (editor: Editor, url: string) => {
  if (!url) {
    return;
  }

  if (url === '') {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }

  try {
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url.startsWith('http') ? url : `http://${url}` })
      .run();
  } catch (e) {
    alert(e);
  }
};
