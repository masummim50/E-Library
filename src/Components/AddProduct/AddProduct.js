import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
  const [bookAdded, setBookAdded] = useState(false)
  const [spinner, setSpinner] = useState(false);
  const [imageurl, setImageurl] = useState('');
  const handleimageupload = (e)=> {
    setSpinner(true)
    console.log(e.target.files[0])
    const imagedata = new FormData();
    imagedata.set('key', 'e714769a5c6946f2db13d49ca7ee48b3')
    imagedata.append('image', e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imagedata)
    .then(res => {
      setImageurl(res.data.data.display_url)
      setSpinner(false)
    })
  }
  const setEmptyValue = ()=> {
    document.getElementById('name').value = ''
    document.getElementById('author').value = ''
    document.getElementById('price').value = ''
    document.getElementById('description').value =''
    document.getElementById('img').value = ''
  }
  const handleSubmit = ()=> {
    let bookName = document.getElementById('name').value;
    const authorName = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    console.log(bookName, authorName)
    const newBook = {
      bookName : bookName,
      author: authorName,
      bookPrice: price,
      bookDescription: description,
      image: imageurl
    }
    console.log(newBook)
    fetch('https://strawberry-pie-28899.herokuapp.com/addbook', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBook)
    }).then(res => {
      console.log(res);
      setBookAdded(true)
      setEmptyValue()
      setTimeout(() => {
        setBookAdded(false)
      }, 2000);
    })
    
  }
  return (
    <div>
      <div className="container mt-2 p-3">
        <h2>Add a book in the Library to sell</h2>
        <div className="row d-flex flex-column align-items-center">
          <input className="form-control w-50 mb-2" required type="text" placeholder="Book Name" id="name"/>
          <input type="text" id="author" required className="form-control w-50 mb-2" placeholder="Author Name"/>
          <input className="form-control w-50 mb-2" required type="number" name="price" id="price" placeholder="Book Price"/>
          <textarea style={{height:'100px'}} className="form-control w-50 mb-2" type="text" name="description" id="description" placeholder="Something about this book"></textarea>
          <input onChange={handleimageupload} required type="file" name="image" id="img" className="form-control w-50 mb-2"/>
          
          {spinner ? <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
                  </div> : <button onClick={handleSubmit} className="btn btn-info form-control w-50">Add book</button>}
                  {bookAdded && <h2 className='text-success'>Book Added successfully</h2>}
        </div>
      </div>
      
    </div>
  );
};

export default AddProduct;