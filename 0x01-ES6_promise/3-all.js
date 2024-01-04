/* eslint-disable */
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResult, createUserResult]) => {
      console.log(`${uploadResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

