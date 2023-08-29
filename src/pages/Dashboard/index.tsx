import { Box, Typography, Stack } from '@mui/material';

export default function Index() {
  return (
    <Box p={3}>
      <Stack direction="row" justifyContent="space-between" mb={4}>
        <Typography variant="h2">Dashboard</Typography>
      </Stack>
    </Box>
  );
}
