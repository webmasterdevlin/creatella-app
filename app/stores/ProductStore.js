import { flow, types } from "mobx-state-tree";
import { ProductType } from "../models/ProductType";
import {
  getProductsById,
  getProductsByPrice,
  getProductsBySize
} from "../services/productService";
const ProductModel = types.model("ProductModel", ProductType);
const ProductStore = types
  .model("ProductStore", {
    products: types.optional(types.array(ProductModel), []),
    isFetching: false,
    isFetchingMore: false,
    timeToShowAdCounter: 0
  })
  .actions(self => ({
    loadProductsById: flow(function*() {
      self.isFetching = true;
      try {
        self.products = (yield getProductsById()).data;
      } catch (e) {
        alert(e.message);
      }
      self.isFetching = false;
    }),
    loadProductsBySize: flow(function*() {
      self.isFetching = true;
      try {
        self.products = (yield getProductsBySize()).data;
      } catch (e) {
        alert(e.message);
      }
      self.isFetching = false;
    }),
    loadProductsByPrice: flow(function*() {
      self.isFetching = true;
      try {
        self.products = (yield getProductsByPrice()).data;
      } catch (e) {
        alert(e.message);
      }
      self.isFetching = false;
    }),
    countIndex() {
      if (self.timeToShowAdCounter === 21) {
        self.timeToShowAdCounter = 0;
      }
      self.timeToShowAdCounter++;
    }
  }))
  .views(self => ({
    get productsById() {
      return [];
    },
    get productsBySize() {
      return [];
    },
    get productsByPrice() {
      return [];
    }
  }))
  .create();

export default ProductStore;
