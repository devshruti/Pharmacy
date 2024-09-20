import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Image,
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { BsPerson } from "react-icons/bs";
import pharm from "../pages/Pharm.png"

export default function LoginDrawer({ phoneNo, setPhoneNo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [otpState, setOtpState] = React.useState(false);
  const [otpNumber, setOtpNumber] = React.useState("");
  const [otpVal, setOtpVal] = React.useState()
  const [login, setLogin] = React.useState()
  const { Login } = React.useContext(AuthContext);

  function OtpGenerator() {
    let num = "1234567890";
    let OTP = otpNumber;
    for (let i = 0; i < 4; i++) {
      OTP += num[Math.floor(Math.random() * 10)];
    }
    setOtpNumber(OTP);
    setOtpState(true);
  }
  const onclick = () => {
    if (otpVal === otpNumber) {
      setLogin(Login)
    } else {
      alert("Wrong OTP")
    }
  }
  return (
    <>
      <Button colorScheme="white" onClick={onOpen}>
        <Box>
          <Box
            style={{
              color: "black",
              display: "flex",
              fontWeight: "400",
            }}>
            <BsPerson size={"20px"} color={"white"} />
            <p style={{ marginLeft: "3px", color: "white" }}>Login</p>
          </Box>
        </Box>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" bg="#10847e">
            <Image borderRadius={"50px"} src={pharm} alt="logo" />
          </DrawerHeader>
          {otpNumber.length === 4 ? (
            ""
          ) : (
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel>Quick Login / Register</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="+91" />
                    <Input
                      type="number"
                      borderRadius={"0px"}
                      height="38px"
                      placeholder="Enter Your Phone Number"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      maxLength={10}
                      style={{ marginTop: "2px" }}
                    />
                  </InputGroup>
                </Box>
                <Button
                  onClick={OtpGenerator}
                  style={{ backgroundColor: "#10847e", color: "white" }}
                  isDisabled={phoneNo.length < 10}>
                  Send OTP
                </Button>
              </Stack>
            </DrawerBody>
          )}
          {otpState ? (
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  Your OTP is{" "}
                  <span style={{ color: "orangered" }}>{otpNumber}</span>
                </Box>
                <Box>
                  <FormLabel>Enter OTP sent to +91 {phoneNo}</FormLabel>
                  <HStack>
                    <PinInput value={otpVal} onChange={(value) => setOtpVal(value)}>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "left",
                    border: "0px solid red",
                    width: "75%",
                    color: "#10847e",
                  }}>
                  <Button
                    style={{ fontSize: "12px", background: "none" }}
                    onClick={() => {
                      setOtpState(false);
                      setOtpNumber("");
                    }}>
                    Change Number
                  </Button>
                </Box>
                <Button
                  style={{ backgroundColor: "#10847e", color: "white" }}
                  onClick={onclick}>
                  Continue
                </Button>
              </Stack>
            </DrawerBody>
          ) : (
            ""
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
