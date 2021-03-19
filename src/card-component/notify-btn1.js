import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBBtn } from 'mdbreact';
import './card.scss';

function NotifyBtn(){
  const notify = () => {
    toast("These orders will be confirmed once more neighbors have ordered!");
  }

  return (
    <div>
      <div onClick={notify}>After Now</div>
      <ToastContainer />
    </div>
  );
}

export default NotifyBtn;