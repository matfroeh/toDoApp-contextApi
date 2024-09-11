import { useReducer } from "react";
import contextReducer from "../modules/contextReducer";
import initialState from "../modules/initialState";

const AppContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
};
