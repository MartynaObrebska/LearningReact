import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import ShopApp from "./components/ShopApp";

library.add(faPlus, faMinus, faShoppingBasket);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShopApp />);
