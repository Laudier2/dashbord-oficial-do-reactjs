import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer, {
  productFatch,
} from "./redux/product/productsSlice.jsx";
import useReducer, { userFatch } from "./redux/user/userSlice.jsx";
import { productsApi } from "./redux/product/productsApi.jsx";
import creatsReducer, { cauculateTotal } from "./redux/cart/cart.jsx";
import { userApi } from "./redux/user/userApi";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: useReducer,
    cart: creatsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware);
  },
});

store.dispatch(productFatch());
store.dispatch(userFatch());
store.dispatch(cauculateTotal());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
