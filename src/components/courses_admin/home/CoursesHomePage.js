import React from 'react';
import {Link} from 'react-router';
import Header from '../Header';
import Card, { CardContent } from 'material-ui/Card';

class CoursesHomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <Card >
                    <CardContent >
                        <h1>Pluralsight Administration</h1>
                        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                        <Link to="pluralsight/about" className="btn btn-primary btn-lg">Learn more</Link>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default CoursesHomePage;