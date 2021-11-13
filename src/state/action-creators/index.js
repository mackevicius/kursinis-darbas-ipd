export const addToCart = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "addItem",
      payload: obj,
    });
  };
};
export const removeFromCart = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "removeItem",
      payload: obj,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: "removeItems",
    });
  };
};

export const updateItem = (obj, qty) => {
  return (dispatch) => {
    dispatch({
      type: "updateItem",
      payload: obj,
      qty,
    });
  };
};
