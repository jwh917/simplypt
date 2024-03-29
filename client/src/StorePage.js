import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import StoreHomePage from "./StoreHomePage";
import StoreSearchPage from "./StoreSearchPage";
import StoreMyCartPage from "./StoreMyCartPage";

function StorePage({setItemsCountRefresher}){

  // eslint-disable-next-line 
  const [braces, setBraces] = useState(
    [
      {
        "id": 1,
        "category": "braces",
        "name": "BodyMed Neoprene Knee Brace",
        "brand": "BodyMed",
        "color": "Black",
        "price": 54,
        "productDetails": "Made of breathable material. Comfortable but firm compression. Provides support with removable stays to allow movement. Washable.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/3920_593aeb1b4c0fb.jpg"
      },
      {
        "id": 2,
        "category": "braces",
        "name": "ASO Ankle Stabilizer",
        "brand": "ASO",
        "color": "White",
        "price": 44.99,
        "productDetails": "The ASO has unique stabilizing straps that resemble a figure 8 - that provides superior defense against inversion injuries, the most common ankle injury.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/264002_52a5ee488dffe.jpg"
      },
      {
        "id": 3,
        "category": "braces",
        "name": "Rolyan Post-op Shoe",
        "brand": "Rolyan",
        "color": "Black",
        "price": 14.99,
        "productDetails": "Lightweight low-profile design is ideal for those recovering from post-operative treatment, allowing greater mobility than a standard walking boot. Rigid sole supports the arch and relieves pain and pressure on the forefoot and heel, promoting natural gait",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/081193523_62b4dd7edd206.webp"
      },
      {
        "id": 4,
        "category": "braces",
        "name": "Tee Pee Thumb Protector",
        "brand": "Tee Pee",
        "color": "Black",
        "price": 19.95,
        "productDetails": "Comfortable thumb support with malleable stays. Ideal for thumb MP and CMC injuries, arthritis and sprains. Made of perforated suede and polypropylene felt that wicks away moisture. The velstretch strap fits securely while allowing ulnar and radial deviation.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/8132_6298ea2fc957f.png"
      }
    ]
    
    
  )
  
  
    // eslint-disable-next-line 
    const [exercise, setExercise] = useState(
    [
      {
        "id": 1,
        "category": "exercise",
        "name": "Champion Sports Speed Hurdles",
        "brand": "Champion Sports",
        "color": "Orange",
        "price": 24.95,
        "productDetails": "Perfect for speed and jumping drills adjust the space between each hurdle for stride length drills made of light weight plastic.(12in.)",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/CHA138_63345aa3b496a.png"
      },
      {
        "id": 2,
        "category": "exercise",
        "name": "Norco Balance-Bubble",
        "brand": "Norco",
        "color": "Blue",
        "price": 39.99,
        "productDetails": "Sit or stand for challenging balance exercises. Vinyl cushion is an ideal tool for posture, stability and balance therapy with older adults, rehabilitating lower extremities and athletic training. Help improve sensorimotor skills, core",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/NC50115_5e9274d03e30c.jpg"
      },
      {
        "id": 3,
        "category": "exercise",
        "name": "Norco Exercise Ball",
        "brand": "Norco",
        "color": "Blue",
        "price": 50,
        "productDetails": "Economical burst-resistant balls provide versatile exercise workouts. Norco™ Exercise Balls are tested to support up to 550 lbs. (250kg) Helps Improve core stabilization by training the muscles of the spinal column as the body works to stay in balance. Ideal for exercises involving flexion, extension, equilibrium (45cm)",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/NC50100_5e927c812eda1.jpg"
      },
      {
        "id": 4,
        "category": "exercise",
        "name": "Fitter First Wobble Board",
        "brand": "Fitter First",
        "color": "Tan",
        "price": 150,
        "productDetails": "(20in) Diameter board and Adjusts to 10, 12 and 15 Degree Angles. Improved balance and coordination, Heightened sense of body awareness Increased core strength & stability. Easy to adjustin seconds with a simple spin of the bottom sphere",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/FII107_5809798c8b96e.jpg"
      }
    ]
  )
  
  // eslint-disable-next-line 
    const [rollers, setRollers] = useState(
    [
      {
        "id": 1,
        "category": "rollers",
        "name": "Thera-Band Roller Massager",
        "brand": "Thera-Band",
        "color": "Green",
        "price": 57,
        "productDetails": "The Green Thera-Band Roller Massager+ is an innovative tool for myofascial release and deep tissue massage. Its unique patent-pending ridged design supports both superficial and deep tissue mobilization while providing a massage-like experience.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/4381_54b028003df72.png"
      },
      {
        "id": 2,
        "category": "rollers",
        "name": "Body Sport Foam Roller",
        "brand": "Body Sport",
        "color": "White",
        "price": 34.49,
        "productDetails": "Body Sport Foam Roller Strong, high-density, white foam rollers offer a wide range of strengthening and rehabilitation exercises. Round rollers can be used as a progressive exercise system, ranging from easier (smaller diameter) to more difficult (larger diameter) Half-size roller is ideal for ankle stretching and knee rehabilitation, and can be used as a balance board. (Full, 6x36)",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/ZZFR636F-FS_5e93b5ec90f0d.png"
      },
      {
        "id": 3,
        "category": "rollers",
        "name": "Body Sport Foam Roller",
        "brand": "Body Sport",
        "color": "White",
        "price": 21.49,
        "productDetails": "Strong, high-density, white foam rollers offer a wide range of strengthening and rehabilitation exercises. Round rollers can de usea as a progressive exercise system, ranging from easier (smaller diameter) to more difficult (larger diameter). Half-size roller is ideal for ankle stretching and knee rehabilitation and can be used as a balance board. (Half, 6x12)",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/ZZFR612H-FS_5e93b850cec60.jpg"
      },
      {
        "id": 4,
        "category": "rollers",
        "name": "Thera-Band Portable Roller Massager",
        "brand": "Thera-Band",
        "color": "Green",
        "price": 34.49,
        "productDetails": "Gives soft- and deep-tissue massage and releases trigger points. Made with latex-free thermoplastic material. Comes in standard or portable sizes. Easy to clean.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/HYG101GRNP_56268ed7cdd92.png"
      }
    ]
  )
  // eslint-disable-next-line 
    const [hotncold, setHotnCold] = useState(
    [
      {
        "id": 1,
        "category": "hotncold",
        "name": "Torex Flat Packs - Cervical",
        "brand": "Torex",
        "color": "Blue",
        "price": 23.99,
        "productDetails": "Premium hot/cold packs that stay ultra-soft allowing them to comfortably mold to the body for a more effective treatment. Reusable gel packs are an excellent alternative to ice bags or single-use hot/cold packs.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/1003648_63dbccefd17aa.jpg"
      },
      {
        "id": 2,
        "category": "hotncold",
        "name": "Torex Flat Packs - Oversize",
        "brand": "Torex",
        "color": "Blue",
        "price": 35.99,
        "productDetails": "Premium hot/cold packs that stay ultra-soft allowing them to comfortably mold to the body for a more effective treatment. Reusable gel packs are an excellent alternative to ice bags or single-use hot/cold packs.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/1003650_63dbcd5cbcdaf.jpg"
      },
      {
        "id": 3,
        "category": "hotncold",
        "name": "Norco Polyvinyl Cold Pack Oversize",
        "brand": "Norco",
        "color": "Blue",
        "price": 49.99,
        "productDetails": "Guaranteed not to split, crack or leak. Oversize 22'x13' (55 x 33cm). Excellent for both clinical and home use. Norco™ Polyvinyl cold packs retain their therapeutic cold for up to 30 minutes. Filled with a premium non-toxic gel that can withstand freezer temperatures as low as to 4°F (-20°C) without freezing solid.",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/NC70538_5e8f833c62bf6.jpg"
      },
      {
        "id": 4,
        "category": "hotncold",
        "name": "Norco Polyvinyl Cold Pack Cervical",
        "brand": "Norco",
        "color": "Blue",
        "price": 17.45,
        "productDetails": "Guaranteed not to split, crack or leak. Excellent for both clinical and home use. Norco™ Polyvinyl cold packs retain their therapeutic cold for up to 30 minutes. Filled with a premium non-toxic gel that can withstand freezer",
        "itemUrl": "https://ptuzencart.s3.us-east-2.amazonaws.com/images/7429_5e98c52466e91.jpg"
      }
    ]
  )
  
  return (
    <>

      <Switch>

        <Route path="/store/home">
          <StoreHomePage braces={braces} exercise={exercise} rollers={rollers} hotncold={hotncold} setItemsCountRefresher={setItemsCountRefresher}/>
        </Route>

        <Route path="/store/search">
          <StoreSearchPage braces={braces} exercise={exercise} rollers={rollers} hotncold={hotncold} setItemsCountRefresher={setItemsCountRefresher}/>
        </Route>

        <Route path="/store/cart">
          <StoreMyCartPage setItemsCountRefresher={setItemsCountRefresher}/>
        </Route>

      </Switch>      

    </>
  );
}
export default StorePage;