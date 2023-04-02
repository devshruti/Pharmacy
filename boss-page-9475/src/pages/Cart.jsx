import React from "react";
import cartStyle from "../style/Cartstyle.module.css";
import CartBox from "../components/CartBox";
import {  useParams } from "react-router-dom";
import {  Button} from "@chakra-ui/react";
import Address from "./Extras/Address";


function Cart() {
  const [cartData, setCartData] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [delivery, setDelivery] = React.useState(0);
  const {qty} =useParams();

      console.log(qty);
  async function GetData() {
    try {
      let res = await fetch(` http://localhost:3000/carts`);
      res = await res.json();
      setCartData(res);
      console.log(qty);
    } catch (error) {
      console.log(error);
      
    }
  }

  function total() {
    let totalPrice = 0;
    // let r=+qty
    for (let i = 0; i < cartData.length; i++) {
      let rate =cartData[i].price
      totalPrice = totalPrice + rate;
    }
    setCartTotal(totalPrice);
    console.log(qty)
  }

  React.useEffect(() => {
    GetData();
  }, []);

  React.useEffect(() => {
    total();
  }, [cartData]);

  React.useEffect(() => {
    if (cartTotal === 0 || cartTotal >= 1000) {
      setDelivery(0);
    } else {
      setDelivery(99);
    }
  }, [cartTotal]);

  console.log(cartTotal);
  return (
    <div className={cartStyle.main}>
      <br></br>
      <br></br>
      <br></br>
      <div className={cartStyle.left}>
        <div className={cartStyle.leftTop}>
          <span>
            <h1>{cartData.length} Item in your Cart</h1>
          </span>
        </div>
        {cartData.map((e) => (
          <CartBox
            key={e.id}
            id={e.id}
            img={e.img}
            title={e.title}
            price={e.price}
            GetData={GetData}
          />
        ))}
      </div>
      <div className={cartStyle.right}>
        <div className={cartStyle.rightBottom}>
          <div className={cartStyle.rightBottomHeading}>
            <h1>Bill Summary</h1>
          </div>
          <div className={cartStyle.rightBottomCartValue}>
            <div>
              <span>Cart Value</span>
              <span>Rs.{cartTotal}</span>
            </div>
            <div>
              <span>Delivery charges</span>
              <span>Rs.{delivery}</span>
            </div>
          </div>
          <hr style={{ marginTop: "30px" }} />
          <div className={cartStyle.rightTopCart}>
            Cart Total: Rs.{cartTotal}
          </div>
          <div className={cartStyle.rightBottomAmount}>
            <span>Amount to be paid</span>
            <span>Rs.{cartTotal + delivery}</span>
          </div>
        </div>
        <div className={cartStyle.rightTop}>
            <div style={{ marginTop: "-20px" }}>
              {/* <NavLink to="/Payment"> */}
                    {" "}
                    <Button mt={4} colorScheme="teal">
                     <Address cartTotal={cartTotal} /> 
                    </Button>
                  {/* </NavLink> */}
            </div>
        </div>
       <div style={{border:"2px solid teal", marginTop:"30px",padding:"2%", color:"teal" ,fontWeight:"bold"}}>
        <p>Free delivery with cart value above ₹999.</p>
       </div>
      </div>
      
    </div>
  );
}

export default Cart;
