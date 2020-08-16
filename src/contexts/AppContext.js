import React, { createContext, useReducer, useContext } from "react";

export const AppContext = createContext();

// Initial state
const initialItems = {
  notification: {},
};

// Actions
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

// Action creators
export const setNotification = (notification) => {
  setTimeout(() => {
    clearNotification();
  }, 5000);

  return {
    type: SET_NOTIFICATION,
    notification,
  };
};
export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});

// Reducer
export function appReducer(state, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return { ...state, notification: action.notification };
    case CLEAR_NOTIFICATION:
      return { ...state, notification: {} };
    default:
      return state;
  }
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(appReducer, initialItems);

  const todoData = { state, dispatch };

  return <AppContext.Provider value={todoData} {...props} />;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
