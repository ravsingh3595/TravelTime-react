import React,{Component} from 'react';
import ItineraryHeader from '../container/ItineraryHeader';
import ItineraryDescription from '../container/ItineraryDescription';
import AppBar from '../container/AppAppBar';

class Itinerary extends Component {
   constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
          <div>
            <AppBar/>
            <ItineraryHeader/>
            <ItineraryDescription/>
          </div>
        );
    }
}

export default Itinerary;







