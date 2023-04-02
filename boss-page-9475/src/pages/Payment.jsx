import {
  Button,
  useToast
} from "@chakra-ui/react";
import React from "react";
import payment from "../style/Payment.module.css";
import CartBox from "../components/CartBox";

function Payment({cartTotal}) {
  const [orderState, setOrderState] = React.useState(false);
  const toast = useToast();
  const [cartData, setCartData] = React.useState([]);
  // const [cartTotal, setCartTotal] = React.useState(0);
  const [delivery, setDelivery] = React.useState(0);
  async function GetData() {
    try {
      let res = await fetch(`http://localhost:3000/cart`);
      res = await res.json();
      setCartData(res);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    GetData();
  }, [cartData]);

  // React.useEffect(() => {
  //   total();
  // }, [cartData]);
  React.useEffect(() => {
    if (cartTotal === 0 || cartTotal >= 1000) {
      setDelivery(0);
    } else {
      setDelivery(99);
    }
  }, [cartTotal]);
  return (
    <div className={payment.main}>
      <div className={payment.left}>
      
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

           </div>

      {/* right */}
      <div className={payment.right}>
        <div>
        {/* {cartData.map((e) => (
          <CartBox
            key={e.id}
            id={e.id}
            img={e.img}
            title={e.title}
            price={e.price}
            GetData={GetData}
          />
        ))} */}
        </div>
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
        <div className={payment.placeOrder}>
          {orderState ? (
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
          ) : (
            <Button
              colorScheme="teal"
              size="md"
              onClick={(e) => {
                e.preventDefault();
                setOrderState(true);
              }}>
              Cash on Delivery
            </Button>
          )}
        </div>
   
       
      </div>
    </div>
  );
}
export default Payment;
