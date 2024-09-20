import React from "react";
// import CSS
import careStyles from "../style/HealthCare.module.css";

import Carousel from "./Extras/Carousel";
import Data3Flex from "./Extras/Data3Flex";

const HealthCare_Cards = [
    "https://cms-contents.pharmeasy.in/banner/037dcfb46a9-toothsi.jpg",
    "https://cms-contents.pharmeasy.in/banner/08dcaba0574-skinnsi.jpg?dim=700x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/72c05e52d9b-Stayfree.jpg",
  ];

  const HealthCare_category = [
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a7a03f6764393c65bab22e56de576a59.png",
      name: "Mega Clearance",
      off: "20",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png",
      name: "Personal",
      off: "30",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png",
      name: "HealthCare Devices",
      off: "15",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png",
      name: "Heath Food and Drinks",
      off: "30",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png",
      name: "Home Care",
      off: "25",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png",
      name: "Mother and Baby Care",
      off: "35",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png",
      name: "Skin Care",
      off: "15",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png",
      name: "Supplements",
      off: "25",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d1b29f7a2b5f3d62a3d47b617aceef1b.png",
      name: "Sexual Wellness",
      off: "10",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b1a199bf20a9325798872b8685114856.png",
      name: "Health Condition",
      off: "45",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png",
      name: "Beauty",
      off: "45",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png",
      name: "Elderly Care",
      off: "60",
    },
    {
      img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      name: "Top Product",
      off: "40",
    },
  ];
  

function HealthCare() {
  return (
    <div style={{ width: "70%", margin: "auto", marginBottom: "70px" }}>
      {/* carousel */} <Carousel cards={HealthCare_Cards} />
      {/* category */}{" "}
      <div className={careStyles.category}>
        {HealthCare_category.map((e) => (
          <Data3Flex key={e.name} img={e.img} name={e.name} off={e.off} />
        ))}
      </div>
      <div id="text area" style={{ textAlign: "left" }}>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Shop Safely And Worry-Free On PharmEasy</b>
        </h1>
        <p>
          PharmEasy is a renowned name in the online shopping of Over The
          Counter or healthcare products and other daily essentials. Ordering
          online on PharmEasy is convenient, fast and hassle-free; you can avoid
          the annoyance of queuing up at your local pharmacy and also avail of
          huge discounts of up to 80% OFF. Purchasing the healthcare
          requirements such as medical devices and nutritional supplements that
          you need will no longer burn a hole in your pocket. At PharmEasy, you
          are sure to find everything that you need because we have products
          across all healthcare categories.
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Why choose PharmEasy?</b>
        </h1>
        <p>
          <li>8400+ Brands</li>
          <li>35K products in our stock</li>
          <li>Delivery to 22000+ pin codes</li>
          <li>Delivered to 50 lakh+ families</li>
          <li>Over 2M customers served</li>
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Our most popular categories:</b>
        </h1>
        <p>We have a range of categories and products, some which are:</p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Devices</b>
        </h1>
        <p>
          With the pandemic upending our lives, we have all realized that there
          are some medical devices that we need to keep in our homes such as
          Oximeter, Thermometer, Inhaler, Blood pressure monitor, Glucometer.
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Personal care </b>
        </h1>
        <p>
          Personal care products can include a wide range of products such as
          Bath products, , Skincare essentials, Razor blades, Toothpaste and
          toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b> Nutrition and fitness supplements</b>
        </h1>
        <p>
          To give your health a helping hand, you can order a wide variety of
          health supplements including Health drinks, Nutritional powder,
          Nutrition tablets/capsules.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b> Ayurvedic care</b>
        </h1>
        <p>
          Place your trust in the goodness of natural and organic ayurvedic
          products for an all-around healthy mind and body. There’s plenty to
          choose from such as Aloe vera juice, Moringa capsules, Garlic
          capsules. Home care Home care products are things you need every day
          such as disinfectant spray, phenyl, dishwashing liquid, etc.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Baby and mom care </b>
        </h1>
        <p>
          PharmEasy also has an impressive range of baby and mom care products
          including Diapers, Baby bath products, Infant formula food, Mother’s
          health drinks, Diaper rash creams, Baby wipes.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>We ensure</b>
        </h1>
        <p>
          <li>Regular sanitization of our premises and warehouses</li>
          <li>Temperature checks of our employees and delivery partners</li>
          <li>No-contact door-step delivery</li>
          <li>Sanitized packaging</li>
        </p>
      </div>
    </div>
  );
}
export default HealthCare;
