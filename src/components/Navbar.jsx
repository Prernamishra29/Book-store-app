import { useContext } from "react";
import{Link} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";


const Navbar=()=>{
    const {isAuthenticated,logout} = useContext(AuthContext);
    return(
        <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font bold">Book-Store</h1>
            <div>
                {isAuthenticated ? (
                    <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
                        Logout
                    </button>
                ):(
                    <a href="/login " className="bg-green-500 px-4 py-2 rounded">
                        Login
                    </a>
                )}
            </div>
        </div>
        </nav>
       );
    };
    export default Navbar;
