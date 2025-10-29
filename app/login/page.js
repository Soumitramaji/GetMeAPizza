'use client';
import React, { useEffect } from 'react';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - Get Me A Pizza";
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);
  
  return (
    <div className="text-white py-14 container mx-auto">
      <h1 className="text-center font-bold text-3xl p-4">
        Login to get started
      </h1>

      <div className="flex flex-col gap-4 items-center min-h-screen p-10">

        
        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill="none" fillRule="evenodd">
              <path fill="#FBBC05" d="M9.827 24c0-1.524.253-2.985.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.407 10.388l7.905-6.05a13.119 13.119 0 01-.699-4.338z" />
              <path fill="#EB4335" d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.268 5.31-21.09 13.07l7.909 6.04c1.823-5.532 7.017-9.51 13.181-9.51z" />
              <path fill="#34A853" d="M23.714 37.867c-6.165 0-11.36-3.978-13.182-9.51L2.623 34.395C6.445 42.156 14.426 47.467 23.714 47.467c5.731 0 11.204-2.035 15.311-5.849l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z" />
              <path fill="#4285F4" d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067H36.318c-.63 3.091-2.346 5.468-4.8 7.015l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24z" />
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        
        <button
          onClick={() => signIn('linkedin', { callbackUrl: '/dashboard' })}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="h-6 w-6 mr-2"
            viewBox="0 -2 44 44"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                <path
                  d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                  id="LinkedIn"
                />
              </g>
            </g>
          </svg>
          <span>Continue with LinkedIn</span>
        </button>

        
        <button
          onClick={() => signIn('twitter', { callbackUrl: '/dashboard' })}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              fill="#00AAEC"
              d="M40.7 15.5c1.4-1 2.6-2.3 3.6-3.7-1.3.6-2.8 1.1-4.3 1.3-1.2-1.3-3-2.2-5-2.2-3.8 0-6.8 3.1-6.8 6.8 0 .5.1 1 .2 1.5-5.6-.3-10.7-3-14-7.2-.6 1-1 2.2-1 3.5 0 2.4 1.2 4.6 3 5.8-1 0-2-.3-2.8-.8v.1c0 3.3 2.3 6 5.4 6.7-.6.2-1.3.3-2 .3-.5 0-1-.1-1.5-.2 1 3 3.8 5.1 7.1 5.2-2.6 2-5.9 3.2-9.4 3.2-.6 0-1.2 0-1.7-.1 3.4 2.2 7.3 3.5 11.6 3.5 13.9 0 21.6-11.5 21.6-21.6v-1c1.5-1 2.8-2.3 3.8-3.7z"
            />
          </svg>
          <span>Continue with Twitter</span>
        </button>

        
        <button
          onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              fill="#4460A0"
              d="M28 44V28h5l1-6h-6v-3c0-2 1-3 3-3h3v-6h-4c-5 0-8 3-8 8v4h-5v6h5v16h6z"
            />
          </svg>
          <span>Continue with Facebook</span>
        </button>

        
        <button
          onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
            <path
              d="M12 0C5.37 0 0 5.38 0 12c0 5.3 3.44 9.8 8.21 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.63-4.04-1.63-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.3 3.51.99.11-.79.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.23v3.3c0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12c0-6.62-5.38-12-12-12z"
            />
          </svg>
          <span>Continue with GitHub</span>
        </button>

        
        <button
  onClick={() => signIn('apple', { callbackUrl: '/dashboard' })}
  className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
>
  <svg
    className="h-6 w-6 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
  >
    <path d="M16.365 1.43c-1.06.125-2.27.73-3.005 1.61-.64.75-1.197 1.94-1.01 3.075 1.068.04 2.16-.72 2.835-1.605.63-.8 1.1-1.92 1.18-3.08zM20.195 14.916c-.26 2.07-1.95 4.98-4.39 4.98-1.455 0-1.9-.93-3.54-.93-1.66 0-2.155.9-3.57.98-1.88.11-3.6-1.98-4.03-4.01-1.72-6.34.42-10.4 4.3-10.4 1.52 0 2.95 1 3.6 1 1.5 0 2.3-1.3 3.93-1.3.66 0 2.53.26 3.75 2.25-1.02.66-1.65 1.64-1.65 2.7 0 1.65 1.38 2.5 1.44 2.55-.01.02-.02.04-.04.07z" />
  </svg>
  <span>Continue with Apple</span>
</button>


<button
  onClick={() => signIn('credentials', { callbackUrl: '/dashboard' })}
  className="flex items-center bg-gray-700 border border-gray-500 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
>
  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
  <span>Continue as Guest</span>
</button>


      </div>
    </div>
  );
};

export default Login;
