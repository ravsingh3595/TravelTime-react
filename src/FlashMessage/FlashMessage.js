import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

class FlashMessage extends React.Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.deleteAlertMessage(this.props.message.id)
    }
    
    render(){
        const { id, type, text } = this.props.message
        return(
            <div className= {classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                <button onClick="this.onClick" className="close"><span>&times;</span></button>
                {text}
            </div>
        );
    }
}

FlashMessage.prototypes = {
    messages: PropTypes.array.isRequired,
    deleteAlertMessage: PropTypes.func.isRequired
}

export default FlashMessage;