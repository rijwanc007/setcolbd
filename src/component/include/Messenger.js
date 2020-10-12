import React,{Component} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';


class Messenger extends Component{
    render(){
        return(
            <div>
                <MessengerCustomerChat
                    pageId="126194931398741"
                    appId="277244106989242"
                />,
            </div>
        )
    }
}

export default Messenger;