import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Link,
  Container,
  Menu,
  Typography,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import ListAltIcon from "@mui/icons-material/ListAlt";

interface Page {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export default function ResponsiveTopBar() {
  const [pages] = useState<Page[]>([
    {
      title: "Home",
      url: "",
      icon: <HomeIcon sx={{ width: "100%" }} />,
    },
    {
      title: "Beer List",
      url: "/beer",
      icon: <ListAltIcon sx={{ width: "100%" }} />,
    },
  ]);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: `solid gray 1px`,
      }}
    >
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
                {pages.map((page, pageIndex) => (
                  <Link
                    component={RouterLink}
                    to={page.url}
                    key={`topbar-menu-link[${pageIndex}]`}
                    onClick={handleCloseNavMenu}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{page.icon}</ListItemIcon>
                        <ListItemText primary={page.title} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, pageIndex) => (
              <Link
                component={RouterLink}
                to={page.url}
                key={`topbar-menu-link[${pageIndex}]`}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText primary={page.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
