import {React} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Products";
import {ProductList} from "./ListofProducts"
import {useDispatch} from "react-redux"
const Home = () => {
  // console.log(ProductList);
  const dispatch =useDispatch();
  const Addtocarthandler = (options) => {
    dispatch({
      type :"addtocart",
      payload :options
    })
    dispatch({
      type:"calculatePrice",
    })
    dispatch({
      type:"storage",
    })
    // console.log(options);
    toast.success("Added to Cart", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
  };
  return (
    <div className="productlist">
      {ProductList.map((i) => {
        return (
          <Products
            key={i.id} 
            imgsrc={i.imgsrc}
            name={i.name}
            price={i.Price}
            handler={Addtocarthandler}
            id={i.id}
          />
        );
      })}
      <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
  );
};

export default Home;
