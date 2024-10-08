import React, { useState } from 'react';

export default function Index() {
  const products = [
  
      { 
        img: "https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-07/mansory-rolls-royce-ghost-my-2021-01.jpg?itok=-aQ6nXpw",
        name: "Rolls-Royce Ghost", 
        price: 2148845100,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Rolls-Royce"
      },
      { 
        img: "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-in-detail/page-properties/01_RR_PHANTOM-single-twin-card-min.jpg",
        name: "Rolls-Royce Phantom", 
        price: 37715000, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Rolls-Royce"
      },
      { 
        img: "https://imgd.aeplcdn.com/1280x720/cw/ec/34427/RollsRoyce-Cullinan-Exterior-158729.jpg?wm=0&q=80",
        name: "Rolls-Royce Cullinan", 
        price: 27834050,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Rolls-Royce"
      },
      { 
        img: "https://www.mansory.com/sites/default/files/2022-10/RR2022-04-2.jpg",
        name: "Rolls-Royce Dawn", 
        price: 29689500,
        fuel: "Gasoline", 
        model: "2021", 
        rating: 5,
        brand: "Rolls-Royce"
      },
      { 
        img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/21135/wraith-exterior-right-front-three-quarter-62430.jpeg?isig=0&q=80",
        name: "Rolls-Royce Wraith", 
        price: 28498050,
        fuel: "Gasoline", 
        model: "2021", 
        rating: 5,
        brand: "Rolls-Royce"
      },

     
      { 
        img: "https://i.ytimg.com/vi/6y4eNROcFik/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFC_f0FOzLO-OG5uEzYPm9j4edCQ",
        name: "Lamborghini Huracan STO", 
        price: 27110554, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Lamborghini"
      },
      { 
        img: "https://ocdn.eu/pulscms-transforms/1/Ib5k9kpTURBXy9iMzNkOTBjODlhOWE5YzkwM2NmZjdlNTYxZTFiODlmNC5qcGeSlQMAzLnNBu3NA-WTBc0EsM0CpN4AAqEwBaExAA",
        name: "Lamborghini Urus", 
        price: 18716500, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Lamborghini"
      },
      { 
        img: "https://www.wsupercars.com/wp-content/uploads/2020-Lamborghini-Aventador-SVJ-63-Roadster-001.jpg",
        name: "Lamborghini Aventador SVJ", 
        price: 42975330,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Lamborghini"
      },
      { 
        img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/sian_rds_refresh_2023/s5.jpg",
        name: "Lamborghini Sián", 
        price: 296280000, 
        fuel: "Hybrid", 
        model: "2022", 
        rating: 5,
        brand: "Lamborghini"
      },
      { 
        img: "https://img.goodfon.com/wallpaper/big/e/e5/lamborghini-countach-countach-25th-anniversary-white-cars-ph.webp",
        name: "Lamborghini Countach", 
        price: 218410000, 
        fuel: "Hybrid", 
        model: "2022", 
        rating: 5,
        brand: "Lamborghini"
      },
 
      { 
        img: "https://car-images.bauersecure.com/wp-images/4418/bmw_ix_050.jpg",
        name: "BMW iX", 
        price: 6922200, 
        fuel: "Electric", 
        model: "2023", 
        rating: 4,
        brand: "BMW"
      },
      { 
        img: "https://vehicle-images.dealerinspire.com/0c59-18003204/WBY73AW01RFT19760/ac1c329eab9f86691fcae85a80af260c.jpg",
        name: "BMW i4", 
        price: 4614800,
        fuel: "Electric", 
        model: "2022", 
        rating: 4,
        brand: "BMW"
      },
      { 
        img: "https://cdn.kodixauto.ru/media/image/5f8557107dd74b0001582251",
        name: "BMW M3 Competition", 
        price: 6032035,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 4,
        brand: "BMW"
      },
      { 
        img: "https://cdn.motor1.com/images/mgl/pb74WW/s3/bmw-x5-m-mhx5-700-by-manhart.jpg",
        name: "BMW X5 M", 
        price: 8723300,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 4,
        brand: "BMW"
      },
      { 
        img: "https://autodesignmagazine.com/wp-content/uploads/2024/02/p90537519-highres.jpg",
        name: "BMW X7", 
        price: 6479850, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "BMW"
      },
      
      { 
        img: "https://media.wired.com/photos/61bbc2cbb540f6bc340c4429/3:2/w_2400,h_1600,c_limit/Gear-Mercedes-EQS-21C0123_001.jpg",
        name: "Mercedes EQS", 
        price: 8491730, 
        fuel: "Electric", 
        model: "2022", 
        rating: 5,
        brand: "Mercedes"
      },
      { 
        img: "https://img.indianautosblog.com/2021/06/18/2021-mercedes-benz-s-class-front-quarter-4c9b.jpg",
        name: "Mercedes S-Class", 
        price: 9232050, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Mercedes"
      },
      { 
        img: "https://vehicle-images.dealerinspire.com/9e97-11000871/thumbnails/large/4JGFD6BB8SB281791/c08e6863ce5588d115609cc397f2336a.jpg",
        name: "Mercedes GLE", 
        price: 4731000, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 4,
        brand: "Mercedes"
      },
      { 
        img: "https://www.team-bhp.com/sites/default/files/styles/check_large_review/public/20230404012130_4.jpg",
        name: "Mercedes GLS", 
        price: 6391000,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Mercedes"
      },
      { 
        img: "https://www.cnet.com/a/img/resize/c8e177fc03893ab03730c078ecf53a457f249009/hub/2018/09/25/15f64cde-e248-4093-8528-44372905fdd6/2019-mercedes-amg-gt-63-s-4-door-coupe-29.jpg?auto=webp&fit=crop&height=675&width=1200",
        name: "Mercedes AMG GT 63", 
        price: 11620000,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Mercedes"
      },
    
      { 
        img: "https://www.topgear.com/sites/default/files/images/inline-galleries/2024/06/d037469726a5b758ed00f56aab9df588/A242569_large.jpg",
        name: "Audi RS e-Tron GT", 
        price: 11611700,
        fuel: "Electric", 
        model: "2022", 
        rating: 5,
        brand: "Audi"
      },
      { 
        img: "https://i.ytimg.com/vi/dXeKfIJihAQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-t1TbXzRly3jRK6-BGsNiar0R9Q",
        name: "Audi A8", 
        price: 7187800,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 4,
        brand: "Audi"
      },
      { 
        img: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C3732/U441/IMG_20153-large.jpg",
        name: "Audi Q7", 
        price: 4735300, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 4,
        brand: "Audi"
      },
      { 
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/audi-q8-facelift-243214536-16x9_0.jpg?VersionId=ax0ea90Ku5IwFu.QdtNQzJ6QRVGiHk7K&size=690:388",
        name: "Audi Q8", 
        price: 5843200,
        fuel: "Gasoline", 
        model: "2022", 
        rating: 4,
        brand: "Audi"
      },
      { 
        img: "https://cdn.motor1.com/images/mgl/7MK27/s3/abt-audi-rs7-r.jpg",
        name: "Audi RS7", 
        price: 9835500, 
        fuel: "Gasoline", 
        model: "2022", 
        rating: 5,
        brand: "Audi"
      }
      
      
    ];
    

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div>
      <h1 className="heading">Search Cars</h1>

      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search by car name" 
          className="search-bar" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select className="filter-select" onChange={(e) => setSelectedBrand(e.target.value)}>
          <option value="">All Brands</option>
          <option value="Rolls-Royce">Rolls-Royce</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="Lamborghini">Lamborghini</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-details">
                Model: {product.model} | Fuel: {product.fuel} | Rating: {product.rating} stars
              </p>
            </div>
          ))
        ) : (
          <p>No cars found matching the filters</p>
        )}
      </div>
    </div>
  );
}
