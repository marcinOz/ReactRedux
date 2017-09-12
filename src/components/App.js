import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/Inbox';
import CodeIcon from 'material-ui-icons/Code';
import WebIcon from 'material-ui-icons/Web';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { blue } from 'material-ui/colors';
import tlo from '../../res/tlo-320x240.jpg';

const drawerWidth = 320;
const blueColor = blue[500];
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
    drawerPaper: {
        position: 'relative',
        height: 'auto',
        width: drawerWidth
    },
    drawerHeader: {
        padding: 15,
        backgroundImage: `url(${tlo})`,
        background: `linear-gradient(45deg, #9C27B0 30%, ${blueColor} 90%)`
    },
    headerGrid: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000'
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
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    },
    avatar: {
        marginBottom: 15,
        width: 80,
        height: 80
    }
});

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ open: !this.state.open });
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
                    <Drawer type="permanent" classes={{paper: classes.drawerPaper}} >
                        <div className={classes.drawerHeader} >
                            <Grid container className={classes.headerGrid}>
                                <Grid item >
                                    <Avatar className={classes.avatar} alt="Marcin Oziemski"
                                        src="https://avatars2.githubusercontent.com/u/6572599?v=4"/>
                                </Grid>
                                <Grid item className={classes.headerText}>
                                    <Typography type="title" className={classes.headerText}>Marcin Oziemski</Typography>
                                    oziemski.marcin@gmail.com
                                </Grid>
                            </Grid>
                        </div>
                        <Divider />
                        <List>
                            <ListItem button onClick={this.handleClick}>
                                <ListItemIcon>
                                    <CodeIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Demos" />
                                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <WebIcon />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Pluralsight Courses" />
                                </ListItem>
                            </Collapse>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                        </List>
                    </Drawer>
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