import { getNewToken } from "../userApi";

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : null;
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const updateToken = async () => {
  try {
    const token = getTokenFromLocalStorage();
    const data = await getNewToken(token);
    saveTokenToLocalStorage(data);
  } catch (error) {
    throw new Error(`Ошибка при обновлении токена:`);
  }
};
