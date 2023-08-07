import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';


// material-ui
import { useTheme } from '@mui/material/styles';
//import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { ListItemButton, ListItemText, useMediaQuery } from '@mui/material';


// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

// assets
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //
const useStyles = makeStyles(() => ({
  focusStyle: {
    // Add your focus styles here
    // For example:
    outline: '2px solid pink',
  },
}));

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));
  const classes = useStyles();

  //const Icon = item.icon;
  //const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
     <ListItemText 
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
        mt: item.icon == 'arrow' ? '130px' : '10px',
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      name={item.icon +' link' ?? ''}
      tabIndex={0}
      onClick={() => itemHandler(item.id)}
     >
      

        {item.icon == 'Home' && <HomeOutlinedIcon name="Home" />}

        {item.icon == 'chat' && <BarChartOutlinedIcon name="Chat"/>}
        {item.icon == 'payment' && <PaymentOutlinedIcon name="Payment"/>}
        {item.icon == 'settings' && <SettingsIcon name="Settings"/>}
        {item.icon == 'arrow' && <ArrowRightAltOutlinedIcon name="Logout" />}
      {/* <ListItemText
        primary={
          <Typography variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )} */}
      </ListItemText>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
