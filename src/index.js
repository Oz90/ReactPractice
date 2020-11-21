import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Setup variables
const author = "Barack Obama";
const title = "A Promised Land";
var img =
  "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="Random title" number={22} />
    </section>
  );
}

const Book = props => {
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
