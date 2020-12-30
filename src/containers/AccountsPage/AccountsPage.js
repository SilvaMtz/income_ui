import React, { useEffect } from 'react';
import classes from './AccountsPage.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const AccountsPage = (props) => {

  useEffect(() => {
    if (props.isAuthenticated) {
      props.onFetchAccounts(props.token);
    }
  });

  let content = "Accounts Page"

  if (props.isLoading) {
    content = "Loading..."
  }

  return (
    <div className={classes['accounts-page']}>\
      {content}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
    token: state.auth.token,
    userId: state.auth.userId,
    // isLoading: state.accounts.isLoading,
    // accounts: state.accounts.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAccounts: (token) => dispatch(actions.fetchAccounts(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
