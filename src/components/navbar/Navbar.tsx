import logo from "@/../public/logo.svg";
import { pages } from "@/common/pages";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import Settings from "./Settings";
import SignIn from "./SignIn";
import { useAccount } from "@metamask/sdk-react-ui";

export default function NavBar() {
  const isConnected = useAccount().isConnected;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const pageItems = isConnected
    ? pages.filter((page) => page.authenticated)
    : pages.filter((page) => !page.authenticated);

  return (
    <AppBar color="secondary" position="sticky">
      <Container className="max-w-none">
        <Toolbar disableGutters>
          <Link href="/" component={NextLink}>
            {/* <Image
  						width={150}
  						height={120}
  						alt='logo'
  						src={logo}
  						className='hidden mr-1 lg:flex'
  					/> */}

            <Typography color="text.primary">Commit Zone</Typography>
          </Link>
          <Box className="flex lg:grow lg:hidden">
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              className="mt-1 lg:hidden"
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
            >
              {pageItems.map((page) => (
                <MenuItem onClick={handleCloseNavMenu} key={page.key}>
                  <Link
                    sx={{ textDecoration: "none" }}
                    href={page.link as string}
                    component={NextLink}
                  />
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="hidden ml-20 lg:grow lg:flex ">
            {pageItems.map((page) => (
              <Button
                component={NextLink}
                href={page.link}
                key={page.key}
                onClick={handleCloseNavMenu}
                className="block my-2"
              >
                <Typography color="text.primary">{page.name}</Typography>
              </Button>
            ))}
          </Box>

          <SignIn></SignIn>
        </Toolbar>
      </Container>
    </AppBar>
  );
  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(null);
  }
}
