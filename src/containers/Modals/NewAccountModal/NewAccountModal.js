import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import Modal from '../../../components/Modal/Modal';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as actions from '../../../store/actions/index';

const NewAccountModal = (props) => {

  const [accountName, setAccountName] = useState('');
  const [balance, setBalance] = useState(0);
  const [category, setCategory] = useState(0);

  const createAccount = () => {
    const accountData = {
      balance: balance,
      name: accountName,
      category: category,
    };
    props.onCreateAccount(props.userId, props.token, accountData);
  };

  return (
    <Modal title="New Account" onClose={props.onClose} isOpen={props.isOpen} maxWidth={680} paddingSize="large">
      <Form>
        <Input
          label="Account Name"
          type="text"
          onChange={(e) => setAccountName(e.target.value)}
          value={accountName}
        />
        <Input
          label="Initial Balance"
          type="number"
          onChange={(e) => setBalance(e.target.value)}
          value={balance}
        />
        <Input
          label="Category"
          type="number"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <ActionButton
          icon="paperAirplane"
          color="primary"
          fill
          onClick={() => createAccount()}
          isLoading={props.loading}
        >
          Create Account
        </ActionButton>
      </Form>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.accounts.isLoading,
    error: state.accounts.error,
    accounts: state.accounts.accounts,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateAccount: (user_id, token, payload) => {
      dispatch(actions.createAccount(user_id, token, payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountModal);