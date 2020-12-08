import React from 'react';

const Layout = (props) => {

  return (
    <main className="container">{props.children}</main>
  );
}

export default Layout;