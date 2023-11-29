import './Nav.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#_">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#_">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#_">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
