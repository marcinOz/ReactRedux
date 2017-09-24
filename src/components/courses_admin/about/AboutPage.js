import React from 'react';
import Header from '../Header';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>About</h1>
                <p>This application uses React, Redux and React Router and a
                    variety of other helpful libraries.</p>
            </div>
        );
    }
}
export default AboutPage;