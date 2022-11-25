import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';




// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );



function App() {
  const text = {
    fontWeight: 'bold'
  }
  return (
  <div>
  <div className='container-main'>
  
  <Card sx={{ maxWidth: 500, borderRadius: 5}} className="sub-container" >
  <CardActionArea>
    
  <Typography color="text.secondary" textAlign='center' className='free'>
            FREE
          </Typography>
          <div className='heads-up'>
          <Typography textAlign='center' className='heading' gutterBottom  component="div">
            $0
          </Typography>
          <Typography textAlign='center'>
            /month
          </Typography>
          </div>
          <Divider variant="middle" />

          <List className='lists'>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Single User
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">5GB Storage
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Unlimited Public Projects
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Community Access
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CloseIcon fontSize="small" className='icons'/><ListItemText secondary={<Box fontWeight="fontWeightRegular">Unlimited Private Projects
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CloseIcon fontSize="small" className='icons'/><ListItemText secondary={<Box fontWeight="fontWeightRegular">Dedicated Phone Support
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CloseIcon fontSize="small" className='icons'/><ListItemText secondary={<Box fontWeight="fontWeightRegular">Free Subdomain
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CloseIcon fontSize="small" className='icons'/><ListItemText secondary={<Box fontWeight="fontWeightRegular">Monthly Status Reports
</Box>} /></ListItem>
</List>
<div className='btn'>
          <Button sx={{ borderRadius: 28 }}  style={{ padding: "11px 180px" }} variant="contained">BUTTON</Button>
          </div>
          </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 500, borderRadius: 5}} className="sub-container" >
  <CardActionArea>
  <Typography color="text.secondary" textAlign='center' className='free'>
            PLUS
          </Typography>
          <div className='heads-up'>
          <Typography textAlign='center' className='heading' gutterBottom  component="div">
            $9
          </Typography>
          <Typography textAlign='center'>
            /month
          </Typography>
          </div>
          <Divider variant="middle" />

          <List className='lists'>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightBold" >5 Users
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">50GB Storage
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Unlimited Public Projects
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Community Access
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Unlimited Private Projects
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Dedicated Phone Support
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Free Subdomain
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CloseIcon fontSize="small" className='icons'/><ListItemText secondary={<Box fontWeight="fontWeightRegular">Monthly Status Reports
</Box>} /></ListItem>
</List>
<div className='btn'>
          <Button sx={{ borderRadius: 28 }}  style={{ padding: "11px 180px" }} variant="contained">BUTTON</Button>
          </div>
          </CardActionArea>
  </Card>


  <Card sx={{ maxWidth: 500, borderRadius: 5}} className="sub-container" >
  <CardActionArea>
  <Typography color="text.secondary" textAlign='center' className='free'>
          PRO
          </Typography>
          <div className='heads-up'>
          <Typography textAlign='center' className='heading' gutterBottom  component="div">
            $49
          </Typography>
          <Typography textAlign='center'>
            /month
          </Typography>
          </div>
          <Divider variant="middle" />

          <List className='lists'>
<ListItem component="h3" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightBold" >Unlimited Users
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">150GB Storage
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Unlimited Public Projects
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Community Access
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Unlimited Private Projects
</Box>} /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Dedicated Phone Support
</Box>} /></ListItem>
<ListItem component="h3" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular"><b>Unlimited</b> Free Subdomains
</Box>}  /></ListItem>
<ListItem component="h2" disablePadding><CheckIcon fontSize="small" className='icons'/><ListItemText primary={<Box fontWeight="fontWeightRegular">Monthly Status Reports
</Box>} /></ListItem>
</List>
<div className='btn'>
          <Button sx={{ borderRadius: 28 }}  style={{ padding: "11px 180px" }} variant="contained">BUTTON</Button>
          </div>
          </CardActionArea>
  </Card>
  
  </div>
  </div>
  );
}

export default App;
