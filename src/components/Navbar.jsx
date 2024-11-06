import logo from '../assets/images/logo.svg'
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <nav classname="navbar">
      <div classname="nav-center">
        <div classname="nav-header">
        <img src={logo} className='nav-logo' alt='backroads' />
          <button type="button" classname="nav-toggle" id="nav-toggle">
            <i classname="fas fa-bars" />
          </button>
        </div>
       <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul classname="nav-icons">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              classname="nav-icon"
            >
              <i classname="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              classname="nav-icon"
            >
              <i classname="fab fa-x-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.squarespace.com/"
              target="_blank"
              rel="noreferrer"
              classname="nav-icon"
            >
              <i classname="fab fa-squarespace" />
            </a>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
