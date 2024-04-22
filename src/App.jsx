import React from 'react';
import './App.css';
import jsonData from './data.json';
import { MainStyle } from './styled-components/MainStyle';
import { useState } from 'react';


function App() {

  const getImageSource = (path) => {
    return path; 
  };


  const [data , setData] = useState(jsonData);


  const markAllAsRead = () => {
    const updatedData = data.map((item) => ({
      ...item,
      seen: true,
    }));
    setData(updatedData);
  };

  const getSeenDataCount = () => {
    return data.filter((item) => item.seen === false).length;
  };
 

  return (
    <div className='bg-[#fff] pt-[24px] pb-[29px] px-[16px] 
    DTP:mt-[63px] DTP:mb-[89px] DTP:px-[30px] DTP:pt-[36px] DTP:pb-[0] DTP:w-[730px]'>
      <header className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[9px] items-center DTP:gap-[11px]'>
          <h1 className='font-extrabold text-xl text-exblack DTP:text-2xl '>Notifications</h1>
          <button className='w-[32px] h-[25px] rounded-[6px] bg-[#0a327b] font-extrabold text-base text-[#fff]'>
            {getSeenDataCount()}
          </button>
        </div> 
        <div className='font-medium text-[14px] text-[#5e6778] 
        DTP:text-base hover:text-[#0a327b] hover:cursor-pointer'
         onClick={markAllAsRead}>Mark all as read</div>
      </header>

      <MainStyle>
          {data.map((item) => (
          
            <div key={item.id} 
            className={item.seen ? 'seen' : 'notification'}
            onClick= { () =>{
              const newNotification = data.map((newMessage) => {
                if(item.id === newMessage.id){
                  return {...newMessage, seen: true}
                }
                return newMessage
              })
              setData(newNotification)
            }
              
            }>
              <img src={getImageSource(item.img)} alt={item.name} className='img' />
              <div className='content'>
              <div className='name'>
                <p>
                  <span className='name2'>{item.name}</span>&nbsp;
                  <span className='action'>{item.action} </span>&nbsp;
                  <span className={item.postContent === 'Chess Club' ? 'chessClub' : 'postContent'}>{item.postContent}</span>
                  <span className={item.seen ? 'read': 'unread'}></span>
                </p>
              </div>
                <h4 className='time'>{item.time}</h4>
                <div className={item.msg !== ''?'msg' : 'read'}>{item.msg}</div>
              </div>
              {item.yourPhoto && (
                <img src={getImageSource(item.yourPhoto)} alt="Your Photo" className='yourPhoto' />
              )}
              
            </div>
          ))}     
      </MainStyle>
    </div>
  );
}

export default App;