import React, { useState, useEffect } from "react";
import "./ShoppingBag.css";
import "./ProductPage.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { bindActionCreators } from "redux";
import * as actions from "../state/action-creators/index";
import { useDispatch } from "react-redux";

const ShoppingBagItem = ({ item }) => {
  const [item2, setItem2] = useState(item);
  const [num, setNum] = useState(item2.qty);
  const [itemPrice, setItemPrice] = useState(
    item2.price.slice(1, item2.length) * num
  );

  const dispatch = useDispatch();
  const { updateItem, removeFromCart } = bindActionCreators(actions, dispatch);

  const minus = () => {
    if (num !== 0) {
      setNum(num - 1);
      updateItem(item2, -1);
    }
  };
  const plus = () => {
    if (num !== item2.stock) {
      setNum(num + 1);
      updateItem(item2, 1);
    }
  };

  return (
    <div className="shopping-bag-item">
      <div className="itemS">
        <h5>{item2.name}</h5>
        <img
          src={`${process.env.PUBLIC_URL}/searchResults/${item2.image}`}
          alt="lop"
        />
      </div>

      <div className="itemS">
        {item.sizes ? <p>Dydis</p> : <p>Modelis</p>}
        {item2.value}
      </div>
      <div className="itemS">
        <p>Kiekis:</p>
        <div>
          <AiOutlineMinus size="2em" className="pliusminus" onClick={minus} />
          <input
            type="number"
            min={1}
            max={item2.stock}
            step={1}
            value={num}
            readOnly
          />
          <AiOutlinePlus size="2em" className="pliusminus" onClick={plus} />
        </div>
      </div>

      <div className="itemS">
        <p>Kaina</p>
        {item2.price}
      </div>
      <div className="itemS">
        <RiCloseFill
          onClick={() => removeFromCart(item2)}
          className="closeS"
          size="3em"
        />
      </div>
    </div>
  );
};

export default ShoppingBagItem;
