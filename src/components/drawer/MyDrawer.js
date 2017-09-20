import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import CodeIcon from 'material-ui-icons/Code';
import WebIcon from 'material-ui-icons/Web';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import InboxIcon from 'material-ui-icons/Inbox';
import Typography from 'material-ui/Typography';
import { blue } from 'material-ui/colors';
import { IndexLink } from 'react-router';
import DrawerItem from "./DrawerItem";

const blueColor = blue[500];

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4
    },
    avatar: {
        marginBottom: 15,
        width: 80,
        height: 80
    },
    drawerPaper: {
        position: 'relative',
        height: 'auto',
        width: 320
    },
    drawerHeader: {
        padding: 15,
        backgroundImage: `url(${require('../../../res/tlo-320x240.jpg')})`,
        background: `linear-gradient(45deg, #9C27B0 30%, ${blueColor} 90%)`
    },
    headerGrid: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000'
    }
});

class MyDrawer extends React.Component {
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
                        <IndexLink to="/" activeClassName="active">
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <WebIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Pluralsight Courses" />
                            </ListItem>
                        </IndexLink>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <IndexLink to="/starGame" activeClassName="active">
                        <DrawerItem title="inbox" icon={<InboxIcon />}/>
                    </IndexLink>
                </List>
            </Drawer>
        );
    }
}

MyDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyDrawer));