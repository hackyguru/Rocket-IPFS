import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function About ) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  let { push } = useHistory();
  return (
    <div className="container">
      <h1>Hello about</h1>
    </div>
  );
};
