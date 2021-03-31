import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [book, setBook] = useState([])
  const {id}= useParams();
  console.log(id)
  useEffect(()=> {
    fetch(`http://localhost:5000/book/${id}`)
    .then(res => res.json())
    .then(data => {setBook(data)})
  },[])
  return (
    <div className="container p-5">
      <h2>Checkout</h2>
      <table className="table">
        <thead><tr className="text-center">
          <th scope="col">Book Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Author</th>
          </tr></thead>
          <tbody><tr style={{borderBottom:'1px solid black'}} className="text-center">
          <td scope="col">{book.bookName}</td>
          <td scope="col">1</td>
          <td scope="col">{book.author}</td>
          </tr></tbody>
          <tbody><tr className="text-center">
          <td scope="col">Total</td>
          <td></td>
          <td scope="col">${book.bookPrice}</td>
          </tr></tbody>
      </table>
      <div className="btn-container text-right w-100">
        <button className="btn btn-success">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;