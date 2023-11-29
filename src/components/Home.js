import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Products from "./Productlist";
import { useState } from "react";

function Home() {
  const [game, setGame] = useState("");

  const sub = () => {
    alert(game);
  };

  const change = (event) => {
    setGame(event.target.value);
    console.log(change);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="bar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <>Flipkart</>
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Paper
                component="form"
                sx={{
                  p: "0.9px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Here"
                  inputProps={{ "aria-label": "search" }}
                  onChange={change}
                  value={game}
                />
                <IconButton
                  id="sear"
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={sub}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Typography>
            <Button color="inherit">
              <>Log In</>
            </Button>

            <Button color="inherit">
              <>Become a Seller</>
            </Button>
            <Button color="inherit">
              <AddShoppingCartIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Products />
    </div>
  );
}

export default Home;
