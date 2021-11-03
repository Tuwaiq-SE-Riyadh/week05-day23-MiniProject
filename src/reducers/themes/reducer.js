const initialState = {
  theme: 'light-theme'
};
const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DARK":
      return { theme: payload };

    case "light":
      return { theme: payload };

    default:
     return state;
  }
};

export default themeReducer;