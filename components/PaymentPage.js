'use client';

import React, { useEffect, useState } from 'react';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { useSearchParams, useRouter } from 'next/navigation';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
  const [paymentForm, setPaymentForm] = useState({
    name: '',
    message: '',
    amount: '',
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () =>
      toast.error('Failed to load Razorpay. Please refresh.');
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get('paymentdone') === 'true') {
      toast('Thanks for your donation!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      router.push(`/${username}`);
    }
  }, []);

  const getData = async () => {
    const u = await fetchuser(username);
    setCurrentUser(u);
    const dbPayments = await fetchpayments(username);
    setPayments(dbPayments);
  };

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    if (!paymentForm.name.trim()) return toast.error('Enter your name');
    if (!paymentForm.message.trim()) return toast.error('Enter a message');

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0)
      return toast.error('Invalid amount');

    if (!razorpayLoaded || typeof window.Razorpay === 'undefined')
      return toast.warn('Razorpay loading. Wait a moment.');

    const a = await initiate(amount, username, paymentForm);
    const orderId = a.id;

    const options = {
      key: currentUser.razorpayid,
      amount: amount * 100,
      currency: 'INR',
      name: 'Get me a Pizza 🍕',
      description: 'Support the creator',
      image: '/logo.png',
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentForm.name,
        email: 'test@example.com',
        contact: '+919876543210',
      },
      notes: { address: 'Razorpay Corporate Office' },
      theme: { color: '#3399cc' },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on('payment.success', getData);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="relative w-full">
        <img
          className="object-cover w-full h-56 sm:h-80 md:h-96"
          src={currentUser.coverpic || '/cover-image.png'}
          alt="Cover"
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 border-2 border-gray-300 rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36">
          <img
            className="rounded-full object-cover w-full h-full"
            src={currentUser.profilepic || '/profile-image.png'}
            alt="Profile"
          />
        </div>
      </div>

      <div className="text-center mt-16 sm:mt-20 flex flex-col items-center gap-2">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{username}</h1>
        <p className="text-slate-400">Let's help {username} to get a Pizza!</p>
        <p className="text-slate-400">
          {payments.length} Payments | ₹
          {payments.reduce((a, b) => a + b.amount, 0)} raised
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full md:w-4/5 mx-auto mt-10 p-4">
        {/* Supporters */}
        <div className="bg-slate-900 text-white rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-bold mb-4">Supporters</h2>
          <ul className="space-y-3">
            {payments.length === 0 && <li>No Payments yet</li>}
            {payments.map((p, i) => (
              <li key={i} className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full bg-white"
                  src="avatar.gif"
                  alt="user avatar"
                />
                <span>
                  {p.name} donated <strong>₹{p.amount}</strong> with "
                  {p.message}"
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
          <div className="flex flex-col gap-3">
            <input
              name="name"
              value={paymentForm.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full p-3 rounded-lg bg-slate-700"
            />
            <input
              name="message"
              value={paymentForm.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="w-full p-3 rounded-lg bg-slate-700"
            />
            <input
              name="amount"
              value={paymentForm.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              className="w-full p-3 rounded-lg bg-slate-700"
            />
            <button
              disabled={!razorpayLoaded}
              onClick={() => pay(paymentForm.amount)}
              className={`text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center ${
                !razorpayLoaded ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {razorpayLoaded ? 'Pay' : 'Loading...'}
            </button>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {[5, 10, 15, 20].map((amt) => (
              <button
                key={amt}
                disabled={!razorpayLoaded}
                onClick={() => pay(amt)}
                className={`bg-slate-700 p-3 rounded-lg ${
                  !razorpayLoaded ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Pay ₹{amt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
