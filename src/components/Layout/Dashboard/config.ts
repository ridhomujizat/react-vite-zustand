import DashboardIcon from '@mui/icons-material/Dashboard';
import WebIcon from '@mui/icons-material/Web';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PeopleIcon from '@mui/icons-material/People';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const items = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: DashboardIcon,
  },
  {
    title: 'User Management',
    path: '/user',
    icon: PeopleIcon,
    child: [
      {
        title: 'Add User',
        path: '/user/form',
      },
      {
        title: 'List User',
        path: '/user',
      },
    ],
  },
];
