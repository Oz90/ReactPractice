import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Setup variables

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promised Land",
    author: "Barack Obama"
  },

  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg",
    title: "Greenlights",
    author: "Matthew McConaughey"
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71cA1NMiI5L._AC_UL200_SR200,200_.jpg",
    title: "Home Body",
    author: "Rupi Kaur"
  }
];

function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = props => {
  // You can destructure the object either inside the function body
  // as shown below, or in the function parameters above
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
