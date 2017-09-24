import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CoursesHomePage from './components/courses_admin/home/CoursesHomePage';
import HomePage from './components/courses_admin/home/HomePage';
import AboutPage from './components/courses_admin/about/AboutPage';
import CoursesPage from './components/courses_admin/course/CoursesPage';
import ManageCoursePage from "./components/courses_admin/course/ManageCoursePage";
import StarGame from "./components/startgame/StarGame"; //eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="pluralsight/home" component={CoursesHomePage}/>
        <Route path="pluralsight/courses" component={CoursesPage}/>
        <Route path="pluralsight/course" component={ManageCoursePage}/>
        <Route path="pluralsight/course/:id" component={ManageCoursePage}/>
        <Route path="pluralsight/about" component={AboutPage}/>
        <Route path="starGame" component={StarGame}/>
    </Route>
);