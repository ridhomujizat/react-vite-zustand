import React from 'react';
import { Box } from '@mui/material';
import LogoWhite from 'assets/logo/white.png';
import LogoBlue from 'assets/logo/blue.png';
import BlueSmall from 'assets/logo/blue-small.png';
import WhiteSmall from 'assets/logo/white-small.png';

interface LogoProps {
  width?: string | number;
  height?: string | number;
  type?: 'white' | 'blue';
  size?: 'big' | 'small';
}
export default function LogoComp(props: LogoProps) {
  const typeLogo = () => {
    if (props.type === 'white' && props.size === 'small') {
      return WhiteSmall;
    }
    if (props.type === 'blue' && props.size === 'small') {
      return BlueSmall;
    }
    if (props.type === 'blue') {
      return LogoBlue;
    }
    return LogoWhite;
  };
  return (
    <Box
      component="img"
      src={typeLogo()}
      alt="logo"
      sx={{
        aspectRatio: props.size === 'small' ? '426/439' : '784/80',
        width: props.width || 'auto',
        height: props.height || 'auto',
      }}
    />
  );
}

LogoComp.defaultProps = {
  type: 'white',
  size: 'big',
};
