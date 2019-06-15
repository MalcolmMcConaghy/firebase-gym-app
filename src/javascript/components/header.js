import React from 'react';

const Header = ({title, displayName}) => (
  <header className="header">
    <div className="header__title">{ title }</div>
    <div className="header__profile">
      {displayName}
      <img src={require('../../assets/user.svg')} alt='' />
    </div>
  </header>
);

export default Header;
