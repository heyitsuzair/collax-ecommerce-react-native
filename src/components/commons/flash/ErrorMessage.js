import {showMessage} from 'react-native-flash-message';

const ErrorMessage = message => {
  return showMessage({message, type: 'danger'});
};

export default ErrorMessage;
