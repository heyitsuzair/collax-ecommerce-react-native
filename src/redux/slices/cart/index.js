import {createSlice, current} from '@reduxjs/toolkit';
import {SuccessMessage} from '../../../components/commons';

const initialState = {
  total: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      /**
       * Find Product By ID
       */
      const isInCart = current(state).cartItems.find(
        item => item.product_id === payload.product_id,
      );

      /**
       * ?isInCart Delete Product From Cart And Add Again With Updated Values
       */
      if (isInCart) {
        /**
         * Filter By ID
         */
        const isInCart = current(state).cartItems.filter(
          item => item.product_id !== payload.product_id,
        );
        const newCart = [...isInCart, payload];

        /**
         * Set New Cart
         */
        state.cartItems = newCart;

        /**
         * Show Toast
         */
        SuccessMessage('Product Updated!');

        return;
      }

      const newCart = [...state.cartItems, payload];

      /**
       * Set New Cart
       */
      state.cartItems = newCart;

      /**
       * Calculate Total
       */
      state.total += payload.req_qty * payload.product_info.price;

      /**
       * Show Toast
       */
      SuccessMessage('Product Added In Cart!');
    },
    buyNow: (state, {payload}) => {
      /**
       * Set New Cart
       */
      state.cartItems = [payload];

      /**
       * Calculate Total
       */
      state.total += payload.req_qty * payload.product_info.price;
    },
    removeFromCart: (state, {payload}) => {
      /**
       * Find Product By ID
       */
      const foundItem = current(state).cartItems.find(
        item => item.product_id === payload,
      );
      const costToDeduct = foundItem.req_qty * foundItem.product_info.price;

      state.total -= costToDeduct;

      /**
       * Filter By By ID
       */
      const filteredItems = current(state).cartItems.filter(item => {
        return item.product_id !== payload;
      });
      state.cartItems = filteredItems;
      SuccessMessage('Product Removed!');
    },
    clearCart: state => {
      // Set Cart Back To Its Initial State

      state.cartItems = [];
      state.total = 0;
    },
    increaseQuantity: (state, {payload}) => {
      /**
       * Find Product By ID
       */
      const foundItem = state.cartItems.find(
        item => item.product_id === payload,
      );

      const newQuantity = foundItem.req_qty + 1;

      if (foundItem.product_info.available_qty < newQuantity) {
        return;
      }
      foundItem.req_qty += 1;

      state.total += foundItem.product_info.price;
    },
    decreaseQuantity: (state, {payload}) => {
      /**
       * Find Product By ID
       */
      const foundItem = state.cartItems.find(
        item => item.product_id === payload,
      );

      const newQuantity = foundItem.req_qty - 1;

      if (newQuantity < 1) {
        return;
      }
      foundItem.req_qty -= 1;

      state.total -= foundItem.product_info.price;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  clearCart,
  buyNow,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
