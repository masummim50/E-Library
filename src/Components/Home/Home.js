import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
  const [spinner, setSpinner]= useState(false)
  const [allbooks, setAllbooks] = useState([]);
  useEffect(()=> {
    setSpinner(true)
    fetch('https://strawberry-pie-28899.herokuapp.com/allbooks')
    .then(res => res.json())
    .then(data => {setAllbooks(data); setSpinner(false)})
  },[])
  return (
    <div>
      <div className="container">
        <div className="text-center mt-5 mb-5">
        {spinner && <div className="spinner-border text-success" role="status">
            <span className="visually-hidden"></span>
        </div>}
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
        
          {
            allbooks.map(book => <Book book = {book}></Book>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;