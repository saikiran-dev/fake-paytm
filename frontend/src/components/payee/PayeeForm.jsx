import React from 'react';
import Input from '../elements/Input';

function PayeeForm() {
  return (
    <>
      <Input label='Username' />
      <Input label='Account Number' />
      <Input label='IFSC Code' />
    </>
  );
}

export default PayeeForm;
