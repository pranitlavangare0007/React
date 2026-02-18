
import {ChatMessage} from './ChatMessage'
import {useAutoScroll} from '../utils/useAutoScroll'

export function ChatMessages ({chatMessage}){
 let chatMsgRef=useAutoScroll(chatMessage);

  if(chatMessage.length===0){
    return(
      <div className="welcome-cont">
      <h1>welcome to the chatbot project! Send a message using textbox below.</h1>
        </div>
    );
  }

return(
  <div className="chat-msg-cont" ref={chatMsgRef}>
          
         {chatMessage.map((chatMessage)=>{
            return(
                 <ChatMessage 
                    message={chatMessage.message} 
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                 />
                );
             })}
         </div>
        );
      }