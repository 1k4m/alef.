import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '../pages/FormPage';
import PreviewPage from '../pages/PreviewPage';
import NotFound from '../pages/PageNotFound';

const routes = [
    {
        path: '/',
        name: 'form',
        component: FormPage,
    },
    {
        path: '/preview',
        name: 'preview',
        component: PreviewPage,
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
