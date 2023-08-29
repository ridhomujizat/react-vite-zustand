import { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { SideNav } from './SideNav';
import { TopNav } from './TopHeader';

const SIDE_NAV_WIDTH = 280;

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

const Layout = (props: any) => {
  const { children } = props;
  const theme = useTheme();
  const pathname = 'string';
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    handlePathnameChange();
  }, [pathname]);

  return (
    <>
      <SideNav
        handleDrawer={(e) => setOpenNav(e)}
        open={openNav}
        drawerWidthOpen={SIDE_NAV_WIDTH}
      />
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          maxWidth: '100%',
          minHeight: `100vh`,
          bgcolor: '#EEF2F6',
          [theme.breakpoints.up('lg')]: {
            transition: theme.transitions.create('padding-left', {
              easing: theme.transitions.easing.sharp,
              duration: !openNav
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
            paddingLeft: `${openNav ? SIDE_NAV_WIDTH : 68}px`,
          },
        }}
      >
        <LayoutContainer>
          <TopNav
            openNav={openNav}
            onNavOpen={() => setOpenNav(true)}
            drawerWidth={`${openNav ? SIDE_NAV_WIDTH : 68}px`}
          />
          {children}
        </LayoutContainer>
      </Box>
    </>
  );
};

export default Layout;
