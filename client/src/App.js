
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SavedBooksPage from "./pages/SavedBooks"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" conponent={Homepage} />
          <Route exact path="/savedbooks" conponent={SavedBooksPage}/>
        </Switch>
      </div>
    </Router>
  )
  // const [book, setBook] = useState("");
  // const [result, setResult] = useState([]);
  // const [apiKey, setApiKey] = useState("AIzaSyAmukOX6JHM53iVJC7RJzMP-lGFQSiJ618");


  // function handleChange(event){
  //   const book = event.target.value;
  //   setBook(book);

  // }

  // function handleSubmit(event){
  //    event.preventDefault();
  //    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
  //    .then(data => {
  //      console.log(data.data.items);
  //      setResult(data.data.items);
  //    })
  // }

  // return (

    
  //   <div className="container" >
  //     <h1>Google Book Search </h1>
  //     <Header />
  //     <form onSubmit={handleSubmit}> 
  //       <div class="form-group">
  //         <input 
  //         type="text" onChange={handleChange}
  //         className="form-control mt-10" 
  //         placeholder="Search for books" 
  //         autoComplete="off"
  //         />
  //         </div>
  //         <button type="submit" className="btn btn-danger">Search</button>
  //         <button type="submit" className="btn btn-danger">Saved</button>
  //     </form>
  //      {result.map(book => (
  //        <a href={book.volumeInfo.previewLink}>
  //        {/* <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/> */}
  //        console.log(book)
  //        </a>
  //      )
  //       )}
  //   </div>
    
  
  // );
}


export default App;
