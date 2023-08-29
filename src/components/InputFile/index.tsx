import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import useToast from 'hooks/useToast';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { UploadFIleService } from 'service/upload';

interface InputImageProps {
  onChangeValue: (e: string | null) => void;
  defaultUrlImage?: string;
}

export default function InputFile({
  onChangeValue,
  defaultUrlImage,
}: InputImageProps) {
  const maxMb = 2;
  const docname = 'List-product.pdf';
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
    <Box>
      <Box
        component="input"
        ref={fileInput}
        accept="image/*"
        type="file"
        display="none"
        onChange={(e) => handleUpload(e)}
      />
      <Stack direction="row" alignItems="center" gap="10px">
        {file.fileUrl ? (
          <Stack
            direction="row"
            alignItems="center"
            onClick={() => window.open(file.fileUrl, '_blank')}
          >
            <DescriptionOutlinedIcon />
            <Typography>{docname}</Typography>
            <Tooltip arrow title="Cancel">
              <IconButton onClick={handleCancel}>
                <CancelOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        ) : (
          <Button
            startIcon={<DescriptionOutlinedIcon />}
            variant="outlined"
            disabled={loading}
            onClick={() => fileInput.current.click()}
          >
            {loading ? 'Uploading...' : ' Upload File'}
          </Button>
        )}
      </Stack>
    </Box>
  );
}
