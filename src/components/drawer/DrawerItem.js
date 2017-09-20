import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const DrawerItem = (props) => {
    return (
        <ListItem button>
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.title} />
        </ListItem>
    );
};

DrawerItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object
};

export default DrawerItem;