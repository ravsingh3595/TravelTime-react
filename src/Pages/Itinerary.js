import React,{Component} from 'react';
import ItineraryHeader from '../container/ItineraryHeader';
import ItineraryDescription from '../container/ItineraryDescription';
import AppBar from '../container/AppBarLogin';

class Itinerary extends Component {
   constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
      var { tripID } = this.props.location;
      if(tripID == undefined | tripID == null){
        console.log(tripID)
        tripID = "Tobermory"
      }
        return(
          
          <div>
            <AppBar/>
            <ItineraryHeader tripID={tripID}/>
            <ItineraryDescription tripID={tripID}/>
          </div>
        );
    }
}

export default Itinerary;







