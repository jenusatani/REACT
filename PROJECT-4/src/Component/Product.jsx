import React, { useState } from 'react'

export default function Product() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const [nameerr, setNameerr] = useState("")
  const [emailerr, setEmailerr] = useState("")    
  const [phoneerr, setPhoneerr] = useState("")
  const [addresserr, setAddresserr] = useState("")

  // Add product
  const [phonename, setphoneName] = useState("")
  const [phoneprice, setphonePrice] = useState("")
  const [phoneWarranty, setphoneWarranty] = useState("")

  const [phonenameErr, setphoneNameErr] = useState("")
  const [phonepriceErr, setphonePriceErr] = useState("")
  const [phoneWarrantyErr, setphoneWarrantyErr] = useState("")

  // cars
  const [carsname, setcarsName] = useState("")
  const [carsprice, setcarsPrice] = useState("")
  const [carsmodel, setcarsmodel] = useState("")

  const [carsnameErr, setcarsNameErr] = useState("")
  const [carspriceErr, setcarsPriceErr] = useState("")
  const [carsmodelErr, setcarsmodelErr] = useState("")

  // leptops
  const [leptopsTitle, setleptopsTitle] = useState("")
  const [leptopsAuthor, setleptopsAuthor] = useState("")
  const [leptopsPrice, setleptopsPrice] = useState("")

  const [leptopsTitleErr, setleptopsTitleErr] = useState("")
  const [leptopsAuthorErr, setleptopsAuthorErr] = useState("")
  const [leptopsPriceErr, setleptopsPriceErr] = useState("")


  const [gameName, setGameName] = useState("")
  const [gamePrice, setGamePrice] = useState("")
  const [gameCtegory, setGameCategory] = useState("")


  const [gameNameErr, setGameNameErr] = useState("")
  const [gamePriceErr, setGamePriceErr] = useState("")
  const [gameCtegoryErr, setGameCategoryErr] = useState("")




  const [hide, setHide] = useState("")
  const [detail, setDetail] = useState("none")
  const [product, setProduct] = useState("none")
  const [card, setCard] = useState("none")
  const [category, setCategory] = useState("")

  const setupdate = (e) => {
    setProduct("block")
  }

  // Seller Form Submission
  const formSubmit = (e) => {
    e.preventDefault()
    let submit = true
    if (!name) {
      setNameerr("Name Required")
      submit = false
    } else {
      setNameerr("")
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailerr("Valid Email Required")
      submit = false
    } else {
      setEmailerr("")
    }

    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone)) {
      setPhoneerr("Phone Required")
      submit = false
    } else {
      setPhoneerr("")
    }


    if (!address) {
      setAddresserr("Address Required")
      submit = false
    } else {
      setAddresserr("")
    }

    if (submit) {
      setHide('none')
      setDetail("block")
      console.log(name, email, phone, address)
    }
  }

  // phone Form Submission
  const formSubmit2 = (e) => {
    e.preventDefault()
    let submit2 = true

    if (!phonename) {
      setphoneNameErr("Name Required")
      submit2 = false
    } else {
      setphoneNameErr("")
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(phoneprice)) {
      setphonePriceErr("Price Required")
      submit2 = false
    } else {
      setphonePriceErr("")
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(phoneWarranty)) {
      setphoneWarrantyErr("Warranty Required")
      submit2 = false
    } else {
      setphoneWarrantyErr("")
    }


    if (submit2) {
      setCard("block")
      setProduct("none")
    }
  }

  // cars Form Submission
  const formSubmit3 = (e) => {
    e.preventDefault();
    let submit3 = true;

    if (!carsname) {
      setcarsNameErr("Name Required");
      submit3 = false;
    } else {
      setcarsNameErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(carsprice)) {
      setcarsPriceErr("Price Required");
      submit3 = false;
    } else {
      setcarsPriceErr("");
    }

    if (!carsmodel) {
      setcarsmodelErr("model Required");
      submit3 = false;
    } else {
      setcarsmodelErr("");
    }
    if (submit3) {
      setCard("block");
      setProduct("none");
    }
  };

  // leptops Form Submission
  const formSubmit4 = (e) => {
    e.preventDefault();
    let submit4 = true;

    if (!leptopsTitle) {
      setleptopsTitleErr("Title Required");
      submit4 = false;
    } else {
      setleptopsTitleErr("");
    }

    if (!leptopsAuthor) {
      setleptopsAuthorErr("brand Required");
      submit4 = false;
    } else {
      setleptopsAuthorErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(leptopsPrice)) {
      setleptopsPriceErr("Price Required");
      submit4 = false;
    } else {
      setleptopsPriceErr("");
    }

    if (submit4) {
      setCard("block");
      setProduct("none");
    }
  };


  // game form submit 

  const formSubmit5 = (e) => {
    e.preventDefault();
    let submit5 = true;

    if (!gameName) {
      setGameNameErr("Name Required");
      submit5 = false;
    } else {
      setGameNameErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(gamePrice)) {
      setGamePriceErr("Price Required");
      submit5 = false;
    } else {
      setGamePriceErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(gamemodel)) {
      setGamemodelErr("model Required");
      submit5 = false;
    } else {
      setGamemodelErr("");
    }

    if (submit5) {
      setCard("block");
      setProduct("none");
    }
  };



 
  return (
    <div>
      <div className="seller" style={{ display: hide }}>
        <form onSubmit={(e) => { formSubmit(e) }}>
          <h2>Registration</h2>
          <br />
          <label htmlFor="">Name</label><br />
          <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
          <span>{nameerr}</span>

          <label htmlFor="">Email</label><br />
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <span>{emailerr}</span>

          <label htmlFor="">Phone</label><br />
          <input type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
          <span>{phoneerr}</span>

          <label htmlFor="">Address</label><br />
          <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
          <span>{addresserr}</span>

          <button className='register'>
            Register
          </button>
        </form>
      </div>

      {/* ////////////////////// detail /////////////////////////////// */}

      <header className="main-info" style={{ display: detail }}>
        <div className="inner-info">
          <div className="all">
            <span className="frist-info">Name:</span>
            <span className="in">{name}</span>
          </div>
          <div className="all">
            <span className="frist-info">Email:</span>
            <span className="in">{email}</span>
          </div>
          <div className="all">
            <span className="frist-info">Phone:</span>
            <span className="in">{phone}</span>
          </div>
          
          <div className="all">
            <span className="frist-info">Address:</span>
            <span className="in">{address}</span>
          </div>
        </div>

        <button className='detail-btn' onClick={() => setupdate()}>
          Add Product <i className="ri-link"></i>
        </button>
      </header>

      {/* ////////////////////////// product add //////////////////////////////////////// */}

      <div className="main-product" style={{ display: product }}>
        <div className="flex">
          <form>
            <h2>Select Category</h2>
            <br />
            <select name="" id="select-items" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="phone">phone</option>
              <option value="cars">cars</option>
              <option value="games">Games</option>
              <option value="leptops">leptops</option>
              <option value=""></option>
            </select>

            {category === "phone" && (
              <>
                <input className='product-name-phone' type="text" placeholder="Product Name" onChange={(e) => setphoneName(e.target.value)} />
                <span>{phonenameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setphonePrice(e.target.value)} />
                <span>{phonepriceErr}</span>

                <input type="text" placeholder="Warranty (In Months)" onChange={(e) => setphoneWarranty(e.target.value)} />
                <span>{phoneWarrantyErr}</span>

                <button type="submit" className='phonec-btn' onClick={(e) => formSubmit2(e)}>
                  Confirm
                </button>
              </>
            )}

            {category === "cars" && (
              <>
                <input className='product-name-phone' type="text" placeholder="Product Name" onChange={(e) => setcarsName(e.target.value)} />
                <span>{carsnameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setcarsPrice(e.target.value)} />
                <span>{carspriceErr}</span>

                <input type="text" placeholder="model" onChange={(e) => setcarsmodel(e.target.value)} />
                <span>{carsmodelErr}</span>

                <button type="submit" className='phonec-btn' onClick={(e) => formSubmit3(e)}>
                  Confirm
                </button>
              </>
            )}
            {category === "leptops" && (
              <>
                <input className='product-name-phone' type="text" placeholder="Title" onChange={(e) => setleptopsTitle(e.target.value)} />
                <span>{leptopsTitleErr}</span>

                <input type="text" placeholder="Author" onChange={(e) => setleptopsAuthor(e.target.value)} />
                <span>{leptopsAuthorErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setleptopsPrice(e.target.value)} />
                <span>{leptopsPriceErr}</span>

                <button type="submit" className='phonec-btn' onClick={(e) => formSubmit4(e)}>
                  Confirm
                </button>
              </>
            )}

            {/* /////games///////////// */}



            {category === "games" && (
              <>
                <input className='product-name-phone' type="text" placeholder="Name" onChange={(e) => setGameName(e.target.value)} />
                <span>{gameNameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setGamePrice(e.target.value)} />
                <span>{gamePriceErr}</span>

                <input type="text" placeholder="model" onChange={(e) => setGamemodel(e.target.value)} />
                <span>{gamemodelErr}</span>

                <button type="submit" className='phonec-btn' onClick={(e) => formSubmit5(e)}>
                  Confirm
                </button>
              </>
            )}






      



            
          </form>
        </div>
      </div>

      {/* //////////// card ///////// */}

      <div className="product-card" style={{ display: card }}>
        <div className="card-content">

          {category === "leptops" && (
            <>
              <h2 className="product-name">{leptopsTitle}</h2>
              <p className="author">: {leptopsAuthor}</p>
              <p className="price">${leptopsPrice}</p>
            </>
          )}

          {category === "phone" && (
            <>
              <h2 className="product-name">{phonename}</h2>
              <p className="price">${phoneprice}</p>
              <p className="warranty">Warranty: {phoneWarranty} months</p>
            </>
          )}

          {category === "cars" && (
            <>
              <h2 className="product-name">{carsname}</h2>
              <p className="price">${carsprice}</p>
              <p className="model">model: {carsmodel}</p>
            </>
          )}




          {category === "games" && (
            <>
              <h2 className="product-name">{gameName}</h2>
              <p className="price">${gamePrice}</p>
              <p className="model">model: {gamemodel}GB</p>
            </>
          )}




         
        </div>
        <button className="add-to-cart-btn">View</button>
      </div>
    </div>
  )
}