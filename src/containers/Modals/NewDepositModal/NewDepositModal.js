import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import Modal from '../../../components/Modal/Modal';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as actions from '../../../store/actions/index';
import Select from '../../../components/Select/Select';

const NewDepositModal = (props) => {

  const [depositAmount, setDepositAmount] = useState('');
  const [accountId, setAccountId] = useState(0);

  const depositToAccount = () => {
    const accountData = {
      account_id: accountId,
      amount: depositAmount,
    };
    props.onDepositToAccount(props.userId, props.token, accountData);
  };

  const accountList = [
    {
      value: '0',
      label: 'Banorte 0'
    },
    {
      value: '1',
      label: 'Banorte 1'
    },
    {
      value: '2',
      label: 'Banorte 2'
    },
    {
      value: '3',
      label: 'Banorte 3'
    }
  ]

  return (
    <Modal title="New Deposit" onClose={props.onClose} isOpen={props.isOpen} maxWidth={680} paddingSize="large">
      <Form>
        <Select options={accountList} label="Account" onChange={e => setAccountId(e.target.value)} placeholder="Destination Account" />
        <Input type="number" label="Amount" onChange={(e) => setDepositAmount(e.target.value)} value={depositAmount} />
        <ActionButton
          color="primary"
          fill
          onClick={() => depositToAccount()}
          isLoading={props.loading}
        >
          Deposit
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
    onDepositToAccount: (user_id, token, payload) => {
      dispatch(actions.createAccount(user_id, token, payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDepositModal);