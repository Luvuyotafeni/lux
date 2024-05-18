import React from 'react'

const Itempopup = ({ item, onClose }) => {
    return (
        <div className="popup_container">
          <div className="popup_content">
            <span className="close_button" onClick={onClose}>
              &times;
            </span>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="item_image" />
            <p>{item.desc}</p>
            <p>Price: R {item.price}</p>
            <button onClick={() => alert("Item added to cart!")}>Add to Cart</button>
          </div>
        </div>
      );
    };

export default Itempopup