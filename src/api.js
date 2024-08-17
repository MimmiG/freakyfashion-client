import axios from 'axios';

const API_URL = 'https://freakyfashion-api-hwhwa3bvdkhecebg.swedencentral-01.azurewebsites.net'; // Update this to your backend API URL

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const addProduct = (product) => axios.post(`${API_URL}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

export const fetchCartItems = () => axios.get(`${API_URL}/cart`);
export const addToCart = (cartItem) => axios.post(`${API_URL}/cart`, cartItem);
export const removeFromCart = (id) => axios.delete(`${API_URL}/cart/${id}`);

export const placeOrder = () => axios.post(`${API_URL}/orders`);
