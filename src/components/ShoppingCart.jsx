import "./ShoppingCart.scss";

const ShoppingCart = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="titleCont">
          <div className="left">
            <h1>Shopping Cart</h1>
            <span>Deselect all Items</span>
          </div>
          <span className="right">
            <p>Price</p>
          </span>
        </div>
        <hr />
        <div className="desc">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="beats">
            <img src="/img/beats.png" alt="" />
          </div>
          <div className="description">
            <div className="descDetails">
              <p className="longdesc">
                Beats Studio Buds - True Wireless Noise Cancelling Earbuds -
                Compatible with Apple & Android, Built-in Microphone, IPX4
                Rating, Sweat Resistant Earphones, Class 1
              </p>

              <p className="stock">In Stock</p>
              <p className="return">
                Eligible for FREE Shipping & FREE Returns
              </p>
              <p>This is a giftThis is a gift Learn more</p>
              <p>Color: Black</p>
              <p>Style: Studio Buds</p>
              <div className="buttonClasses">
                <button>Proceed</button>
              </div>
            </div>
          </div>
          <div className="itemPrice">85.59</div>
        </div>

        <hr />
        <div className="total">
          <span>Subtotal (1 item): $89.95</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
