import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import Logo from 'components/Logo';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { uiAction } from 'store/slice/Ui';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { items } from './config';
import { SideNavItem } from './NavItem';
import LogoBlue from 'assets/logo/blue.png';

interface SideNavProps {
  open: boolean;
  drawerWidthOpen: number;
  handleDrawer: (val: boolean) => void;
}

export const SideNav = (props: SideNavProps) => {
  const theme = useTheme();
  const { open, handleDrawer, drawerWidthOpen } = props;
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const expandMenuList = useAppSelector((state) => state.ui.sideBarExpand);
  const sideBarFixed = useAppSelector((state) => state.ui.sideBarFixed);
  const lgUp = useMediaQuery((themeState: any) => themeState.breakpoints.up('lg'));

  const paddingIconButton = 10;
  const marginIconButton = 14;
  const iconFontSize = 20;
  const drawerWidthClose = (paddingIconButton + marginIconButton) * 2 + iconFontSize;

  const content = (
    <Box
      onMouseEnter={() => {
        if (!sideBarFixed) {
          handleDrawer(true);
        }
      }}
      onMouseLeave={() => {
        if (!sideBarFixed) {
          handleDrawer(false);
        }
      }}
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Stack
          sx={{ p: 1, height: '60px' }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            component="a"
            href="/"
            sx={{
              display: 'inline-flex',
              bgcolor: 'white',
              p: 1,
              borderRadius: '4px'
            }}
          >
            <Box
              component="img"
              src={LogoBlue}
              alt="image"
              sx={{ width: 37, height: 'auto' }}
            />
          </Box>
          <IconButton
            sx={{ display: open ? 'block' : 'none', color: 'white' }}
            size="small"
            onClick={() => {
              dispatch(uiAction.fixedSideBar(!sideBarFixed));
            }}
          >
            {sideBarFixed ? <MenuOpenIcon /> : <ArrowForwardIcon />}
          </IconButton>
        </Stack>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 1,
            py: 2,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              return (
                <SideNavItem
                  openSidebar={open}
                  currentPath={pathname}
                  Icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                  child={item?.child}
                  expandMenuList={expandMenuList}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        {/* <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            Need more features?
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%',
              },
            }}
          >
            <img alt="Go to pro" src="/assets/devias-kit-pro.png" />
          </Box>
          <Button
            component="a"
            endIcon={<ArrowTopRightOnSquareIcon />}
            fullWidth
            href="https://material-kit-pro-react.devias.io/"
            sx={{ mt: 2 }}
            target="_blank"
            variant="contained"
          >
            Pro Live Preview
          </Button>
        </Box> */}
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#054D77',
            color: 'common.white',
            // width: 280,
          },
        }}
        variant="permanent"
        sx={{
          boxShadow: '8px 3px 10px -4px rgba(0, 0, 0, 0.1)',
          // height: '100vh',
          width: !open
            ? { xs: '0px', sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: !open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          '& .MuiDrawer-paper': {
            justifyContent: 'flex-start',
            overflowX: 'hidden',
            width: !open
              ? { xs: '0px', sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: '0px',
            zIndex: 99,
            boxShadow: theme.shadows[0],
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: !open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={() => handleDrawer(false)}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#054D77',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: (themeState) => themeState.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
