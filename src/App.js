import React from 'react';
import './index.css'
import { useSelector } from 'react-redux/es/exports';
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Compose from './components/Compose';
import { selectsendMessageIsOpen } from './features/mailSlice';


function App() {
    const isMessageOpen = useSelector(selectsendMessageIsOpen);

    console.log(isMessageOpen);

  return (
    <>
     
      <Header/>
      <div className="app_body">
          <SideBar></SideBar>
          <EmailList></EmailList>
      </div>
      {
        isMessageOpen && <Compose></Compose>
      }
        </>
  );
}

export default App;
