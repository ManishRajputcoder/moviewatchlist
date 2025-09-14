import React, { createContext, useContext, useReducer, useEffect } from "react";

const WishlistContext = createContext();

let savedWishlist;
try {
  const data = JSON.parse(localStorage.getItem("wishlist"));
  savedWishlist = Array.isArray(data) ? data : [];
} catch {
  savedWishlist = [];
}

const initialState = {
  wishlist: savedWishlist,
};

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist: state.wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
