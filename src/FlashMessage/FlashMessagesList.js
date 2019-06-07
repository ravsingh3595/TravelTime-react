import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteAlertMessage } from '../Actions/alertMessage';

class FlashMessagesList extends React.Component{
    render(){
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteAlertMessage={this.props.deleteAlertMessage}/>
        );
        return(
            <div>
                {messages}
            </div>
        );
    }
}

FlashMessagesList.prototypes = {
    messages: PropTypes.array.isRequired,
    deleteAlertMessage: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return{
        messages: state.alertMessages
    }
}
export default connect(mapStateToProps, {deleteAlertMessage})(FlashMessagesList);
