import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'

export function ChatMessage({message,sender}){
 
  return(
    <div className={
      sender==="user"
      ?'chat-msg-user'
      :'chat-msg-robot'}>
      {sender === 'robot' &&  <img src={RobotImage} alt="" className="chat-img" />}
  <div className="chat-msg-text">
    {message}
  </div>
  {sender === 'user' &&  <img src={UserImage} alt=""  className="chat-img" />}
    </div>
  );
}
