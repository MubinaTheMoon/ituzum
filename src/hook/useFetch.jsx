import { useEffect, useReducer } from "react";

const initialState = {
  data: null,
  isPending: false,
  error: null,
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_DATA":
      return { ...state, isPending: true, error: null };
    case "IS_PENDING":
      return { ...state, isPending: false, data: payload };
    case "FETCH_ERROR":
      return { ...state, isPending: false, error: payload };
    default:
      return state;
  }
};

export function useFetch(url) {
  const { state, dispatch } = useReducer(changeState, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_DATA" });
      try {
        const req = await fetch(url);
        // console.log(req);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        dispatch({ type: "IS_PENDING", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { state };
}
