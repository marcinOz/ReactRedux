import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import StorageIcon from 'material-ui-icons/Storage';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';

const CardItem = (props) => {
    return (
        <div style={{width: '99%', marginTop: 5}}>
            <Card style={{backgroundColor: '#eee'}}>
                <CardMedia
                    image={`${require(`../../../res/${props.image}`)}`}
                    style={{height: '260px'}}
                    title="header" />
                <CardContent >
                    <h2>{props.title}</h2>
                    {props.description}
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Go to Repo"
                        onClick={() => window.location.href = props.url}>
                        <StorageIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

CardItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default CardItem;