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
    <div>
      <h2>this is check out page</h2>
      <h2>{book.author}</h2>
    </div>
  );
};

export default Checkout;