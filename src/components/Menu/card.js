import React, { useState, useEffect } from "react";
import ItemPopup from "./Itempopup";

const Card = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    const menuContainer = document.querySelector('.menu_container');
    if (menuContainer) {
      if (showPopup || showBackdrop) {
        document.body.classList.add("disable-interactions");
        menuContainer.classList.add('popup_shown');
      } else {
        document.body.classList.remove("disable-interactions");
        menuContainer.classList.remove('popup_shown');
      }
    }
    return () => {
      document.body.classList.remove("disable-interactions");
      if (menuContainer) {
        menuContainer.classList.remove('popup_shown');
      }
    };
  }, [showPopup, showBackdrop]);

  const handlePopupClose = () => {
    setShowPopup(false);
    setShowBackdrop(false);
  };

  return (
    <div className="menu_item">
      <div>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} className="item_image" />
        <p>{item.desc}</p>
        <button onClick={() => {
          setShowPopup(true);
          setShowBackdrop(true);
        }}>View Details</button>
      </div>
      {showPopup && (
        <ItemPopup item={item} onClose={handlePopupClose} />
      )}
      {showBackdrop && <div className="popup_backdrop" />}
    </div>
  );
};

export default Card;
