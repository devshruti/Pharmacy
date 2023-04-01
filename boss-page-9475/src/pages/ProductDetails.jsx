import React from "react";
import { useParams } from "react-router";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Grid,
  ButtonGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export default function ProductDetails() {
  let { id } = useParams();

  const [data, setData] = React.useState({});
  async function GetData() {
    try {
      let res = await fetch(`http://localhost:3000/Fooddata/${id}`);
      res = await res.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    GetData();
  }, []);

  async function PostData(e) {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:3000/carts`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      console.log(res);
      alert("Product Added to Cart")
    } catch (error) {
      console.log(error);
      alert("Product Already Added to Cart")
    }
  }

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Grid border={"px solid red"}>
          <div
            style={{
              width: "400px",
              border: "0px solid red",
              height: "400px",
              marginBottom: "10%",
            }}>
            <Image
              border={"px solid green"}
              rounded={"md"}
              alt={"product image"}
              src={data.img}
              fit={"cover"}
              h={{ base: "60%", sm: "200px", lg: "60%" }}
              marginTop="10%"
              textAlign="center"
              margin="auto"
            />
          </div>
          <div >
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
             margin={"-30%"}
              mb={"4"}>
              Select Available Variant
            </Text>
            <Text
              as={"span"}
              fontWeight={"bold"}
              style={{ marginBottom: "20px" }}>
              Flavor Available
            </Text>
            <Stack direction="column" marginTop="15px">
              <Wrap spacing={4}>
                <WrapItem>
                  <Button colorScheme="gray">Aloe Amla</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Aloe Vera</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Amla</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Amla Giloy</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Karela Jamun</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Tulsi Giloy</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Wheat Grass</Button>
                </WrapItem>
              </Wrap>
            </Stack>
           
          </div>
        </Grid>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}>
              {data.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"3xl"}>
              Rs.{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }>
                <Button
            onClick={PostData}
            w={"100%"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("teal.600", "teal.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}>
            Add to cart
          </Button>
          
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  EVER HERB
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Expires on or After:
                  </Text>{" "}
                  29/09/2023
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Country of Origin:
                  </Text>{" "}
                  India
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
