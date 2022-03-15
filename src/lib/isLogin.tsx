const isLogin = () => !!sessionStorage.getItem('currentLoginSession');

export default isLogin;
