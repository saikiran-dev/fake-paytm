import React from 'react';

function Payee({ name, activateModal }) {
  const debitMoney = () => {};
  return (
    <div className='flex justify-between items-center'>
      <p className='font-semibold'>{name}</p>
      <button
        onClick={() => activateModal('PayeeDetails')}
        className='text-white px-2 py-1 bg-sky-500 hover:bg-sky-700 rounded-lg'
      >
        Send Money
      </button>
    </div>
  );
}

export default Payee;
