import {showMessage} from 'react-native-flash-message';

const SuccessMessage = message => {
  return showMessage({message, type: 'success'});
};

export default SuccessMessage;
