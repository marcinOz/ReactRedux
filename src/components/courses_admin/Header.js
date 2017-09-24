import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from "../common/LoadingDots";
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
            <IndexLink to="/pluralsight/home" activeClassName="active">
                <Chip label="Home" className={classes.chip} />
            </IndexLink>
            <IndexLink to="/pluralsight/courses" activeClassName="active">
                <Chip label="Courses" className={classes.chip} />
            </IndexLink>
            <IndexLink to="/pluralsight/about" activeClassName="active">
                <Chip label="About" className={classes.chip} />
            </IndexLink>
            {/*{loading && <LoadingDots interval={100} dots={20}/>}*/}
        </nav>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);