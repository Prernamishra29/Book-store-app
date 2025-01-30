import{useEffect,useState} from "react";
import{Link} from "react-router-dom";
import axios from 'axios';

const Books=() =>{
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        axios.get("https://prickle-gilded-trader.glitch.me/books")
        .then(response =>setBooks(respomse.data))
        .catch(error=>console.error(error));
    },[]);
    return(
        <div>
            <h2>Books</h2>
            {books.map((book)=>(
                <div key={book.id}>
                <Link to={'/books/${book.id}'}>{book.name} - ${book.price}</Link>
        </div>
        ))}
        </div>
    );
};
export default Books;