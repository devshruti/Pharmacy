import React from "react";
import cartStyle from "../style/Cartstyle.module.css";
import { CiHeart } from "react-icons/ci";
import { TbDiscount2 } from "react-icons/tb";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function Cart() {
  const [cartData, setCartData] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [delivery, setDelivery] = React.useState(0);

  async function GetData() {
    try {
      let res = await fetch(`https://medic-care-database.glitch.me/cart`);
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
  }, []);

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

  console.log(cartTotal);
  return (
    <div className={cartStyle.main}>
      <div className={cartStyle.left}>
        <div className={cartStyle.leftTop}>
          <span>
            <h1>{cartData.length} Item in your Cart</h1>
          </span>
          <span className={cartStyle.SaveForLater}>
            <div>
              <CiHeart size={"25px"} color="#10847e" />
            </div>

            <p>Saved for later</p>
          </span>
        </div>
       
      </div>
      <div className={cartStyle.right}>
        <div className={cartStyle.rightTop}>
          <div className={cartStyle.rightTopCart}>
            Cart Total: <span>Rs.{cartTotal}</span>
          </div>
          <hr style={{ marginTop: "30px" }} />
          <div className={cartStyle.rightTopCoupon}>
            <div>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<TbDiscount2 color="#10847e" size={"25px"} />}
                />
                <Input type="tel" placeholder="Apply Coupons" />
              </InputGroup>
            </div>
          
          </div>
        </div>
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
          <div className={cartStyle.rightBottomAmount}>
            <span>Amount to be paid</span>
            <span>Rs.{cartTotal + delivery}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
