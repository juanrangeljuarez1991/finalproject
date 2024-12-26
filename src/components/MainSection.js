import React from "react";
import '../styles/menu.css'


const MainSection = () => {
  return (
      <div className="mainMenu">
          <a className="mainTittle"><b>This weeks specials</b></a>
          <a><button type="button">Online Menu</button></a>
          <br></br>
          <div className="mainBody">
            <div className="containerMenu">
                  <div class="box A">Greek Salad</div>
                  <div class="box B">Bruchets</div>
                  <div class="box C">Lemon Dessert</div>
            </div>
          </div>
      </div>

  );
};
export default MainSection;