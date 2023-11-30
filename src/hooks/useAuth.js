import { getTokenFromLocalStorage } from "../utils/localStorage";

const useAuth = () => {
  const token = getTokenFromLocalStorage();

  if (token) {
    return true;
  }
  return false;
};

export default useAuth;
