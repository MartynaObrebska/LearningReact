import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faShoppingBasket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import ShopApp from "./ShopApp";

library.add(faPlus, faMinus, faShoppingBasket, faXmark);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShopApp />);
