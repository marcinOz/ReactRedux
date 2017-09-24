import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const DrawerItem = (props) => {
    return (
        <IndexLink to={props.path} activeClassName="active">
            <ListItem button className={props.classType}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.title} />
            </ListItem>
        </IndexLink>
    );
};

DrawerItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    classType: PropTypes.string
};

export default DrawerItem;