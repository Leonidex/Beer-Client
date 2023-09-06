import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Link,
  Card,
  Container,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import SportsBar from "@mui/icons-material/SportsBar";
import HomeIcon from "@mui/icons-material/Home";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsBarIcon from "@mui/icons-material/SportsBar";

const drawerWidth = 240;

interface Page {
  title: string;
  url: string;
}

export default function ResponsiveTopBar() {
  const [pages, setPages] = useState<Page[]>([
    {
      title: "Home",
      url: "",
    },
    {
      title: "Beer List",
      url: "/beer",
    },
  ]);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: Page) => {
    console.log("pageNumber:", page);
    setAnchorElNav(null);
  };

  const drawer = (
    <>
      <Divider />
      <List>
        <Link component={RouterLink} to={`/`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link component={RouterLink} to={`/beer`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SportsBar />
              </ListItemIcon>
              <ListItemText primary="Beer List" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to={`/`}
            display="flex"
            alignItems="center"
          >
            <SportsBarIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BeerWiki
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List>
                <Link component={RouterLink} to={`/`}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link component={RouterLink} to={`/beer`}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <SportsBar />
                      </ListItemIcon>
                      <ListItemText primary="Beer List" />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </Menu>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            {/*<TopBar*/}
            {/*  sx={{ mt: "45px" }}*/}
            {/*  id="menu-appbar"*/}
            {/*  anchorEl={anchorElUser}*/}
            {/*  anchorOrigin={{*/}
            {/*    vertical: "top",*/}
            {/*    horizontal: "right",*/}
            {/*  }}*/}
            {/*  keepMounted*/}
            {/*  transformOrigin={{*/}
            {/*    vertical: "top",*/}
            {/*    horizontal: "right",*/}
            {/*  }}*/}
            {/*  open={Boolean(anchorElUser)}*/}
            {/*  onClose={handleCloseUserMenu}*/}
            {/*>*/}
            {/*  {settings.map((setting) => (*/}
            {/*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
            {/*      <Typography textAlign="center">{setting}</Typography>*/}
            {/*    </MenuItem>*/}
            {/*  ))}*/}
            {/*</TopBar>*/}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
