import React, { useState } from 'react';
import classes from './home.module.css';
import Modal from '../../components/Modal/Modal';
import ActionButton from '../../components/ActionButton/ActionButton';

const Home = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classes['home']}>
      <h1>HOME</h1>
      <ActionButton onClick={() => setIsOpen(true)}>Display Overlay</ActionButton>

      {isOpen ? (
        <Modal icon="cash" isOpen={isOpen} title="New Account" onClose={() => setIsOpen(false)}>
          Hello There!
        </Modal>
      ) : null }
    </div>
  );
};

export default Home;
