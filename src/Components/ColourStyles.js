export const colourStyles = {
  control: (styles, isClicked) => ({
    ...styles,
    backgroundColor: "white",
    border: isClicked ? "2px solid red " : "2px solid black",

    boxShadow: "none",
  }),
  option: (styles, { isSelected, isFocused, isClicked }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "black" : "white",
      backgroundColor: isFocused ? "black" : "white",

      color: isFocused ? "white" : "black",
    };
  },
  control: (base) => ({
    ...base,
    "&:hover": {
      border: "2px solid black",
      boxShadow: "none",
    },
    boxShadow: "none",
    border: "2px solid black",
  }),
};
