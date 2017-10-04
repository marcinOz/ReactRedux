import React from 'react';
import PropTypes from 'prop-types';
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
import ExtensionIcon from 'material-ui-icons/Extension';
import HomeIcon from 'material-ui-icons/Home';
import PeopleIcon from 'material-ui-icons/People';
import VideoGameIcon from 'material-ui-icons/VideogameAsset';
import Typography from 'material-ui/Typography';
import DrawerItem from "./DrawerItem";


const drawerStyles = theme => ({
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
        backgroundImage: `url(${require('../../../res/tlo-320x240.jpg')})`
    },
    headerGrid: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff'
    }
});

const menu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "Private Projects",
        icon: <ExtensionIcon />,
        path: "/other"
    }
];

const demos = [
    {
        title: "Pluralsight Courses",
        icon: <WebIcon />,
        path: "/pluralsight/home"
    },
    {
        title: "Star Game",
        icon: <VideoGameIcon />,
        path: "/starGame"
    },
    {
        title: "Github Users",
        icon: <PeopleIcon />,
        path: "/githubusers"
    }
];

class MyDrawer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true,
            clicked: '',
            menuItems: this.makeMenu(menu[0].title, menu),
            demoItems: this.makeMenu('', demos, true)
        };
        this.handleClick = this.handleClick.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.makeMenu = this.makeMenu.bind(this);
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }

    makeMenu(item, list, nested) {
        let items = [];
        for (let i=0; i<list.length; i++) {
            let fun = () => this.onMenuClick(list[i].title);
            items.push(<DrawerItem key={i}
                            title={list[i].title}
                            icon={list[i].icon}
                            path={list[i].path}
                            disabled={item === list[i].title}
                            onClick={fun}
                            classType={nested ? this.props.classes.nested : ''}/>);
        }
        return items;
    }
    
    onMenuClick(item) {
        this.setState({ 
            menuItems: this.makeMenu(item, menu),
            demoItems: this.makeMenu(item, demos, true)
        });
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
                    {this.state.menuItems}
                    <Divider />
                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Demos" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                        {this.state.demoItems}
                    </Collapse>
                </List>
            </Drawer>
        );
    }
}

MyDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(drawerStyles)(MyDrawer);