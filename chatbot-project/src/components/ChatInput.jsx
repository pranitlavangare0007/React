import { useState } from 'react'
import {Chatbot } from 'supersimpledev'
import Loadingspinner from '../assets/loading-spinner.gif'

export function ChatInput({setChatMessage}){
 const[currentText,setInputText]=useState('');
const [isLoading,setIsLoading] = useState(false);


function handleChange(event){
 setInputText( event.target.value)
}

 function saveInputText(event){
  
  
   if(event.key==='Enter' ){
    sendMessage()
   }
   
   if(event.key==="Escape"){
    setInputText('')
   }
 }
async function sendMessage(){

  if(!currentText.trim() || isLoading) return;

  const text = currentText;
  setInputText("");
  setIsLoading(true);

  const userId = crypto.randomUUID();
  const loadingId = crypto.randomUUID();

  
  setChatMessage(prev => [
    ...prev,
    {
      message: text,
      sender: "user",
      id: userId
    },
    {
      message: <img className="loading-spinner" src={Loadingspinner}/>,
      sender: "robot",
      id: loadingId
    }
  ]);

  // ⚠️ IMPORTANT: use text not currentText
  const response = await Chatbot.getResponseAsync(text);

  // Replace loading message
  setChatMessage(prev =>
    prev.map(msg =>
      msg.id === loadingId
        ? { ...msg, message: response || "No response" }
        : msg
    )
  );

  setIsLoading(false);
}

  return(
    <div className="chat-input-cont">
      <input
       placeholder="Send message to ChatBot" 
       size="30" 
       onChange={handleChange}
       value={currentText}
       onKeyDown={saveInputText}
        disabled={isLoading}
        className="chat-input"
       />
      <button onClick={sendMessage} 
      disabled={isLoading || !currentText.trim()}
      className="send-btn"
      >Send</button> 
     
    </div>
  );
}

