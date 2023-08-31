import Login from './components/Login';
import { GoogleLogin } from 'react-google-login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const client_id = "506585338722-n4tc1j5l92u4u7v62vc67v5p7m7qp4v9.apps.googleusercontent.com";


function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: client_id,
        scope: ""
      })
    };
    gapi.load('client:auth2',start);
  });
  

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ",res);
  }

  return (
    <div className='flex flex-col flex-auto w-screen md:w-screen h-screen'>
      <div className='h-full'>
        <div className='md:grid h-full md:grid-cols-3'>
          <div className='grid bg-black h-[5rem] md:h-full'>
          <div className="grid justify-center items-center text-white text-5xl md:text-7xl font-bold">
            Board.
          </div>
          </div>
          <div className='col-span-2 flex justify-center items-center bg-neutral-100'>
            <div className='min-w[350] px-8 '>
              <div className='mb-8'>
                <h1 className="text-black text-4xl h-[3rem] font-bold">
                  Sign In
                  </h1>
                <p className="text-black text-base font-normal h-[2.5rem]">
                  Sign in to your account
                  </p>
                <div className="grid grid-cols-2 w-[26rem] h-[3rem] relative">
                  
                  <GoogleLogin className='text-zinc-500 bg-white hover:bg-[#050708]/90 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 '
                    client_id={client_id}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                  />
                 
                  <button className='text-zinc-500 bg-white hover:bg-[#050708]/90 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 " '>
                  <svg class="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                  </path>
                  </svg>
                  Sign in with Apple
                    </button>
                    </div>
                <Login />
                <div className='text-center pt-[1rem]'>
                <span className="text-zinc-500 text-base font-normal">Don’t have an account? </span>
                <span className="text-blue-600 text-base font-normal "><a href="#" style={{'cursor':'pointer'}}>Register here</a></span></div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
