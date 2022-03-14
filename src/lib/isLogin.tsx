const isLogin = () => !!sessionStorage.getItem('session');

export default isLogin;
