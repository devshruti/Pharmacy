import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";

function LogOutMenu({ phoneNo }) {
  const { auth, setAuth, Login, Logout } = React.useContext(AuthContext);
  return (
    <Menu>
      <MenuButton
      bg={"teal.600"}
        style={{
          width: "150px",
          marginTop: "2px",
          marginLeft: "-20px",
          borderRadius: "20px",
          height: "38px",
          fontSize: "15px",
        }}>
        User
      </MenuButton>
      <MenuList
      style={{color:"black"}}>
        <MenuItem>
          <b>Your Account</b>
        </MenuItem>
        <MenuItem>Order</MenuItem>
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
export default LogOutMenu;
