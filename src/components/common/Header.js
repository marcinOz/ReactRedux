import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from "./LoadingDots";
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import blue from 'material-ui/colors/blue';

const styles = theme => ({
    chip: {
        margin: 1,
        color: blue[800]
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap'
    }
});

const Header = ({loading, classes}) => {
    return (
        <nav className={classes.row}>
            <IndexLink to="/" activeClassName="active">
                <Chip label="Home" className={classes.chip} />
            </IndexLink>
            <IndexLink to="/courses" activeClassName="active">
                <Chip label="Courses" className={classes.chip} />
            </IndexLink>
            <IndexLink to="/about" activeClassName="active">
                <Chip label="About" className={classes.chip} />
            </IndexLink>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Header);