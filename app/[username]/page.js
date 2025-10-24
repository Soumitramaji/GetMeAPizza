import React from 'react';
import PaymentPage from '@/components/PaymentPage';
import { fetchuser, fetchpayments } from '@/actions/useractions';

export default async function Page({ params }) {
  const { username } = await params; 


  const user = await fetchuser(username);
  const payments = await fetchpayments(username);

  if (!user) {
    return <div className="text-white p-10">User not found</div>;
  }


  const plainUser = JSON.parse(JSON.stringify(user));
  const plainPayments = JSON.parse(JSON.stringify(payments));

  return (
    <PaymentPage
      username={username}
      currentUser={plainUser}
      payments={plainPayments}
    />
  );
}


export async function generateMetadata({ params }) {
  const { username } = await params; // Direct access, no await
  return {
    title: `Support ${username} - Get Me A Pizza`,
  };
}
