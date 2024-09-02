import React from 'react';

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://preview.colorlib.com/theme/thelawyer/assets/img/logo/logo.png"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ul">
              <li className="nav-item">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Case Studies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid sec2">
        <div className="row">
          <span>COMMITTED TO SUCCESS</span>

          <h1>
            Don't Feel Helpless <br /> We Fight for Justice
          </h1>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat is aute irure.
          </p>

          <button className="bu">Learn About Us</button>
        </div>
      </div>

      <div className="container-fluid our">
        <div className="row">
          <div className="col">
            <span>OUR PRACTICING AREA</span>
            <h1>
              Area Of Practice That Can <br /> Help You To Win
            </h1>
          </div>
        </div>
      </div>

      <div className="container car">
        <div className="row d-flex">
          <div className="col">
            <img src="car.png" alt="" />
            <br />
            <a href="" className="a1">Health Law</a>

            <p>
              Sorem hpsum folor sixdsft amhtget, <br /> consectetur adipiscing eliht, sed do <br /> eiusmod tempor incidi.
            </p>

            <a href="" className="a2">Read More &gt;</a>
          </div>
          <div className="col">
            <img src="/stethoscope.png" alt="" />
            <br />
            <a href="" className="a1">Insurance Law</a>

            <p>
              Sorem hpsum folor sixdsft amhtget, <br /> consectetur adipiscing eliht, sed do <br /> eiusmod tempor incidi.
            </p>

            <a href="" className="a2">Read More &gt;</a>
          </div>
          <div className="col">
            <img src="/insurance.png" alt="" />
            <br />
            <a href="" className="a1">Vehicle Accident</a>

            <p>
              Sorem  folor sixdsft amhtget, <br /> consectetur adipiscing eliht, sed do <br /> eiusmod tempor incidi.
            </p>

            <a href="" className="a2">Read More &gt;</a>
          </div>
        </div>
      </div>

      <div className="container-fluid ab mt-5">
        <div className="row">
          <div className="col im col-lg-6 col-md-12 col-sm-12">
            <img
              className="img-fluid"
              src="https://preview.colorlib.com/theme/thelawyer/assets/img/gallery/about.png.webp"
              alt=""
            />
          </div>
          <div className="col we col-lg-6 col-md-12 col-sm-12">
            <br />
            <span>ABOUT OUR LAW AGENCY</span>

            <h2>
              We are committed to <br /> better service
            </h2>

            <p className="p1">
              <b>Mollit anim laborum duis adseu dolor iuyn <br /> voluptcate velit ess cillum dolore egru lofrre dsu.</b>
            </p>

            <p className="p2">
              Mollit anim laborum. Dvcuis aute serunt iruxvfg dhjkolohr indd re <br /> voluptate velit esscillumlore eu quife nrulla parihatur. <br /> Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg <br /> dhjinulpadeserunt moll.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container in border-1 w-50 mt-5">
          <div className="row">
            <div className="col">
              <br />
              <br />
              <br />
              <br />
              <span className="text-light">FILL UP TO GET A QUOTE</span>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2 className="text-light fs-1">
                World's Leading Law <br /> Consultancy Agency!
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input placeholder="Name" type="text" className="i1 border-0" />
            </div>
            <div className="col">
              <input placeholder="Phone" type="number" className="i2 border-0" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input className="i3 border-0" type="text" placeholder="Health Law" />
            </div>
            <div className="col">
              <input type="email" placeholder="Email" className="i4 border-0" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input type="submit" className="i5 border-0" />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid last w-100">
        <div className="row">
          <div className="col c1">
            <h2 className="text-light">
              Are you Searching For a <br /> First-Class Consultant?
            </h2>
          </div>
          <div className="col c1">
            <button className="bu2">Learn About Us</button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="back container-fluid">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Screenshot 2024-02-09 111503.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Screenshot 2024-02-09 111503.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Screenshot 2024-02-09 111503.png" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
