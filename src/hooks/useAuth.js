import { useDispatch } from "react-redux";
import { setToken } from "../redux/store/slices/tokenSlice";
import { getTokenFromLocalStorage } from "../utils/localStorage";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = getTokenFromLocalStorage();

  if (token && token.access_token) {
    dispatch(
      setToken({
        access_token: token.access_token,
        refresh_token: token.refresh_token,
      })
    );
    return true;
  }
  return false;
};

export default useAuth;
