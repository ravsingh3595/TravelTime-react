import React from 'react';
import GalleryView from '../component/GalleryView';
import LayoutBody from '../component/LayoutBody';
import AppBarLogin from '../container/AppBarLogin';
import { withStyles } from '@material-ui/core/styles';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Typography from '../component/Typography';
import { monthData } from '../dummyData';

const styles = theme => ({
    layoutBody: {
        backgroundColor: '#DBFFE5',
        overflow: 'hidden',
        
    },
    heading: {
        color: "#5BA16F", 
        marginTop: "30px",
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    subHeading:{
        color: "#5BA16F", 
        marginTop: "30px",
        paddingBottom: 40,
        fontWeight: 'bold',
    },
    galleryContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    galleryMonthContainer:{
        width: '70%',
        
    },
});


class GalleryPage extends React.Component{
    
    render(){
        const { classes } = this.props;
        return(
            <>
                <AppBarLogin/>                      {/* check if the user is login in or not  */}
                <LayoutBody className={classes.layoutBody} width="xlarge">
                    <Typography variant="h2" align="center" component="h6" className={classes.heading}>
                        Photo Gallery
                    </Typography>
                    <Divider/>
                    <Typography variant="h4" align="center" component="h6" className={classes.subHeading}>
                        Some previous memories of travllers!
                    </Typography>
                    <div className={classes.galleryContainer}>
                        <div className={classes.galleryMonthContainer}>
                            {monthData.month.map(month => (
                                <GalleryView key={month.month} month={month.month}/>)
                            )}
                        </div>
                    </div> 
                </LayoutBody>
            </>
        );
    }
}

GalleryPage.propTypes = {
    month: PropTypes.string.isRequired
}

export default withStyles(styles)(GalleryPage);