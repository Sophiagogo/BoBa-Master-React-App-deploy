import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  // add default value
  const INITIAL_VALUE = {
    name: "",
  description: "",
  price:0,
  countInStock: 0,
  imageUrl: "",}
  const productDetails = useSelector((state) => state.getProductDetails || INITIAL_VALUE);
  const { loading, error, product } = productDetails;


  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    
    <div className="page-container">
      <div className="content-wrap">

        <div className="productscreen">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            <>
      
              <div className="productscreen__left">
                <div className="ImageContainer">
                  <img src={product.imageUrl} alt={product.name} className="Image"/>
                </div>
                <div className="left__info">
                  <p className="left__name">{product.name}</p>
                  <p>Price: ${product.price}</p>
                  <p>Description: {product.description}</p>
                </div>
              </div>
              <div className="productscreen__right">
                <div className="right__info">
                  <p>
                    Price:
                    <span>${product.price}</span>
                  </p>
                  <p>
                    Status:
                    <span>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </p>
                  <p>
                    Qty
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    <button type="button" onClick={addToCartHandler}>
                      Add To Cart
                    </button>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
