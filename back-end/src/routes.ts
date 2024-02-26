import { Router } from "express"
import { SecretKey } from "./controller/secret.controller";
import { AuthenticatedUser } from './controller/authentication/isAuthenticated.controller';
import { Register } from './controller/authentication/register.controller';
import { Login } from './controller/authentication/login.controller';
import { Logout } from './controller/authentication/logout.controller';

export const routes = (router: Router) => {
    router.get('/api/user', AuthenticatedUser);
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.post('/api/logout', Logout);
    router.post('/api/secret', SecretKey)
}
