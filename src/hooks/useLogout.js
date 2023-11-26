import { useDispatch } from "react-redux";
import { setToken } from "../redux/store/slices/tokenSlice";
import { removeTokenFromLocalStorage } from "../utils/localStorage";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    removeTokenFromLocalStorage();
    dispatch(setToken({ access_token: null, refresh_token: null }));
  };

  return logout;
};
