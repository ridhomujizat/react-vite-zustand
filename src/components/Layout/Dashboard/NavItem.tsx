import { useState } from 'react';
import { Box, ButtonBase, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { useAppDispatch } from 'store/hooks';
import { uiAction } from 'store/slice/Ui';

interface SideNavItemProps {
  currentPath: string;
  Icon: any;
  path: string;
  title: string;
  openSidebar: boolean;
  expandMenuList: string[];
  child?: {
    path: string;
    title: string;
  }[];
}
export const SideNavItem = (props: SideNavItemProps) => {
  const { currentPath, child, Icon, path, title, expandMenuList, openSidebar } =
    props;
  const open = openSidebar;
  const active = currentPath.includes(path);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickExpand = (values: string) => {
    const isOpen = expandMenuList.includes(values);

    if (isOpen) {
      dispatch(
        uiAction.expandSideBar(expandMenuList.filter((val) => val !== values)),
      );
    } else {
      dispatch(uiAction.expandSideBar([...expandMenuList, values]));
    }
  };

  return (
    <li>
      {child && child?.length > 0 ? (
        <>
          <ButtonBase
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              pl: '14px',
              pr: '14px',
              py: '6px',
              textAlign: 'left',
              width: '100%',
              ...(active && {
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
              }),
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
              },
            }}
            onClick={() => clickExpand(title)}
            // {...linkProps}
          >
            <Box display="flex" alignItems="center">
              {Icon && (
                <Box
                  component="span"
                  sx={{
                    alignItems: 'center',
                    color: 'neutral.300',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    mr: 2,
                    ...(active && {
                      color: 'primary.main',
                    }),
                  }}
                >
                  <Icon />
                </Box>
              )}
              <Box
                component="span"
                sx={{
                  display: open ? 'block' : 'none',
                  color: 'neutral.300',
                  flexGrow: 1,
                  fontFamily: (theme) => theme.typography.fontFamily,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: '24px',
                  whiteSpace: 'nowrap',
                  ...(active && {
                    color: 'common.white',
                  }),
                  // ...(disabled && {
                  //   color: 'neutral.500',
                  // }),
                }}
              >
                {title}
              </Box>
            </Box>
            <Box
              sx={{
                display: open ? 'block' : 'none',
                alignItems: 'center',
                color: 'neutral.300',
              }}
            >
              {expandMenuList.includes(title) ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </Box>
          </ButtonBase>
          <Collapse in={expandMenuList.includes(title) && open}>
            {child?.map((val) => {
              return (
                <ButtonBase
                  key={val.path}
                  sx={{
                    alignItems: 'center',
                    borderRadius: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    mt: 0.3,
                    pl: '16px',
                    pr: '16px',
                    py: '6px',
                    textAlign: 'left',
                    width: '100%',
                    ...(currentPath === val.path && {
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }),
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    },
                  }}
                  onClick={() => navigate(val.path)}
                >
                  {Icon && (
                    <Box
                      component="span"
                      sx={{
                        alignItems: 'center',
                        color: 'neutral.300',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        width: '25px',
                        mr: 2,
                        ...(currentPath === val.path && {
                          color: 'primary.main',
                        }),
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: '10px',
                          display: currentPath === val.path ? 'block' : 'none',
                        }}
                      />
                    </Box>
                  )}
                  <Box
                    component="span"
                    sx={{
                      color: 'neutral.300',
                      flexGrow: 1,
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: '24px',
                      whiteSpace: 'nowrap',
                      ...(active && {
                        color: 'common.white',
                      }),
                      // ...(disabled && {
                      //   color: 'neutral.500',
                      // }),
                    }}
                  >
                    {val.title}
                  </Box>
                </ButtonBase>
              );
            })}
          </Collapse>
        </>
      ) : (
        <ButtonBase
          sx={{
            alignItems: 'center',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            pl: '16px',
            pr: '16px',
            py: '6px',
            textAlign: 'left',
            width: '100%',
            ...(active && {
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
            }),
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
            },
          }}
          onClick={() => navigate(path)}
        >
          {Icon && (
            <Box
              component="span"
              sx={{
                alignItems: 'center',
                color: 'neutral.300',
                display: 'inline-flex',
                justifyContent: 'center',
                mr: 2,
                ...(active && {
                  color: 'primary.main',
                }),
              }}
            >
              <Icon />
            </Box>
          )}
          <Box
            component="span"
            sx={{
              display: open ? 'block' : 'none',
              color: 'neutral.300',
              flexGrow: 1,
              fontFamily: (theme) => theme.typography.fontFamily,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '24px',
              whiteSpace: 'nowrap',
              ...(active && {
                color: 'common.white',
              }),
              // ...(disabled && {
              //   color: 'neutral.500',
              // }),
            }}
          >
            {title}
          </Box>
        </ButtonBase>
      )}
    </li>
  );
};
