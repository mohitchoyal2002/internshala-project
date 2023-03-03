import CustomerLogin from "./Components//Login/CustomerLogin";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CustomerSignUp from "./Components//Login/CustomerSignUp";
import Home from "./Components//Main Pages/Home";
import Orders from "./Components/Main Pages/Orders";
import ShopPage from "./Components/Main Pages/ShopPage";
import ProductDetail from "./Components//Main Pages/ProductDetail";
import CartPage from "./Components/Main Pages/CartPage";
import Checkout from "./Components/Main Pages/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<CustomerLogin/>}/>
          <Route path="/customer-signup" element={<CustomerSignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/product-detail" element={<ProductDetail/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*

{
    "message": "Request failed with status code 404",
    "name": "AxiosError",
    "stack": "AxiosError: Request failed with status code 404\n    at https://demo-e-commerce-final.netlify.app/static/js/main.fde1395e.js:2:248832\n    at XMLHttpRequest.d (https://demo-e-commerce-final.netlify.app/static/js/main.fde1395e.js:2:248980)",
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, *",
            "Content-Type": "application/json"
        },
        "method": "post",
        "url": "users/login",
        "data": "{\"email\":\"ly277423@gmail.com\",\"password\":\"mohit\"}"
    },
    "code": "ERR_BAD_REQUEST",
    "status": 404
}
*/