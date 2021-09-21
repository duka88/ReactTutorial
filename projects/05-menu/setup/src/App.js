import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const cat = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [cats, setCats] = useState(cat);
  const [prods, setProds] = useState(items);
  const filter = (cat) => {
    if (cat === "all") {
      setProds(items);
    } else {
      const filterItems = items.filter((item) => item.category === cat);
      setProds(filterItems);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={cats} filter={filter} />
        <Menu prods={prods} />
      </section>
    </main>
  );
}

export default App;
