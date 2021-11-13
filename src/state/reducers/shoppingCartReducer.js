const initialState = {
  total: 0,
  arr: [],
};

const removeEuro = (price) => {
  return Number(price.substring(1));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItem":
      const yra = state.arr.find((item2) => item2.id === action.payload.id);
      if (!yra)
        return {
          ...state,
          arr: [...state.arr, action.payload],
          total: (state.total +=
            removeEuro(action.payload.price) * action.payload.qty),
        };
      else
        return {
          ...state,
          arr: state.arr.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  qty: item.qty + action.payload.qty,
                }
              : item
          ),
          total: (state.total +=
            removeEuro(action.payload.price) * action.payload.qty),
        };
    case "removeItem":
      return {
        ...state,
        arr: state.arr.filter((item) => item.id !== action.payload.id),
        total: state.arr.reduce((a, b) => {
          if (b.id !== action.payload.id)
            return a + removeEuro(b.price) * b.qty;
          return a;
        }, 0),
      };
    case "removeItems":
      return {
        ...state,
        arr: [],
        total: 0,
      };
    case "updateItem":
      return {
        ...state,
        arr: state.arr.map((item) => {
          if (item.id === action.payload.id)
            return {
              ...item,
              qty: (item.qty += action.qty),
            };
          return item;
        }),
        total: (state.total += removeEuro(action.payload.price) * action.qty),
      };
    default:
      return state;
  }
};
export default reducer;
