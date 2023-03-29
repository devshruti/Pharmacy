import React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { CiMobile2, CiDiscount1 } from "react-icons/ci";
import { BsPerson, BsCart2 } from "react-icons/bs";
import LoginDrawer from "../components/LoginDrawer";
import NavStyle from "../style/Navstyle.module.css";
import LogOutMenu from "../components/LogOutMenu";
import Cart from "./Cart";
import { AuthContext } from "../context/AuthContext";

const Links = ["Download App", "Login", "Offers", "Cart"];

export default function Navbar() {
  const [phoneNo, setPhoneNo] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth, setAuth, Login, Logout } = React.useContext(AuthContext);
  return (
    <>
      <Box bg={useColorModeValue("white.100", "white.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            className={NavStyle.mainBox}>
            {/* logo */}
            <Box style={{ display: "flex" }}>
              <Box className={NavStyle.pinBtn}>
                {" "}
                <NavLink to="/">
                  <Image
                    className={NavStyle.logoImg}
                    src="/images/MediCare.png"
                    alt="logo"
                  />
                </NavLink>{" "}
              </Box>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              className={NavStyle.navAppBox}>
              <NavLink>
                <Box className={NavStyle.downloadApp}>
                  <CiMobile2 size={"22px"} />
                  <Box className={NavStyle.navHeading}>Download App</Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <Box className={NavStyle.login}>
                    {" "}
                    {auth ? (
                      <LogOutMenu phoneNo={phoneNo} />
                    ) : (
                      <LoginDrawer phoneNo={phoneNo} setPhoneNo={setPhoneNo} />
                    )}
                  </Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <CiDiscount1 size={"22px"} />
                  <Box className={NavStyle.navHeading}> Offers</Box>
                </Box>
              </NavLink>

              <NavLink to="/cart">
                <Box className={NavStyle.navApp}>
                  <BsCart2 size={"22px"} />

                  <Box className={NavStyle.navHeading}>
                    <Text>Cart</Text>
                  </Box>
                </Box>
              </NavLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <hr />
      <Box
        p={2}
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
          fontSize: "15px",
        }}>
        <NavLink>Medicine</NavLink>
        <NavLink>Lab Tests</NavLink>
        <NavLink to="/healthcare">Healthcare</NavLink>
        <NavLink>Surgeries</NavLink>
        <NavLink to="/healthyfood" >Health Blogs</NavLink>
        <NavLink>PLUS</NavLink>
        <NavLink>Offers</NavLink>
        <NavLink>Value Store</NavLink>
       
      </Box>
    </>
  );
}
