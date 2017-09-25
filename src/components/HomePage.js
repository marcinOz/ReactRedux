import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles';

const homeStyles = theme => ({
    homeCard: {
        minHeight: 230,
        backgroundColor: '#eee'
    },
    homeCardContent: {
        alignItems: 'center'
    },
    homeImage: {
        borderRadius: '100px'
    },
    homeDivIcon: {
        float: 'left',
        display: 'inline',
        width: '24%',
        minWidth: '210px',
        height: '200px'
    },
    homeDivText: {
        float: 'left',
        display: 'inline',
        width: '74%',
        height: '200px',
        alignItems: 'center'
    }
});

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.homeCard}>
                    <CardContent className={classes.homeCardContent}>
                        <div className={classes.homeDivIcon}>
                            <img className={classes.homeImage} src={`${require('../../res/oziem_opt.png')}`} height="200px" width="200px"/>
                        </div>
                        <div className={classes.homeDivText}>
                            <div >
                                <h1>Welcome to my site.</h1>
                                <p>I will try to have here all my demos and technical experiments with new technologies.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(homeStyles)(HomePage);