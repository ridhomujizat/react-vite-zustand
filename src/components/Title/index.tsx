import { IconButton, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface TitleType {
  children: React.ReactNode;
  disableBack?: boolean;
}
export default function Title({ children, disableBack }: TitleType) {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="10px"
      bgcolor="#fff"
      borderRadius={1}
      p={2}
    >
      {!disableBack && (
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
      )}

      <Typography variant="h3">{children}</Typography>
    </Stack>
  );
}
