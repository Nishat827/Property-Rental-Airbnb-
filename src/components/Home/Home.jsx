import React, {useContext} from 'react'
import "./Home.css"
import Card from '../Card/Card'
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import flat from "../../assets/roomhouse.avif"
import flat1 from "../../assets/roomhouse1.avif"
import flat2 from "../../assets/roomhouse3.avif"
import vila from "../../assets/villa.jpg"
import vila1 from "../../assets/villa1.jpg"
import vila2 from "../../assets/villa3.jpg"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain3.avif"
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import huthouse2 from "../../assets/huthouse2.jpg"
import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import old from "../../assets/old.avif"
import old1 from "../../assets/old2.avif"
import old2 from "../../assets/old3.avif"
import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import { dataContext } from '../../Context/UserContext'


const Home = () => {
   let {
      title,
      setTitle,
      addListing,
      setAddListing,
      addImage1,
      setAddImage1,
      addImage2,
      setAddImage2,
      addImage3, 
      setAddImage3,
      price,
      setPrice
  } = useContext(dataContext);
  return (
    <div id="home">
        <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Dehri"} price={"50,000"}/>
        <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Framhouse in Pune"} price={"90,000"}/>
        <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK Flat in Manali"} price={"75,000"}/>
        <Card image1={flat} image2={flat1} image3={flat2} title={"1BHK Modern Flat in Delhi"} price={"95,000"}/>
        <Card image1={vila2} image2={vila} image3={vila1} title={"2BHK Villa in Hyderabad"} price={"70,000"}/>
        <Card image1={mountain} image2={mountain1} image3={mountain2} title={"1BHK Villa in Channai"} price={"80,000"}/>
        <Card image1={huthouse2} image2={huthouse} image3={huthouse1} title={"1BHK Villa in Kashmir"} price={"60,000"}/>
        <Card image1={village} image2={village1} image3={village2} title={"2BHK Villa in Lucknow"} price={"50,000"}/>
        <Card image1={room} image2={room1} image3={room2} title={"1BHK Villa in Bubhneswar"} price={"45,000"}/>
        <Card image1={old} image2={old1} image3={old2} title={"1BHK Villa in Mumbai"} price={"97,000"}/>
        <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"1BHK 2nd floor in Kolkata"} price={"20,000"}/>
        <Card image1={hut3} image2={hut2} image3={hut1} title={"1BHK House in Goa"} price={"85,000"}/>
        {addListing ? <Card  image1={addImage1 ? URL.createObjectURL(addImage1) : ""}
    image2={addImage2 ? URL.createObjectURL(addImage2) : ""}
    image3={addImage3 ? URL.createObjectURL(addImage3) : ""} title={title} price={price}/> : ""}

    </div>
  )
}

export default Home