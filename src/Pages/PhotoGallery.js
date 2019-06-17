
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Data from '../dummyData';
import PropTypes from 'prop-types';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'center',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function PhotoGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{width: "500px", maxHeight: "450px"}}>
      <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Month Name</ListSubheader>
        </GridListTile>
        {Data.map(tile => (
          <GridListTile key={tile.title}>
            <img src={tile.url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton 
                  aria-label={`info about ${tile.title}`}
                  // className={classes.icon}
                  color= "secondary">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
    </div>
  );
}

PhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(PhotoGallery);
