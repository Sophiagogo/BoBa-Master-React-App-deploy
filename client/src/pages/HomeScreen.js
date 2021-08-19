import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  // add default value
  const INITIAL_VALUE = { products: [] };
  const getProducts = useSelector(state => state.getProducts || INITIAL_VALUE);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  if (products === undefined) { return <div>Loading....</div>; } else {

  return (
    <div className="page-container">
      <div className="content-wrap">


        <div className="homescreen">
          <h2 className="homescreen__title">Latest Products</h2>
          <div className="homescreen__products">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <Product
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product._id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
              }
};

export default HomeScreen;
