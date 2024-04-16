import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TemplateEditor() {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <Editor
      initialValue="<p>Initial content of the editor</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | bold italic backcolor |'
      }}
      onEditorChange={handleEditorChange}
    />
  );
}

export default TemplateEditor;
