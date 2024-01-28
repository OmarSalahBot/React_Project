import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Container, IconButton, Stack, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';


const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    height:"100%",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '45ch',
        },
      },
    },
  }));
  return (
    <Container sx={{ marginTop:"20px"}}>
      <Stack className="header1" sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "10px 30px",
      }}>
          <div className="log" style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
          }}>
          <ShoppingCartOutlinedIcon sx={{
            fontSize:"30px"
          }} />
          <p style={{
            fontSize:"17px",
            fontWeight:"bold"
          }}>E-commercal</p>
          </div>
          
          <Search sx={{
            border:`solid black 2px`,
            borderRadius:"50px",
            height:"50px",
            marginTop:"10px"
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <div className="cart-profile d-flex">
          <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined />
        </IconButton>
      )}
    </div>
            <IconButton sx={{
              position:"relative",
              margin:"0px 30px"
            }}>
            
      <Badge color="primary" badgeContent={5} showZero sx={{
        position:"absolute",
        right:"5px",
        top:"16px",
        fontWeight:"bold"
      }}>
      </Badge>
            <ShoppingCartOutlinedIcon sx={{
            fontSize:"30px"
          }}/>
            </IconButton>
            <IconButton>
            <PersonIcon sx={{
            fontSize:"30px",
          }}/>
            </IconButton>
          </div>
      </Stack>
    </Container>
  );
}

export default Header1;
