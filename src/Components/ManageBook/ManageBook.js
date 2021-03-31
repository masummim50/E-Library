import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const ManageBook = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [books, setBooks] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/allbooks')
    .then(res => res.json())
    .then(data => {setBooks(data)})
  },[])
  const handleDelete = (id, event)=> {
    console.log(event.target.parentNode)
    console.log(id)
    fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => event.target.parentNode.innerHTML = data)
    
  }
  return (
    <div>
      <h2>this manage book page</h2>
      <div className="container">
        <div className="row">
          <div className="book-info d-flex justify-content-between w-100">
            <h2>name</h2>
            <h6>author</h6>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        {
          books.map(book => <div className="row">
          <div className="book-info d-flex justify-content-between w-100">
            <h2>{book.bookName}</h2>
            <h6>{book.author}</h6>
            <button onClick={(event)=> handleDelete(book._id, event)} className="btn btn-danger">Delete</button>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default ManageBook;