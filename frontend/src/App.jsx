import { useState } from 'react';
import Payee from './components/payee/Payee';
import Modal from './components/elements/Modal';
import PayeeForm from './components/payee/PayeeForm';
import PayeeVerification from './components/payee/PayeeVerification';

function App() {
  const [userBalance, setUserBalance] = useState(0);
  const [payees, setPayees] = useState([{ name: 'saikiran' }]);
  const [isModalActive, setIsModalActive] = useState({
    isModalActive: false,
    activeChildren: ''
  });

  const activateModal = ({ childrenName }) => {
    setIsModalActive({ isModalActive: true, activeChildren: childrenName });
  };

  const fetchComponent = {
    PayeeForm: <PayeeForm />,
    PayeeVerification: <PayeeVerification />
  };

  return (
    <>
      {isModalActive.isModalActive && (
        <Modal closeModal={() => setIsModalActive(false)}>
          {fetchComponent[isModalActive.activeChildren]}
        </Modal>
      )}
      <h1 className='text-2xl font-semibold my-4 pb-4 border-b-2'>
        Payments App
      </h1>
      <p className='text-xl font-semibold mb-6'>Your Balance ${userBalance}</p>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Payees</h2>
        <button
          onClick={() => activateModal('PayeeForm')}
          className='text-white p-2 bg-sky-500 hover:bg-sky-700 rounded-lg'
        >
          Add Payee
        </button>
      </div>
      <input
        type='text'
        placeholder='Search payee'
        className='p-1 my-4 w-full border-2 rounded-lg'
      />
      {payees.map((payee) => (
        <Payee
          key={payee.name}
          name={payee.name}
          activateModal={activateModal}
        />
      ))}
    </>
  );
}

export default App;
