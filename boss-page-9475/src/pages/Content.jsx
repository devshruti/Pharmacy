import { Link } from "react-router-dom";
import React from "react"
import {
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Carousel from "./Extras/Carousel";
import Offer from "./Extras/Offer";
import Category from "./Extras/Category";
import Launches from "./Extras/Launches";
// import CustomerReview from "../Components/CustomerReview";
import content from "../style/Contentstyle.module.css";
import app from "./app.png"

const PaymentOffers = [
  "https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0",
];

const Trending = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0",
    details: "Pharmeasy Iron+folic Acid With Zinc, Vitamin",
    mrp: "599.00",
    price: "299",
    off: "50",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D64484/everherb-by-pharmeasy-flaxseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-2-1670824839.jpg?dim=1440x0",
    details: "Liveasy Surgical's Rolled Bandage Pack",
    mrp: "390.00",
    price: "185.00",
    off: "20",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/021870/b-d-ultra-fine-iii-nano-pen-needles-4mm-32g-15-1-1669619409.jpg?dim=1440x0",
    details: "Dettol Neem Bathing Soap Bar With Pure Neem Oil 75g (buy 3",
    mrp: "360",
    price: "250",
    off: "10",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0",
    details: "Dettol Neem Bathing Soap Bar With Pure Neem Oil 75g (buy 3",
    mrp: "360",
    price: "250",
    off: "10",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1669616723.jpg?dim=1440x0",
    details: "Liveasy Surgical's Rolled Bandage Pack",
    mrp: "390.00",
    price: "185.00",
    off: "20",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/A65047/liveasy-essentials-bamboo-cotton-buds-80-sticks-160-swabs-1-1641792801.jpg?dim=1440x0",
    details: "Pharmeasy Iron+folic Acid With Zinc, Vitamin",
    mrp: "599.00",
    price: "299",
    off: "50",
  },
];

const ShopByCategory = [
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a7a03f6764393c65bab22e56de576a59.png?f=pngdim=256x0",
    name: "Mega clearance sale",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",
    name: "Personal care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=256x0",
    name: "Healthcare devices",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0",
    name: "Health food and drinks",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
    name: "Home care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png?dim=256x0",
    name: "Mother and baby care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=256x0",
    name: "Skin care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",
    name: "Fitness supplements",
  },
];

const Concern = [
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0",
    title: "Skin Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0",
    title: "Vitamins & Supplements",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0",
    title: "Diabetes Care & Sugar",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0",
    title: "Cardiac Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0",
    title: "Baby & Mom Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0",
    title: "Covid Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0",
    title: "Lifestyle Disorders",
  },
];
const Articles = [
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06124619/10-2.jpg?dim=1440x0",
    details:
      "Benefits of Shalabhasana (Locust Pose) and How to Do it By Dr. Himani Bisht",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/12104633/1-8.jpg?dim=1440x0",
    details: "How Exercise Can Help You Deal With Breast Cancer",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/06111050/11-1.jpg?dim=1440x0",
    details:
      "Benefits of Natarajasana (Dancer Pose) and How to Do it By Dr. Ankit Sankhe",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122433/28.jpg?dim=1440x0",
    details: "Goji Berry: Uses, Benefits, Side Effects By Dr. Rajeev Singh",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122833/4-15.jpg?dim=1440x0",
    details: "Avocado Oil: Uses, Benefits, Side Effects By Dr. Rajeev Singh",
  },
];

const placeholderText = ["Medicine", "Shampoo", "Health Drink"];

