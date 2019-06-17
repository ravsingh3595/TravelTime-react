import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from '../component/LayoutBody';
import Button from '../component/Button';
import Link from '@material-ui/core/Link';
import Typography from '../component/Typography';
import {itineraryData} from '../dummyData';



const styles = theme => ({
    root: {
      display: 'flex',
      backgroundColor: "#EFF1F6",
      overflow: 'hidden',
    },
    layoutBody: {
      backgroundColor: "#fffa61",
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: `0px ${theme.spacing.unit * 5}px`,
    },
    imageWithButton:{
      height: '500px',
      width: '700px',
    },
    button: {
      marginTop: theme.spacing.unit * 8,
    },
});

class ItineraryHeader extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
              <section className={classes.root}>
                <LayoutBody className={classes.layoutBody} width="xlarge" height="500px">
                  
                  <div className={classes.imageWithButton} style={{backgroundImage: "url(" +  itineraryData.tripImage  + ")"}}>
                    
                  </div>

                  {/* <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    className={classes.button}
                    component={linkProps => (
                      <Link {...linkProps} href="/booking" variant="button" />
                    )}
                  >
                    <img
                    src="/static/themes/onepirate/productCurvyLines.png"
                    className={classes.curvyLines}
                    alt="curvy lines"
                  />
                    Get started
                  </Button> */}
                </LayoutBody>
              </section>
            </div>
        );
    }
}

ItineraryHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ItineraryHeader);
