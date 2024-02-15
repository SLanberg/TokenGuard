import { Router } from "express"
import { AuthenticatedUser, Login, Logout, Refresh, Register } from "./controller/auth.controller";
import { SecretKey } from "./controller/secret.controller";

export const routes = (router: Router) => {
    router.get('/api/user', AuthenticatedUser);
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.post('/api/refresh', Refresh);
    router.post('/api/logout', Logout);
    router.post('/api/secret', SecretKey)
}
