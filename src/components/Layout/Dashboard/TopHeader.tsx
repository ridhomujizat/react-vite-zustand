// import BellIcon from '@heroicons/react/24/solid/BellIcon';
// import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
// import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
// import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  useTheme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from 'hooks/usePopover';
import { AccountPopover } from './AccountPopover';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

interface TopNavProps {
  onNavOpen: () => void;
  drawerWidth: string;
  openNav: boolean;
}

export const TopNav = (props: TopNavProps) => {
  const { openNav, onNavOpen, drawerWidth } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'fixed',
          top: 0,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: !openNav
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          width: {
            xs: '100%',
            lg: `calc(100% - ${drawerWidth})`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <MenuIcon />
              </IconButton>
            )}
            {/* <Tooltip title="Search">
              <IconButton>
                <DashboardIcon />
              </IconButton>
            </Tooltip> */}
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            {/* <Tooltip title="Contacts">
              <IconButton>
                <DashboardIcon />
              </IconButton>
            </Tooltip> */}
            {/* <Tooltip title="Notifications">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40,
              }}
              // src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <Box height={TOP_NAV_HEIGHT} bgcolor="#EEF2F6" />
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};
