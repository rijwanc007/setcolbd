import React,{Component} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';


class Messenger extends Component{
    render(){
        return(
            <div>
                <MessengerCustomerChat
                    pageId="<PAGE_ID>"
                    appId="<APP_ID>"
                    htmlRef="<REF_STRING>"
                />,
            </div>
        )
    }
}

export default Messenger;