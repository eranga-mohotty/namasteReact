import React from "react";
import ReactDom from "react-dom/client";
import logo from "url:../assets/img/logo.jpeg";

const Header = () => (
  <div className="header">
    <img src={logo} className="logo" alt="logo"></img>
    <ul className="nav">
      <li className="nav-item">Home</li>
      <li className="nav-item">About Us</li>
      <li className="nav-item">Contact Us</li>
      <li className="nav-item">Cart</li>
    </ul>
  </div>
);

const RestaurantCard = () => (
  <div className="RestaurantCard">
    <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=250"></img>
    <span className="bold">Kentucky</span>
    <span>American, Australian</span>
    <span>{5.0} Stars</span>
    <span>{20} minutes</span>
  </div>
);

const Body = () => (
  <div>
    <div>
      <input type="text" placeholder="Search"></input>
      <button>Search Restaurant </button>
    </div>
    <div class="restaurantContainer">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);

const App = () => (
  <div>
    <Header />
    <Body />
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
