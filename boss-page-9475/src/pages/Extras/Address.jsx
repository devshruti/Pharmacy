import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Input,
  FormControl,
  FormHelperText
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Payment from "../Payment";

export default function Address({cartTotal}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button colorScheme="white" onClick={onOpen}>
        <Button colorScheme="teal" variant="solid" w="100%" marginLeft="-18px">
          Add Delivery Address
        </Button>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Add Delivery Address
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <form isRequired>
                <FormControl isRequired>
                  <Input type="text" placeholder="Deliver to" />
                  <br />
                  <br />

                  <Input type="number" placeholder="Mobile no" />
                  <FormHelperText>
                    For all delivery related communication.
                  </FormHelperText>
                  <br />

                  <Input type="number" placeholder="Pin Code" w="40%" />
                  <br />
                  <br />
                  <Input type="text" placeholder="House no and building" />
                  <br />
                  <br />
                  <Input type="text" placeholder="Street no" />
                  <br />
                  {/* <Link to="/Payment"> */}
                    {" "}
                    <Button mt={4} colorScheme="teal" type="submit">
                    {/* <Payment cartTotal={cartTotal}/> */}
                    Save and Continue
                    </Button>
                  {/* </Link> */}
                </FormControl>
              </form>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
