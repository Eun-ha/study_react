import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_2x._CB418727893_.jpg" alt="" />
      <div className="home__row">
        <Product 
          id="12321341"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg"
        />
        <Product 
          id="12321341"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product 
          id="12321341"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg"
        />
        <Product 
          id="12321341"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg"
        />
        <Product 
          id="12321341"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product 
          id="12321341"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg"
        />
      </div>
      
    </div>
  )
}

export default Home
