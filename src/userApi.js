import { API_URL } from "./utils/constants";
import { getTokenFromLocalStorage, updateToken } from "./utils/localStorage";

let url = "";

export const registerUser = async (user) => {
  url = "auth/register";

  return fetch(API_URL + url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname,
      city: user.city,
      role: user.role,
      phone: user.phone,
    }),
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Пользователь с такой почтой уже зарегистрирован");
    }
    if (response.status === 422) {
      throw new Error("Проверьте правильность заполнения полей");
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const loginUser = async (email, password) => {
  url = "auth/login";

  return fetch(API_URL + url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 401 || response.status === 422) {
      throw new Error("Проверьте логин или пароль");
    }
    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const getUser = async (token) => {
  url = "user";

  return fetch(API_URL + url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    if (response.status === 401) {
      updateToken();
      return getUser(getTokenFromLocalStorage());
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const updateUser = async (user, token) => {
  url = "user";

  return fetch(API_URL + url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
    body: JSON.stringify({
      role: "user",
      email: user.email,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      city: user.city,
    }),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    if (response.status === 401) {
      updateToken();
      return updateUser(user, getTokenFromLocalStorage());
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const postUserAvatar = async (token, image) => {
  url = "user/avatar";

  return fetch(API_URL + url, {
    method: "POST",
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
    body: image,
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }

    if (response.status === 401) {
      updateToken();
      return postUserAvatar(getTokenFromLocalStorage(), image);
    }
    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const getNewToken = async (token) => {
  url = "auth/login";

  return fetch(API_URL + url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      access_token: token.access_token,
      refresh_token: token.refresh_token,
    }),
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 401) {
      throw new Error("Токен устарел");
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const changePassword = async (oldPass, newPass, token) => {
  url = "user/password";

  return fetch(API_URL + url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
    body: JSON.stringify({
      password_1: oldPass,
      password_2: newPass,
    }),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Допущена ошибка при вводе старого пароля");
    }
    if (response.status === 401) {
      updateToken();
      return changePassword(oldPass, newPass, getTokenFromLocalStorage());
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};
