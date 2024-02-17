/* eslint-disable prettier/prettier */
import {config} from './config';

const Client = {
  // Home page
  categoryFilter: () =>
    config.get(
      '/wp-json/learnpress/v1/course_category',
      {
        orderby: 'count',
        order: 'desc',
      },
      false,
    ),
  popularCourses: () =>
    config.get(
      '/wp-json/learnpress/v1/courses',
      {
        popular: true,
        optimize: true,
      },
      false,
    ),

  newCourses: () =>
    config.get(
      '/wp-json/learnpress/v1/courses',
      {
        order: 'desc',
        optimize: true,
      },
      false,
    ),
  instructors: () =>
    config.get('/wp-json/learnpress/v1/users', {
      roles: ['lp_teacher', 'administrator'],
    }),

  // Course page
  courses: (params = {}, randomVersion = true) =>
    config.get('/wp-json/learnpress/v1/courses', {...params}, randomVersion),

  course: id => config.get(`/wp-json/learnpress/v1/courses/${id}`),

  // Registration page
  register: params =>
    config.post('/wp-json/learnpress/v1/token/register', params),

  login: params => config.post('/wp-json/learnpress/v1/token', params),


  addRemoveWishlist: params =>
    config.post('/wp-json/learnpress/v1/wishlist/toggle', params),

  getWishlist: params =>
    config.get('/wp-json/learnpress/v1/wishlist', {...params}),

  getWishlistWithId: id =>
    config.get(`/wp-json/learnpress/v1/wishlist/course/${id}`),
};

export default Client;
