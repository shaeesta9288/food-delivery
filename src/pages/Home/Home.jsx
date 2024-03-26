import Header from "../../components/Header/Header";
import {useState} from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import "../Home/Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownloded/AppDownload";

const Home = () => {
  const [category, setCatergory] = useState("All");
  return (
    <>
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCatergory}/>
       <FoodDisplay category={category}/>
       <AppDownload/>
      
    </div>
    </>
  )

}
export default Home;
