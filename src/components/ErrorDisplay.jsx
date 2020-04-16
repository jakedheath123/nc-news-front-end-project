import React from "react";

const ErrorDisplay = props => {
  const { msg, status } = props;
  return (
    <section>
      <h2>
        Status : {status} - {msg}
      </h2>
    </section>
  );
};

export default ErrorDisplay;
