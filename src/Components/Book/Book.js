import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  return (
    <div className="col mb-2">
    <div className="card h-auto shadow">
      <div style={{height:'300px'}} className="img-container text-center w-100 p-2"><img style={{maxWidth:'100%', width:'auto'}} src={book.image} className="h-100 card-img-top" alt="..."></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{book.bookName}</h5>
        <p className="card-text">Author: {book.author}</p>
      </div>
      <div className="card-footer d-flex align-items-center justify-content-center justify-content-between">
        <h3 className="text-success" style={{margin:'0'}}>${book.bookPrice}</h3>
        <Link to={`/checkout/${book._id}`} className="buy-btn btn btn-success">Buy Now</Link>
      </div>
    </div>
  </div>
  );
};

export default Book;