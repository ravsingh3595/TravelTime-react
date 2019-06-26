import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import data  from '../dummyData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    height: 450,
    overflow: 'scroll',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

class GalleryView extends React.Component{
    
  render(){
    const classes = useStyles;
    const {month} = this.props;
    return(
      <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">{month}</ListSubheader>
        </GridListTile>
        {data.map(tile => (
          <GridListTile key={tile.title}>
            <img src={tile.url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    );
  }
}
  

GalleryView.propTypes = {
  month: PropTypes.string.isRequired
}

export default (GalleryView);