import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import CardItem from './CardItem';

const homeStyles = {
    left: {
        float: 'left',
        display: 'inline',
        width: '500px'
    }
};

class OtherPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <div className={classes.left}>
                    <CardItem title="OJenkins"
                        description={
                            <div>
                                <p>SlackApp for building Jenkins Jobs.</p> 
                                <br />  
                                <p>On slash command "/jobs" it's getting jobs from Jenkins and list them out in slack. 
                                After selecting it's triggering build and getting progress and result information.</p>
                            </div>
                        }
                        image="OJenkins.png"
                        url="https://bitbucket.org/oziem/springbootkotlin"/>
                </div>
                <div className={classes.left}>
                    <CardItem title="Spec"
                        description={
                            <div>
                                <p>Slack App for remembering our college specializations.</p> 
                                <br />  
                                <p>There are a couple of slash command that allows for adding, removing, editing and 
                                viewing specialization saved in the database. Everyone knows a person who acts like they know everything.</p>
                            </div>
                        }
                        image="Cyganomod.png"
                    url="https://bitbucket.org/oziem/springbootkotlin"/>
                </div>
            </div>
        );
    }
}

OtherPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(homeStyles)(OtherPage);