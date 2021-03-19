import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBBtn } from 'mdbreact';
import './card.scss';

function NotifyBtn(){
  const notify = () => {
      toast("These orders are confirmed!");
    }

  return (
    <div>
      <div onClick={notify}>For Now</div>
      <ToastContainer />
    </div>
  );
}

export default NotifyBtn;