export default function Content() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    
    const intervalId = setInterval(timer, 2000); // Capture the interval ID
    return () => { clearInterval(intervalId); }; // Clear the interval using the ID
  }, []);
  
  return (
    <div className={content.mainBox}>
      <div id="search_box">
        <div style={{ marginTop: "50px" }}>
          <h1 style={{ fontSize: "30px" }}>
            <b>What are you looking for?</b>
          </h1>

          <div className="searchBox" style={{ width: "50%", margin: "auto" }}>
            <InputGroup>
              <InputLeftElement children={<BsSearch />} />
              <Input
                type="tel"
                placeholder={`Search For ${placeholderText[index]}`}
                borderRadius="40px"
              />
              <InputRightElement
                width="110px"
                children={
                  <Button colorScheme="teal" borderRadius="80px" width="120px">
                    Search
                  </Button>
                }
              />
            </InputGroup>
          </div>
        </div>

        <hr style={{ marginTop: "30px" }} />

        <div className={content.catMain_1}>
          <div>
            <img
            style={{backgroundColor:"#EFEBE9", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
              alt="1"
            />
            <p>Medicine</p>
            <p>UPTO 20% OFF</p>
          </div>
          <div>
            <img
            style={{backgroundColor:"#E0F2F1", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
              alt="2"
            />
            <p>Lab Test</p>
            <p>UPTO 70% OFF</p>
          </div>
          <div>
            <Link to="/healthcare">
              <img
            style={{backgroundColor:"#EFEBE9", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
                src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
                alt="3"
              />
            </Link>

            <p>Healthcare</p>
            <p>UPTO 60% OFF</p>
          </div>
          <div>
            <img
            style={{backgroundColor:"#F3E5F5", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"
              alt="4"
            />
            <p>Surgeries</p>
            <p style={{}} >UPTO 20% OFF</p>
          </div>
          <div>
            <img
            style={{backgroundColor:"#FFEBEE", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
              alt="5"
            />
            <p>Health Blogs</p>
            <p>UPTO 10% OFF</p>
          </div>
          <div>
            <img
            style={{backgroundColor:"#F1F8E9", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
              alt="6"
            />
            <p>PLUS</p>
            <p>UPTO 20% OFF</p>
          </div>
          <div>
            <img
            style={{backgroundColor:"#F9FBE7", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0"
              alt="7"
            />
            <p>Offers</p>
            <p>UPTO 70% OFF</p>
          </div>
          <div>
            <img
            style={{ backgroundColor:"#FFF8E1", boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
              src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
              alt="8"
            />
            <p>Value Store</p>
            <p>UPTO 50% OFF</p>
          </div>
        </div>
      </div>
  
      <hr style={ { marginTop: "20px" }} />
      <Carousel/>
      <hr style={{ marginTop: "20px" }} />

      <div>
        <h1 className={content.Heading}>Shop by Categories</h1>
        <div className={content.ShopByCategory}>
          {ShopByCategory.map((e) => (
            <Category img={e.img} name={e.name} />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "20px" }} />
      {/* payment offer */}

      <div id="LabTest_box">
        <h1 className={content.Heading}>Lab Tests by Health Concern</h1>
        <div className={content.LabBox}>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0"
              alt="1"
            />
          </div>
          <div>
            <img
              src="	https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0"
              alt="2"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0"
              alt="3"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0"
              alt="4"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0"
              alt="5"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/94616a36a9a-Lifestyle.jpg?dim=256x0"
              alt="6"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0"
              alt="7"
            />
          </div>
        </div>
      </div>

      {/* <div className={content.Order}>
        <div className={content.OrderLeft}>
          <div>
            <img
              src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
              alt="Prescription"
            />
          </div>
          <div>
            <h3>Order with Prescription</h3>
            <p>Upload prescription and we will deliver your medicines</p>
            <Button colorScheme="teal" size="md">
              Upload
            </Button>
          </div>
        </div>
        <div className={content.OrderRight}>
          <h4>How does this work?</h4>
          <div>
            <TableContainer>
              <Table variant="striped">
                <Tbody>
                  <Tr>
                    <Td>(1) Upload a photo of your prescription</Td>
                    <Td>(3) We will call you to confirm the medicines</Td>
                  </Tr>
                  <Tr>
                    <Td>(2) Add delivery address and place the order</Td>
                    <Td>
                      (4) Now, sit back! your medicines will get delivered at
                      your doorstep
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div> */}

    

      <hr style={{ marginTop: "30px" }} />
      <div id="Offer_Box">
        <h1 className={content.Heading}>Payment Offers</h1>
        <div className={content.Offers}>
          {PaymentOffers.map((e) => (
            <Offer img={e} />
          ))}
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} />

      {/* Trending */}
      <div id="Trending">
        <h1 className={content.Heading}>Trending Near You</h1>
        <h3 className={content.Sub_Heading}>Popular in your city</h3>
        <div className={content.NewLaunch}>
          {Trending.map((e) => (
            <Launches
              img={e.img}
              details={e.details}
              mrp={e.mrp}
              price={e.price}
              off={e.off}
            />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />

      {/* purple box */}
      <div className={content.PurpleBox}>
        <div className={content.SubPurpleBox}>
          <span className={content.SubPurpleBox1}>Become a </span>
          <span className={content.SubPurpleBox2}>
            <img src="/images/MediCare.png" alt="" />
          </span>
          <span className={content.SubPurpleBox3}>member</span>
        </div>

        <div className={content.SubPurpleBoxMid}>
          <p>
            Save 5% on allopathic medicines, 50% on lab tests & get FREE
            delivery with PLUS membership Know more >
          </p>
          <Button colorScheme="orange">Explore Now</Button>
        </div>
        <div className={content.SubPurpleBoxRight}>
          <img
            src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0"
            alt=""
          />
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />

      {/* Shop by Concern */}
      <div>
        <h1 className={content.Heading}>Shop by Concern</h1>
        <h3 className={content.Sub_Heading}>
          Products are handpicked by experts
        </h3>
        <div className={content.ShopByConcern}>
          {Concern.map((e) => (
            <Category img={e.img} name={e.title} />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />
      {/* Articles */}
      <div>
        <h1 className={content.Heading}>Health Articles</h1>
        <h3 className={content.Sub_Heading}>
          Get up-to-date on our latest health updates
        </h3>
        <div className={content.Articles}>
          {Articles.map((e) => (
            <Category img={e.img} name={e.details} />
          ))}
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} />
   <img src={app} alt="" />

      <hr style={{ marginTop: "30px" }} />
      {/* Customer reviews */}
      <div style={{ marginTop: "50px" }}>
        {/* <CustomerReview /> */}
      </div>
      <div
        style={{
          textAlign: "left",
          marginTop: "30px",
          lineHeight: "30px",
          marginBottom: "30px",
        }}>
        <div>
          {" "}
          <p>
            <b>Top-Selling Healthcare Products:</b> Accu-Chek Active - 100
            Strips | Supradyn Multivitamin Tablets | DR Morepen BG 03 - 50
            Strips | Dettol Antiseptic Liquid | Ensure Diabetes Care Vanilla
            Sugar Free Jar | Dettol Instant Hand Sanitizer | Everherb Shilajit |
            Softovac SF Powder | Pediasure Premium Chocolate Refill
          </p>
          <p>
            <b>Top-Selling Medicines:</b> Dolovera Gel | Neurobion Forte |
            Chymoral Forte | Crocin Advance | Soframycin | Dexorange |
            Becadexamin | Folvite | Livogen | Becosules | Fourderm | Nurokind
            Plus | Burnol | Crocin 650 | Mintop 5 | Thrombophob | Evion 600
          </p>
          <p>
            <b>COVID-19 Preventatives:</b> N95 Masks | Hand Sanitizers | Hand
            Gloves, Disinfectants, Thermometers & more!
          </p>
        </div>
        <div style={{ textAlign: "left", marginTop: "30px" }}>
          <h1>
            <b>Your One-Stop Online Pharmacy - PharmEasy</b>
          </h1>
          <p>
            <b>We've got India Covered!</b>
            <p>
              We now deliver in 1000+ cities and towns across 22000+ pin codes.
              We thereby cover every nook and corner of the country! The major
              cities in which we deliver include Mumbai, Kolkata, Delhi,
              Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune,
              Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad &
              Vadodara.
            </p>
          </p>
          <p>
            <b>
              How Are We Making Lives Simpler With Our Online Medical Store?
            </b>
            <p>
              Our doorstep delivery service is available in PAN-India across top
              cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon,
              Noida, Pune, etc. Our online medical store also allows you to
              choose from 1 lakh+ products including OTC products and medical
              equipment. PharmEasy is a one-stop online medical platform where
              you can also book diagnostic tests including blood tests,
              full-body checkups, and other preventive health check-ups at an
              affordable cost, right from the comfort of your home. We have
              partnered with trusted & certified labs that arrange for a sample
              pick-up from the convenience of your home. They also provide you
              with timely reports.
            </p>
          </p>
          <p>
            <b>We've got India Covered!</b>
            <p>
              We now deliver in 1000+ cities and towns across 22000+ pin codes.
              We thereby cover every nook and corner of the country! The major
              cities in which we deliver include Mumbai, Kolkata, Delhi,
              Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune,
              Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad &
              Vadodara.
            </p>
          </p>
          <b>We Believe in ‘Simplifying Healthcare, Impacting Lives!’</b>
        </div>
      </div>
    </div>
  );
}
