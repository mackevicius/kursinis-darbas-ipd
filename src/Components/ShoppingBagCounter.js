import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";

const ShoppingBagCounter = ({ shoppingBag }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const count = shoppingBag.arr.length;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AiOutlineShopping className="icon" size={isMobile ? "3.7em" : "2.1em"} />
      {count !== 0 && (
        <span
          class="position-absolute translate-middle badge rounded-pill bg-danger"
          style={{
            top: isMobile ? "27px" : "13px",
            right: isMobile ? "21px" : "9px",
            opacity: "0.8",
          }}
        >
          <span style={{ color: "white" }}>{count}</span>
        </span>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { shoppingBag: state.prekes };
}
export default connect(mapStateToProps)(ShoppingBagCounter);
