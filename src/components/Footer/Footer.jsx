import React from 'react';

const Footer = () => {
  return (
    <div>
      <img
        src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/f496f71e-official-geers-logo_103w010000000000000000.png'
        alt='logo'
        loading='lazy'
      />
      <div>
        <div>030 3080 7688</div>
        <div>{`Mo - Sa    9 - 18 Uhr`}</div>
      </div>
    </div>
  );
};

export default Footer;
