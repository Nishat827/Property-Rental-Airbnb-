import React, { useContext } from 'react'
import "./Listing.css"
import { MdAddCircleOutline } from "react-icons/md";
import { dataContext } from '../../Context/UserContext';
const Listing = () => {

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
    <div id='listing' onSubmit={(e)=>{
      e.preventDefault();
      setAddListing(true);
      alert("Added Successfully...👍")
      
    }}>
      <form action=''>
        <span id="listingtitle">Add Your Listing</span>
        <div className="list">
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' required  onChange={(e)=>{
            setTitle(e.target.value);
          }}value={title} />  
        </div>
        <div className="list">
          <label htmlFor='description'>Description</label>
          <textarea id='description'></textarea>
        </div>
        <div className="list">
          <label htmlFor='img1'>Image URL 1</label>
          <input type='file' id='img1' required onChange={(e)=>{
            setAddImage1(e.target.files[0]);
          }}/>
        </div>
        <div className="list">
          <label htmlFor='img2'>Image URL 2</label>
          <input type='file' id='img2' required onChange={(e)=>{
            setAddImage2(e.target.files[1]);
          }}/>
        </div>
        <div className="list">
          <label htmlFor='img3'>Image URL 3</label>
          <input type='file' id='img3' required  onChange={(e)=>{
            setAddImage3(e.target.files[2]);
          }}/>
        </div>
        <div className="list">
          <label htmlFor='price'>Price</label>
          <input type='text' id='price' required value={price} onChange={(e)=>{
            setPrice(e.target.value);
          }}/>
        </div>
        <div className="list">
          <label htmlFor='location'>Location</label>
          <input type='text' id='location' />
        </div>
        <button id='listingbtn'>Add<MdAddCircleOutline />
        </button>
      </form>
    </div>
  )
}

export default Listing 