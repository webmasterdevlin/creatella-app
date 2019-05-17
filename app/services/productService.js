import { BaseUrl } from "./api-config";
import axios from "axios";

export async function getProductsByPrice() {
  return await axios.get(`${BaseUrl.products}/?_sort=price`);
}

export async function getProductsById() {
  return await axios.get(`${BaseUrl.products}/?_sort=id`);
}

export async function getProductsBySize() {
  return await axios.get(`${BaseUrl.products}/?_sort=size`);
}
