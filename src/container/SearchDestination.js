import React, { Component }  from 'react';
import Travel from '../assest/travel.jpg';

class SearchDestination extends Component {
    state = {
      query: '',
    }
   
    handleInputChange = () => {
      this.setState({
        query: this.search.value
      })
    }
   
    render() {
      return (
        <div style={{
          backgroundImage: "url(" +  Travel  + ")", 
          backgroundColor : '#cccccc', 
          height: "540px", 
          display : "flex", 
          justifyContent : 'center', 
          flexFlow: 'row wrap',
          alignItems:  'stretch'}}>
          <h1 style={{
              color: "#5ba16f",
              fontSize: '280%',
              flex: "1 100%", 
              padding: "10px", 
              textAlign: 'center'}}>
            <bold>Travelling</bold> Made Easy
          </h1>
        <form>
          <input
            style={{
                height: "40px", 
                width: "400px", 
                flex: "1"}}
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
        </div>
      )
    }
   }
   
   export default SearchDestination;
   

//    import React, { Component }  from 'react';
//    import { withStyles } from '@material-ui/core/styles';
//    import Travel from '../assest/travel.jpg';
   
//    const styles = theme => ({
//        container: {
//            backgroundImage: "url(" +  Travel  + ")", 
//            backgroundColor : '#cccccc', 
//            height: 500, 
//            display : "flex", 
//            justifyContent : 'center', 
//            alignItems:  'center'
//        }
//    });
   
   
//    class SearchDestination extends Component {
       
//        state = {
//          query: '',
//        }
      
//        handleInputChange = () => {
//          this.setState({
//            query: this.search.value
//          })
//        }
      
//        render(props) {
//        const { classes } = props;
//          return (
//            <div className={classes.container}>
//              <h1>h</h1>
//                <form>
//                <input
//                    style={{height: "40px", width: "400px"}}
//                    placeholder="Search for..."
//                    ref={input => this.search = input}
//                    onChange={this.handleInputChange}
//                />
//                </form>
//            </div>
//          )
//        }
//       }
      
//       export default withStyles(styles)(SearchDestination);
      








// import React, { Component }  from 'react';
// import SearchBar from '../component/SearchBar';
// import Travel from '../assest/travel.jpg';

// class SearchDestination extends Component {
//     state = {
//       query: null,
//     }
   
//     handleInputChange = () => {
//       this.setState({
//         query: this.search.value
//       })
//     }
   
//     render() {
//         console.log(this.state.query);
//       return (
//         <div style={{
//           backgroundImage: "url(" +  Travel  + ")", 
//           backgroundColor : '#cccccc', 
//           height: 500, 
//           display : "flex", 
//           justifyContent : 'center', 
//           alignItems:  'center'}}>
//           <SearchBar triggerParentUpdate={this.handleInputChange}/>
//         </div>
//       )
//     }
//    }
   
//    export default SearchDestination;
   