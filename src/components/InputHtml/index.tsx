import React, { useState, useRef, useMemo } from 'react';
import styled from '@emotion/styled';
import JoditEditor from 'jodit-react';
import { Box, Typography, CircularProgress } from '@mui/material';
// import 'jodit/build/jodit.min.css';
// import { cloadImage } from 'utils/base64toUrlImage';
// import { CloudImage } from "./UploadImage/uploadImageJodit";
// import { uploadImage } from 'service/news';
const BlogStyled = styled(Box)`
  .jodit-ui-form {
    color: #000;
  }
`;

interface JoditProps {
  content: string;
  setContent: (e: string) => void;
}

const Jodit = ({ content, setContent }: JoditProps) => {
  const editor = useRef(null);
  const [loading, setLoading] = useState(false);

  const config = useMemo(
    () => ({
      // buttons: [
      //   "bold",
      //   "italic",
      //   "underline",
      //   "|",
      //   "ol",
      //   "ul",
      //   "|",
      //   "fontsize",
      //   "|",
      //   "left",
      //   "center",
      //   "right",
      //   "justify",
      //   "|",
      //   "table",
      //   "image",
      //   "video",
      // ],
      //   uploader: {
      //     insertImageAsBase64URI: true,
      //     defaultHandlerSuccess: async (res) => {
      //       setLoading(true);
      //       const f = new FormData();
      //       f.append('image', res.files[0]);
      //       const respon = await cloadImage(res.files[0]);
      //       editor.current.component.selection.insertImage(respon);
      //       setLoading(false);
      //     },
      //   },
      removeButtons: ['brush', 'file'],
      showXPathInStatusbar: false,
      showCharsCounter: false,
      showWordsCounter: false,
      toolbarAdaptive: false,
      height: 400,
      hotkeys: {
        redo: 'ctrl+z',
        undo: 'ctrl+y,ctrl+shift+z',
        indent: 'ctrl+]',
        outdent: 'ctrl+[',
        bold: 'ctrl+b',
        italic: 'ctrl+i',
        removeFormat: 'ctrl+shift+m',
        insertOrderedList: 'ctrl+shift+7',
        insertUnorderedList: 'ctrl+shift+8',
        openSearchDialog: 'ctrl+f',
        openReplaceDialog: 'ctrl+r',
      },
      askBeforePasteFromWord: false,
      askBeforePasteHTML: false,
    }),
    [],
  );

  const onChange = async (html) => {
    // const content = await uploadImageToHtml(html);
    // console.log();
    setContent(html);
  };
  return (
    <Box
      sx={{
        '.jodit-ui-form': { color: '#000' },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        border: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      {loading && (
        <Box
          display="flex"
          position="absolute"
          bgcolor="rgba(255,255,255,0.8)"
          width="100%"
          height="100%"
          zIndex="100"
          alignItems="center"
          justifyContent="center"
          gap="20px"
        >
          <CircularProgress />
          <Typography>Uploading Image....</Typography>
        </Box>
      )}

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        // tabIndex={1}
        onBlur={(newContent) => {
          onChange(newContent);
        }}
      />
    </Box>
  );
};

export default Jodit;
