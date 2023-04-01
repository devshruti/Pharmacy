import cartStyle from "../style/Cartstyle.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { Select } from "@chakra-ui/react";
import React, { useState } from "react";

function CartBox({ title, price, img, id, GetData }) {
  const [qty,setQyt] = useState(1)
  async function PostData() {
    try {
      let res = await fetch(
        `http://localhost:3000/carts/${id}`,
        { 
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res = await res.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    GetData();
  }
  const handleChange=(e,price)=>{
    setQyt(e.target.value)
  }

  return (
    <div>
      <div className={cartStyle.leftBottom}>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1>
            <b>{title}</b>
          </h1>
          <p className={cartStyle.leftBottomPrice}>Rs.{price=price*qty}</p>
        </div>
        <div>
          <div className={cartStyle.delete}>
            <button
              onClick={() => {
                PostData();
              }}>
              <RiDeleteBinLine size="25px" color="black" />
            </button>
          </div>
          <div className={cartStyle.leftSelect}>
            <Select onChange={handleChange}>
              <option value="1">Qty 1</option>
              <option value="2">Qty 2</option>
              <option value="3">Qty 3</option>
              <option value="4">Qty 4</option>
              <option value="5">Qty 5</option>
              <option value="6">Qty 6</option>
              <option value="7">Qty 7</option>
              <option value="8">Qty 8</option>
              <option value="9">Qty 9</option>
              <option value="10">Qty 10</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBox;
