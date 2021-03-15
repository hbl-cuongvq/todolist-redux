import { createStore } from "@reduxjs/toolkit";
import { todoApp } from "./reducer";

var defaultState = {
    items: [],
  };  

var store = createStore(todoApp, defaultState);
export {store};
