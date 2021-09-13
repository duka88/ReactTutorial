import React from "react";

const ErrorExample = () => {
  let title = "teitle";
  const hendleClick = () => {
    title = "hello ";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={hendleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
