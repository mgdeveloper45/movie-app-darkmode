export const setMovie = (data) => {
  return {
    type: "FETCH_MOVIE",
    payload: data,
  };
};

export const setSearch = (str) => {
  return {
    type: "SEARCH",
    payload: str,
  };
};

export const setTheme = (bool) => {
  return {
    type: "THEME_PICKER",
    payload: bool,
  };
};
