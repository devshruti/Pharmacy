import React from "react";
import { Select } from "@chakra-ui/react";
import ITP from "./Extras/ITP";
import foodStyles from "../style/HealthFood.module.css";
import CarouselHealth from "./Extras/CarouselHealth";

function HealthyFood() {
  const [data, setData] = React.useState([]);
  const [sort, setSort] = React.useState("asc");

  const GetData = React.useCallback(async () => {
    try {
      let res = await fetch(
        `https://pharmacy-jsonserver.onrender.com/Fooddata?_sort=price&_order=${sort}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, [sort]); // Include 'sort' as a dependency
  
  React.useEffect(() => {
    GetData();
  }, [GetData]); // Use 'GetData' in the dependency array
  
  // console.log(data);
  return (
    <div style={{ width: "65%", margin: "auto" }}>
        <br/>
        <hr style={{ marginTop: "20px" }} />
        <br/>
        <div style={{ width: "105%", margin: "auto",marginTop:"10px" }}>
            <CarouselHealth/>
        </div>
        
      <hr style={{ marginTop: "50px" }} />
      <div id="filter boxes" 
      className={foodStyles.filter}
      >
        <div >
          <h2>Healthy Food and Drinks</h2>
        </div>
        <div>
          <p>Sort By:</p>
          <Select
            placeholder="Select option"
            value={sort}
            onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </Select>
        </div>
      </div>
      <div id="append all data" 
      className={foodStyles.products}
    // style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", textAlign:"left"}}
      >
        {data.map((e) => (
          <ITP
            key={e.id}
            id={e.id}
            img={e.img}
            title={e.title}
            price={e.price}
          />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
    
  );
}
export default HealthyFood;
