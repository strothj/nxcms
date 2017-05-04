import { MainLayout } from './layouts';
import { HomePage } from './pages';

export default [
  {
    path: '/',
    exact: true,
    layout: MainLayout,
    component: HomePage,
  },
].map((r, index) => Object.assign(r, { key: index }));
