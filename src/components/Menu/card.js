import React from "react";

const Card = ({ title, desc,image, price  }) => {
  return (
    <div className="menu_item">
      <div>
      <h2>{title}</h2>
      <img src={image} alt={title} className="item_image"/>
      <p>{desc}</p>
      </div>
      <p>R :{price}</p>
    </div>
  );
};

export default Card;
