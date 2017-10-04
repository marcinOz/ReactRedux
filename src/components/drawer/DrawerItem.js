import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const DrawerItem = (props) => {
    return (
        <div style={props.disabled ? {backgroundColor: '#ccc'} : {backgroundColor: '#fff'}}>
        <IndexLink to={props.path} activeClassName="active" >
            <ListItem button className={props.classType} 
                onClick={props.onClick}>
                <ListItemIcon >
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.title} />
            </ListItem>
        </IndexLink>
        </div>
    );
};

DrawerItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    classType: PropTypes.string
};

export default DrawerItem;