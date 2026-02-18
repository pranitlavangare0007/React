import { useState} from 'react'
import{ChatMessages} from './components/ChatMessages'


import {ChatInput} from './components/ChatInput'
import './App.css'






function App(){
          let [chatMessage,setChatMessage]=useState(
    []);
    
          return(
            <div className="app-cont">
                 
                  <ChatMessages
                  chatMessage={chatMessage}
                  />
                   <ChatInput
                  chatMessage={chatMessage}
                  setChatMessage={setChatMessage}
                  />
                  </div>
          );
        }

export default App
