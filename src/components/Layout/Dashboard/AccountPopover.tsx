import { useCallback } from 'react';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authAction } from 'store/slice/Auth';
import useAuthStore from 'store/useAuthStore';

interface AccountPoporver {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
}

export const AccountPopover = (props: AccountPoporver) => {
  const { anchorEl, onClose, open } = props;
  const { User, postLogout } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    onClose?.();
    navigate('/login');
    postLogout()
  }, [onClose]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {User?.UserInformation.fullName}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </MenuList>
    </Popover>
  );
};
