import * as React from 'react';
import Links from './Links';
import { Box,IconButton,Container, Typography, useMediaQuery } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import WindowIcon from '@mui/icons-material/Window';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@emotion/react';
import LaptopIcon from '@mui/icons-material/Laptop';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BookIcon from '@mui/icons-material/Book';
import MenuIcon from '@mui/icons-material/Menu';
const Header2 = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  const theme = useTheme();
  const mobile = useMediaQuery('(max-width:600px)');
  const Computer = useMediaQuery('(min-width:601px)');
    return (
        <Container sx={{marginTop:"70px",display:"flex",justifyContent:"space-between",flexDirection: "row"}}>
            <div>
      <Button sx={{width:222,bgcolor: theme.
// @ts-ignore
      palette.MyColor.main ,color:theme.palette.text.primary}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <WindowIcon sx={{fontSize:"25px",marginRight:"5px"}}/>
        <Typography sx={{
          textTransform:"capitalize",
          fontSize:"18px"
        }}>
        Categories
        </Typography>
        <Box flexGrow={1}/>
        <ChevronRightIcon />
      </Button>
      <Menu sx={{".MuiPaper-root":{width:222}}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> 
        <LaptopIcon sx={{marginRight:"7px"}}/> 
        <Typography sx={{
          textTransform:"capitalize",
          fontSize:"18px"
        }}>
          Electronices
        </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}><SportsEsportsIcon sx={{marginRight:"7px"}}/> 
        <Typography sx={{
          textTransform:"capitalize",
          fontSize:"18px"
        }}>
          Games
        </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}><BookIcon sx={{marginRight:"7px"}}/>
          <Typography sx={{
          textTransform:"capitalize",
          fontSize:"18px"
        }}>
          Books
        </Typography>
        </MenuItem>
      </Menu>
    </div>
    {Computer&& (<Links />)}
    { mobile && (<IconButton>
      <MenuIcon sx={{fontSize:"25px"}}/>
    </IconButton >)}
        </Container>
    );
}

export default Header2;
