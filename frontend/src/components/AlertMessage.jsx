import React from 'react'

import { ToastContainer, toast } from 'react-toastify'

function AlertMessage({type, message}) {

    const notify = () => {
        toast('test!');
    }

  return (
    <div className={`alert alert-${type} position-fixed top-0 start-50 translate-middle-x`} onClick={notify}>
        {message}
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition :  Bounce
        />
    </div>
  )
}

export default AlertMessage;