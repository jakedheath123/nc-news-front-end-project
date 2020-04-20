import React from "react";

const ErrorDisplay = props => {
  const { msg, status } = props;
  return (
    <section>
      <h2>
        Status : {status} - {msg}
      </h2>
      {msg === "Author not found" ? (
        <>
          <h3>Available authors:</h3>
          <ul>
            <li>cooljmessy</li>
            <li>grumpy19</li>
            <li>happyamy2016</li>
            <li>jessjelly</li>
            <li>tickle122</li>
            <li>weegembump</li>
          </ul>
        </>
      ) : null}
    </section>
  );
};

export default ErrorDisplay;
