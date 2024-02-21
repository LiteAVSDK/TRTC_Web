import Aegis from 'aegis-web-sdk';

const isProd = window.location.origin === 'https://web.sdk.qcloud.com';

const AEGIS_ID = {
  dev: 'iHWefAYqBEHVFrSxnV',
  prod: 'iHWefAYqVGQzlNLveU',
};

const aegis = new Aegis({
  id: isProd ? AEGIS_ID.prod : AEGIS_ID.dev,
  reportApiSpeed: true,
  reportAssetSpeed: true,
});

export default aegis;
