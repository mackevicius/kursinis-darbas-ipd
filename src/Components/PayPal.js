import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router";

const PayPal = ({ total }) => {
  const [paidFor, setPaidFor] = useState(false);
  const paypal = useRef();
  const history = useHistory();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Krepšelis",
                amount: {
                  currentcy_code: "EUR",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();

          setPaidFor(true);
        },
        onError: (err) => {},
      })
      .render(paypal.current);
  }, []);
  useEffect(() => {
    if (paidFor) {
      history.push("/successfulPurchase");
    }
  }, [paidFor]);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
