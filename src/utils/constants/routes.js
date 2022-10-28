import config from '@utils/configs';

import { Home, Login } from '~/pages';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
];
//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
