import {
    Radio,
    RadioGroup,
    Stack,
    Select,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useToast,
    Center,
  } from "@chakra-ui/react";
  import React from "react";
  import payment from "../style/Payment.module.css";
  
  function Payment() {
    const [orderState, setOrderState] = React.useState(false);
    const toast = useToast();
    const [cartData, setCartData] = React.useState([]);
    const [cartTotal, setCartTotal] = React.useState(0);
    const [delivery, setDelivery] = React.useState(0);
  
    async function PostData(e) {
      e.preventDefault();
      console.log("in");
      let cart = [];
      try {
        let res = await fetch(`http://localhost:3000`, {
          method: "POST",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        });
        res = await res.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  
    async function GetData() {
      try {
        let res = await fetch(`http://localhost:3000/cart`);
        res = await res.json();
        setCartData(res);
      } catch (error) {
        console.log(error);
      }
    }
  
    function total() {
      let totalPrice = 0;
      for (let i = 0; i < cartData.length; i++) {
        totalPrice = totalPrice + cartData[i].price;
      }
      setCartTotal(totalPrice);
    }
  
    React.useEffect(() => {
      GetData();
    }, [cartData]);
  
    React.useEffect(() => {
      total();
    }, [cartData]);
    React.useEffect(() => {
      if (cartTotal == 0) {
        setDelivery(0);
      } else {
        setDelivery(149);
      }
    }, [cartTotal]);
  
    return (
      <div className={payment.main}>
        <div className={payment.right} style={{border:"2px solid teal", borderRadius:"10px"}}>
          <div className={payment.right1}>
            <h1>Price Breakdown</h1>
          </div>
          <div className={payment.right2}>
            <span>Cart Value</span>
            <span>Rs.{cartTotal}</span>
          </div>
  
          <hr style={{ marginTop: "15px", marginBottom: "10px" }} />
  
          <div className={payment.right3}>
            {" "}
            <span>Delivery charges</span>
            <span>Rs.{delivery}</span>
          </div>
  
          <hr style={{ marginTop: "15px", marginBottom: "10px" }} />
  
          <div className={payment.right4}>
            {" "}
            <span>Amount to be paid</span>
            <span>Rs.{cartTotal + delivery}</span>
          </div>
          <br/>
          
          <div className={payment.placeOrder}>
              <Button
                colorScheme="teal"
                size="md"
                onClick={() =>
                  toast({
                    title: "Order Placed.",
                    description:
                      "Your Order will we delivered with in 2-3 working days.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                }>
                Place Order
              </Button>
           
          </div>        
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr/>
      </div>
    );
  }
  export default Payment;
  