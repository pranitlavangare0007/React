import { useRef,useEffect } from 'react'

export function useAutoScroll(dependencies){
 const chatMsgRef=useRef(null);
  useEffect(()=>{
   const contElm= chatMsgRef.current;
   if(contElm){
    contElm.scrollTop=contElm.scrollHeight;
   }
  },[dependencies]);

  return chatMsgRef;
}