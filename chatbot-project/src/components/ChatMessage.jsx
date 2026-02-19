import RobotImage from '../assets/robot.png'
import UserImage from '../assets/profile-1.jpg'
import dayjs from 'dayjs';

export function ChatMessage({message,sender}){
 const time =dayjs().valueOf();
  return(
    <div className={
      sender==="user"
      ?'chat-msg-user'
      :'chat-msg-robot'}>
      {sender === 'robot' &&  <img src={RobotImage} alt="" className="chat-img" />}
  <div className="chat-msg-text">
    {message} 
    <p className='chat-time'>{dayjs(time).format('h:mma')}</p>
  </div>
  {sender === 'user' &&  <img src={UserImage} alt=""  className="chat-img user-img" />}
    </div>
  );
}
