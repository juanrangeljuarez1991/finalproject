import React from "react";
import '../styles/specials.css'

const Specials = () => {
  
    return (
        <div className="mainMenu">
          <a className="mainTittle"><b>Specials</b></a>
          <a><button type="button">Online Menu</button></a>
          <br></br>
          <div className="mainBodyS">
            <div className="containerMenuS">
                  <div class="box">
                      <a><img src={require('../images/greek salad.jpg')} alt="restaurant" width="200" height="150" /></a>
                      <div className="cardTitle">
                        <h4>Greek salad</h4>
                        <h4 id="cardTitlePrice">$12.99</h4>
                      </div>
                      <p className="itemDescription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                      <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/bruchetta.jpeg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Bruchetta</h4>
                          <h4 id="cardTitlePrice">$5.99</h4>
                        </div>
                        <p className="itemDescription">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/lemon dessert.jpg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Lemon Dessert</h4>
                          <h4 id="cardTitlePrice">$5.00</h4>
                        </div>
                        <p className="itemDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/lemon dessert.jpg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Lemon Dessert</h4>
                          <h4 id="cardTitlePrice">$5.00</h4>
                        </div>
                        <p className="itemDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/lemon dessert.jpg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Lemon Dessert</h4>
                          <h4 id="cardTitlePrice">$5.00</h4>
                        </div>
                        <p className="itemDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/lemon dessert.jpg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Lemon Dessert</h4>
                          <h4 id="cardTitlePrice">$5.00</h4>
                        </div>
                        <p className="itemDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/lemon dessert.jpg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Lemon Dessert</h4>
                          <h4 id="cardTitlePrice">$5.00</h4>
                        </div>
                        <p className="itemDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                  </div>
                  <div class="box">
                        <a><img src={require('../images/lemon dessert.jpg')} alt="restaurant" width="200" height="150" /></a>
                        <div className="cardTitle">
                          <h4>Lemon Dessert</h4>
                          <h4 id="cardTitlePrice">$5.00</h4>
                        </div>
                        <p className="itemDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                  </div>
            </div>
          </div>
      </div>
    );
  };
  export default Specials;