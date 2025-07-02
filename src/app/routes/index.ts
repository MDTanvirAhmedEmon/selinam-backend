import { Router } from "express";
import { UserRouter } from "../modules/users/user.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { AdminRouter } from "../modules/admins/admin.route";
import { ChatsRouter } from "../modules/chats/chats.router";
import { CategoryRouter } from "../modules/categories/categories.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRouter,
    },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/category',
        route: CategoryRouter,
    },
    {
        path: '/admin',
        route: AdminRouter,
    },
    {
        path: '/chats',
        route: ChatsRouter,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;