import { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import useToast from 'hooks/useToast';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { UploadFIleService } from 'service/upload';

interface InputImageProps {
  onChangeValue: (e: string | null) => void;
  defaultUrlImage?: string;
  resolution?: string;
}
export default function InputImage({
  onChangeValue,
  defaultUrlImage,
  resolution,
}: InputImageProps) {
  const maxMb = 2;
  const { openToast } = useToast();
  const fileInput = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({
    fileUrl: '',
    objectName: '',
  });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target?.files) return;
      if (parseFloat((e.target.files[0].size / 1024 / 1024).toFixed(4)) > maxMb)
        return openToast({
          open: true,
          headMsg: `Image too large`,
          message: `max ${maxMb}mb`,
          severity: 'error',
        });
      const fileImage = e.target.files[0];
      setLoading(true);
      setFile({
        ...file,
        fileUrl: URL.createObjectURL(fileImage),
      });
      const body = new FormData();
      body.append('file', fileImage);

      const responUploadImage = await UploadFIleService(body);
      setFile({
        fileUrl: responUploadImage.data.fileWithSignedUrl,
        objectName: responUploadImage.data.objectName,
      });
      onChangeValue(responUploadImage.data.objectName);
      setLoading(false);
    } catch (error) {
      return openToast({
        open: true,
        headMsg: `Failed upload image`,
        severity: 'error',
      });
    }
  };

  const handleCancel = async () => {
    setFile({ fileUrl: '', objectName: '' });
    onChangeValue(null);
  };

  useEffect(() => {
    setFile({
      ...file,
      fileUrl: defaultUrlImage || '',
    });
  }, [defaultUrlImage]);

  return (
    <Box
      sx={{
        border: '1px solid rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '300px',
        borderRadius: '10px',
        gap: 3,
        cursor: 'pointer',
        ':hover': {
          bgcolor: 'rgba(0,0,0,.05)',
        },
      }}
    >
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
        visibility={file.fileUrl ? 'hidden' : 'visible'}
        width="100%"
        height="300px"
        onClick={() => fileInput.current.click()}
      >
        <Box
          component="input"
          ref={fileInput}
          accept="image/*"
          type="file"
          display="none"
          onChange={(e) => handleUpload(e)}
        />
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 60,
            height: 60,
            bgcolor: '#cecece',
            borderRadius: '100%',
          }}
        >
          <FileUploadOutlinedIcon sx={{ fontSize: 30 }} />
        </Stack>
        <Box>
          <Typography variant="subtitle1">Click To Uplaod Image</Typography>
          {resolution && (
            <Typography sx={{ color: '#777' }}>
              Resolution: {resolution}
            </Typography>
          )}
          <Typography sx={{ color: '#777' }}>(Maximum size 2mb)</Typography>
        </Box>
      </Stack>
      <Box
        display={file.fileUrl ? 'flex' : 'none'}
        sx={{
          width: '100%',
          height: '100%',
          py: '10px',
          position: 'absolute',
          justifyContent: 'center',
          zIndex: 2,
          top: 0,
          ':before': {
            content: '" "',
            position: 'absolute',
            width: '100%',
            height: '50%',
            top: 0,
            left: 0,
            zIndex: 3,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(16, 16, 16, 0) 100%);',
          },
          ':after': {
            content: '" "',
            position: 'absolute',
            width: '100%',
            height: '50%',
            bottom: 0,
            left: 0,
            zIndex: 3,
            transform: 'rotate(180deg)',
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(16, 16, 16, 0) 100%);',
          },
        }}
      >
        <Box
          component="img"
          src={file.fileUrl}
          sx={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Stack
        visibility={file.fileUrl ? 'visible' : 'hidden'}
        direction="row"
        gap="5px"
        alignItems="center"
        position="absolute"
        sx={{ top: 10, right: 10, zIndex: 5 }}
      >
        {loading && <CircularProgress size={20} />}
        <Tooltip arrow title="Cancel">
          <IconButton onClick={handleCancel}>
            <CancelOutlinedIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}
