import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const ManageBook = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [spinner, setSpinner] =useState(false)
  useEffect(()=> {
    setSpinner(true)
    fetch('https://strawberry-pie-28899.herokuapp.com/allbooks')
    .then(res => res.json())
    .then(data => {setBooks(data); setSpinner(false)})
  },[])
  const handleDelete = (id, event)=> {
    console.log(event.target.parentNode)
    console.log(id)
    fetch(`https://strawberry-pie-28899.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => event.target.parentNode.innerHTML = "")
    
  }
  return (
    <div>
      <div className="container">
        {spinner && <div className="text-center">
      <div className="spinner-border text-success" role="status">
            <span className="visually-hidden"></span>
        </div>
      </div>}
        {
          books.map(book => <div className="row">
          <div className="book-info d-flex justify-content-between p-3 align-items-center w-100 shadow mb-2">
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