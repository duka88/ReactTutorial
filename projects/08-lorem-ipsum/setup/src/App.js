import React, { useState } from "react";
import data from "./data";
function App() {
  const [par, setPar] = useState([]);
  const [show, setShow] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (show > data.length) {
      setPar(data);
      return;
    }
    if (show > 0) {
      const pars = data.slice(0, show);
      setPar(pars);
    }
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={show}
          onChange={(e) => setShow(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {par.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
