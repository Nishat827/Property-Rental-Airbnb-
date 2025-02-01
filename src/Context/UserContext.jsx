import React, { useState, createContext } from 'react'

export let dataContext = createContext()

const UserContext = ({children}) => {

    let [title, setTitle] = useState("");
    let [addListing, setAddListing] = useState(false);
    let [addImage1, setAddImage1] = useState(null);
    let [addImage2, setAddImage2] = useState(null);
    let [addImage3, setAddImage3] = useState(null);
    let [price, setPrice] = useState("");

    let value = {
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
    }

  return (
    <div>
        <dataContext.Provider value={value}>
           {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext