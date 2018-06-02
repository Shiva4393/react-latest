import LoginPage from '../views/LoginPage/LoginPage';
import ForgotPassword from '../views/ForgotPassword/ForgotPassword';

const indexRoutes = [
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/', component: LoginPage, exact: true }
];

export default indexRoutes;