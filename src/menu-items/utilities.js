// // assets
// import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
// import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
// import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';


// constant
// const icons = {
//     HomeOutlinedIcon,
//     BarChartOutlinedIcon,
//     PaymentOutlinedIcon,
//     ArrowRightAltOutlinedIcon
// };

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: '',
  type: 'group',
  icon: 'Home',
  children: [
    {
      id: 'util-typography',
      title: '',
      type: 'item',
      url: '#',
      icon: 'Home',
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: '',
      type: 'item',
      url: '#',
      icon: 'chat',
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: '',
      type: 'item',
      url: '#',
      icon: 'payment',
      breadcrumbs: false
    },
    {
        id: 'util-shadow',
        title: '',
        type: 'item',
        url: '#',
        icon: 'arrow',
        breadcrumbs: false
      }
  ]
};

export default utilities;
