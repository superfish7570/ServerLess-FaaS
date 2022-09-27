import { AuthenticationClient } from 'authing-js-sdk';

export const getStandardResponse = (success = true, data, message = '') => {
  if (success) {
    return { success, data };
  }
  return { success, message };
};

export const getLoginUser = async token => {
  const authing = new AuthenticationClient({
    appId: '63326c6fc50edca9bc452318',
    appHost: 'https://mikeyblog.authing.cn',
    token,
  });
  const user = await authing.getCurrentUser();
  return user || { username: '' };
};
