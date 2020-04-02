import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAdPX8r0kz5YyowFMRSGDuWutrkRTPQdE4',
  authDomain: 'wechat-5ccfb.firebaseapp.com',
  databaseURL: 'https://wechat-5ccfb.firebaseio.com',
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
