import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import MyDrawer from './drawer/MyDrawer';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const drawerWidth = 320;
const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden'
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    appBar: {
        position: 'absolute',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        order: 1
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64
        }
    }
});

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography type="title" color="inherit" noWrap>
                                React & Redux with ES6
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <MyDrawer />
                    <main className={classes.content}>
                        <div className="container-fluid">
                            <Header loading={this.props.loading}/>
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallInProgress > 0
    };
}

export default connect(mapStateToProps)(withRoot(withStyles(styles)(App)));