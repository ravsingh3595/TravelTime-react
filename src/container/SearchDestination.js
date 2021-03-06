import React, { Component }  from 'react';
import Travel from '../assest/travel.jpg';

import Link from '@material-ui/core/Link';
class SearchDestination extends Component {
    state = {
      query: '',
    }
   
    handleInputChange = (event) => {
      this.setState({
        query: event.target.value
      })
    }

    // onSubmit(e){
    //   e.preventDefault();
      
    //   // <Link href="/searchPage" variant="button" />
    // }
   
    render() {
      return (

        <div style={{
          backgroundImage: "url(" +  Travel  + ")", 
          backgroundColor : '#cccccc', 
          height: "540px", 
          display : "flex", 
          flexDirection: 'column',
          justifyContent : 'center', 
          alignItems:  'center'}}>
          
          <h1 style={{
              color: "#5ba16f",
              fontSize: '280%',
              padding: "10px", 
              textAlign: 'center'}}>
             Travelling Made Easy
          </h1>
        <form >
          <input
            style={{
                height: "40px", 
                width: "400px", 
                flex: "1",
                fontSize: "18px"}}
            placeholder="Search for..."
            value = {this.state.query}
            // component={linkProps => (
            //   <Link {...linkProps} href="/itinerary" variant="button" />
            // )}
            // ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
        </div>
      )
    }
   }
   
   export default SearchDestination;
   
