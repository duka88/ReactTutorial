const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE") {
    const cart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: cart,
    };
  }
  if (action.type === "INCREASE") {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: cart,
    };
  }
  if (action.type === "DEACRESE") {
    const cart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cart: cart,
    };
  }
  if (action.type === "GET_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        const { price, amount } = item;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total: parseFloat(total.toFixed(2)),
      amount: amount,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      cart: action.payload,
      loading: false,
    };
  }
  return state;
};

export default reducer;
