import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="#8d8d8d"
        barColor="#000000"
      />
    </div>
  );
};

export default Loader;
