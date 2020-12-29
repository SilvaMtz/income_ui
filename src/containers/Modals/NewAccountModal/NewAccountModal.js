import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import Modal from '../../../components/Modal/Modal';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as actions from '../../../store/actions/index';
import Select from '../../../components/Select/Select';
import Divider from '../../../components/Divider/Divider';

const NewAccountModal = (props) => {
  const [accountName, setAccountName] = useState('');
  const [balance, setBalance] = useState(0);
  const [category, setCategory] = useState(0);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(1);

  let bankOptions = [];
  if (props.banks) {
    props.banks.map((bank) => {
      bankOptions.push({
        value: bank.id,
        label: bank.name,
      });
    });
  }

  let currencyOptions = [];
  if (props.currency) {
    props.currency.map((currency) => {
      currencyOptions.push({
        value: currency.id,
        label: currency.name,
      });
    });
  }

  const createAccount = () => {
    const accountData = {
      balance: balance,
      name: accountName,
      category: category,
      bankId: selectedBank.value,
      baseCurrency: selectedCurrency.label,
    };
    props.onCreateAccount(props.userId, props.token, accountData);
  };

  return (
    <Modal
      title="New Account"
      onClose={props.onClose}
      isOpen={props.isOpen}
      maxWidth={680}
      paddingSize="large"
    >
      <Form>
        <Select
          icon="library"
          label="Bank"
          options={bankOptions}
          onChange={setSelectedBank}
          value={selectedBank}
        />
        <Input
          label="Account Name"
          type="text"
          onChange={(e) => setAccountName(e.target.value)}
          value={accountName}
          placeholder="eg. Savings Account"
        />
        <Divider size="large" />
        <Select
          label="Base Currency"
          icon="currencyDollar"
          options={currencyOptions}
          onChange={setSelectedCurrency}
          value={selectedCurrency ? selectedCurrency : selectedBank.base_currency}
        />
        <Input
          label="Initial Balance"
          icon="scale"
          type="number"
          onChange={(e) => setBalance(e.target.value)}
          value={balance}
        />
        {/* <Input
          label="Category"
          type="number"
          icon="tag"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        /> */}
        <Divider size="large" />
        <ActionButton
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
};

const mapStateToProps = (state) => {
  return {
    loading: state.accounts.isLoading,
    error: state.accounts.error,
    accounts: state.accounts.accounts,
    banks: state.banks.banks,
    token: state.auth.token,
    userId: state.auth.userId,
    currency: state.currency.currencyList,
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
