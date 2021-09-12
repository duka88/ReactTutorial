import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    title: "Zatamnjenje",
    author: "Ed Brubejker",
    img: "https://carobnaknjiga.rs/chest/pimg/1628687699_Naslovna%20sajt.jpg",
  },
  {
    id: 2,
    title: "Y, poslednji muškarac",
    author: "Brajan K. Von",
    img: "https://carobnaknjiga.rs/chest/pimg/1630395370_Y%20-%20naslovna%20sajt%202.jpg",
  },
];

const App = () => {
  return (
    <section className="booklist">
      {books.map((item) => {
        return <Book {...item} key={item.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={{}}>{author}</h4>
    </article>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
