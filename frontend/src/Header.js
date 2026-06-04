import { Link } from 'react-router-dom';
import './App.css';

function Header(){
    return(
        <nav>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Apicalling">Api calling</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/showuser">Show user</Link></li>
                <li><a href="/model1-sataticweb/index.html">E-commerce website</a></li>
            </ul>
        </nav>


    )      
}
export default Header