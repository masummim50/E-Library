import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
  const [allbooks, setAllbooks] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/allbooks')
    .then(res => res.json())
    .then(data => {setAllbooks(data)})
  },[])
  return (
    <div>
      <h2>this is home page {allbooks.length}</h2>
      <div className="container">
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