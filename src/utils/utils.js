export const formatDate = (dateString) => {
  const currentDate = new Date();
  const offsetMin = currentDate.getTimezoneOffset();
  const date = new Date(Date.parse(dateString) - offsetMin * 60 * 1000);

  return date.toLocaleString().slice(0, -3).split(", ").join(" в ");
};

export const formatWordReview = (num) => {
  const words = [" отзыв", " отзыва", " отзывов"];
  const number10 = num % 10;

  if (number10 === 1 && num !== 11) {
    return words[0];
  } else if (number10 >= 2 && number10 <= 4) {
    return words[1];
  } else {
    return words[2];
  }
};

const months = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  10: "октября",
  11: "ноября",
  12: "декабря",
};

export const formatSellsFrom = (date) => {
  const date_split = date.split("-");
  const year = date_split[0];

  if (date_split.length < 2) return year;
  const month = date_split[1];
  const msg = months[month] + " " + year;
  return msg;
};

export const formatTitle = (text) => {
  if (!text) return text;
  return text[0].toUpperCase() + text.slice(1);
};

export const getErrorMessage = (error) => {
  if (!("data" in error)) return "Что-то пошло не так...";

  const errData = error.data;
  const errorFromApi = errData.detail || errData.details || "";

  if (errorFromApi.includes("UNIQUE constraint failed"))
    return "Этот e-mail занят";

  if (errorFromApi.includes("Incorrect email")) return "Неверный email";

  if (errorFromApi.includes("Incorrect password")) return "Неверный пароль";
  return errorFromApi;
};
