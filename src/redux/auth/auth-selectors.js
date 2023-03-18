export const isUserLogin = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
export const selectAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
