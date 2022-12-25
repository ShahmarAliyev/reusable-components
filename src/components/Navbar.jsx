import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <div className="left">
          <div className="logoContainer">
            <MenuIcon className="hamburger" />
            <img alt="" src="/img/logo4.png" />
          </div>
          <div className="locationContainer">
            <div className="iconContainer">
              <img src="/img/location1.png" alt="" width={18} />
            </div>
            <div className="deliveryInfo">
              <div className="deliveryName">Deliver to Shahmar</div>

              <div className="deliveryAdress">
                <p>Newyork 10023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <div className="inputContainer">
            <select>
              <option>All Departments</option>
              <option>Technology</option>
              <option>Clothing</option>
              <option>Automative parts & Accessories</option>
              <option>All</option>
              <option>Technology</option>
              <option>Clothing</option>
              <option>Automative parts & Accessories</option>
              <option>All</option>
              <option>Automative parts & Accessories</option>
              <option>Clothing</option>
              <option>Automative parts & Accessories</option>
              <option>All</option>
              <option>Technology</option>
              <option>Clothing</option>
              <option>Auto</option>
            </select>
            <input type="text" className="searchInput" />
            <img src="/img/loupe.png" alt="" width={24} />
          </div>
        </div>
        <div className="right">
          <div className="languageContainer">
            <div className="langIcon">
              <img alt="" src="/img/usa.png" width={24} />
            </div>
            <span>EN</span>
          </div>
          <div className="accountContainer">
            <span className="helloSpan">Hello, Shahmar</span>
            <PermIdentityOutlinedIcon className="icon" />
            <span className="helloSpan2">Shahmar</span>
            <span className="accountSpan">Account&Lists</span>
          </div>
          <div className="orderReturnContainer">
            <span className="returnsSpan">Returns</span>
            <span className="ordersSpan">& Orders</span>
          </div>
          <div className="cartContainer">
            <div className="cartIconContainer">
              <img alt="" src="/img/cart.png" />
              <div className="cartCounter">1 </div>
            </div>
            <span className="cartSpan">Cart</span>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="inputContainer">
          <input type="text" className="searchInput" />
          <img src="/img/loupe.png" alt="" width={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
