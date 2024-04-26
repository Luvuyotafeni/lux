import React from "react";

const Card = ({ title, desc, price }) => {
  return (
    <div > {/* Add the menu_item class */}
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
