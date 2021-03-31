import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  return (
    <div className="col mb-2">
    <div className="card h-auto">
      <div style={{height:'300px'}} className="img-container text-center w-100 p-2"><img style={{maxWidth:'100%', width:'auto'}} src={book.image} className="h-100 card-img-top" alt="..."></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{book.bookName}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer d-flex align-items-center justify-content-center justify-content-between">
        <p style={{margin:'0'}}>{book.bookPrice}</p>
        <Link to={`/checkout/${book._id}`} className="btn btn-success">Buy Now</Link>
      </div>
    </div>
  </div>
  );
};

export default Book;