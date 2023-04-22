import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from '../img/logo.png';
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#012b31",
      top: 0,
      justifyContent: "flex-start",
      gap: {xs: "5%", sm: '30%'}
    }}
    
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
