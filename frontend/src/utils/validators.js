/* eslint-disable no-useless-escape */

function isEmail(emailTest) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailTest,
  );
}

function isName(nameTest) {
  return nameTest !== '';
}

export { isName, isEmail };
