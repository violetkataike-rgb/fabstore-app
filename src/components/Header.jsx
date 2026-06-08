import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav id="navbar">
      <h1 id="nem">FabStore</h1>

      <ul id="list-item">

        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to ="/products">Products</Link>
          </li>

        <li>
          <Link to = "/login">Login</Link>
          </li>
        <li>
          <Link to = "/signup">Signup</Link>
          </li>
      </ul>
    </nav>
  );
}

export default Header;
