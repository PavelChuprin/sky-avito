import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/store/slices/tokenSlice";

export const useLogout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useDispatch();

  const logout = () => {
    removeCookie("access");
    removeCookie("refresh");
    dispatch(setToken({ access_token: undefined, refresh_token: undefined }));
  };

  return logout;
};
