import React from "react";
import "./Main.css";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const Ratings = [1, 2, 3];
  const Theme = useTheme();
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container sx={{ marginBottom: "20px" }}>
      <Stack
        sx={{
          marginBottom: "30px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          [Theme.breakpoints.down("md")]: {
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          },
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            Selected Products
          </Typography>
          <Typography>
            all our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          sx={{
            display: "flex",
            gap: "20px",
            ".Mui-selected": {
              color: "#eb3d3d !important",
              borderColor: "#eb3d3d !important",
              backgroundColor: "initial",
            },
          }}
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            sx={{
              color:
                // @ts-ignore
                Theme.palette.text.primary,
            }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{
              color:
                // @ts-ignore
                Theme.palette.text.primary,
            }}
            className="myButton"
            value="center"
            aria-label="centered"
          >
            Men Category
          </ToggleButton>
          <ToggleButton
            sx={{
              color:
                // @ts-ignore
                Theme.palette.text.primary,
            }}
            className="myButton"
            value="right"
            aria-label="right aligned"
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "center", gap: "50px" }}
      >
        {Ratings.map((item) => {
          console.log(item);
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 345,
                ".hover MuiCardMedia-root": {
                  scale: 1.1,
                },
              }}
            >
              <CardMedia
                sx={{ height: 140, transition: "all .3s" }}
                image={`../../Images/t-shirts-products/1/final.png`}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <Button onClick={handleClickOpen} size="small">
                  <AddShoppingCartIcon sx={{ paddingRight: "3px" }} /> Add To
                  Cart
                </Button>
                <Rating name="read-only" value={item} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
      <Dialog sx={{".MuiPaper-root":{minWidth:'800px' ,borderRadius:"5px"}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              cursor:"pointer"
            }}
          />
          <ProductDetails/>
      </Dialog>
    </Container>
  );
};

export default Main;
