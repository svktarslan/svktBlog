import screenNames from './screenNames';
import Home from '../pages/home';
import CreateBlog from '../pages/createBlog';
import ReadBlog from '../pages/readBlog';

export const routes = [
  {
    name: screenNames.HOME_SCREEN,
    component: Home,
  },
  {
    name: screenNames.CREATE_BLOD_SCREEN,
    component: CreateBlog,
  },
  {
    name: screenNames.READ_BLOG_SCREEN,
    component: ReadBlog,
  },
];
