import styled from 'styled-components';
import SignIn from '../../access/SignIn.png';
import logo from '../../access/postJob/Logo.svg';
import mainbg from '../../access/postJob/main.png';
import logo_Signup from '../../access/logo_SignUp.png';

const Auth_Style = styled.div`
.Background_signUp {
  width: 246px;
  height: 509px;
  border-radius: 8px;
  background-image: url(${SignIn});
  background-repeat: no-repeat;
  // background-attachment: initial;
  // background-position: center;
  background-size: cover;
}
.logo {
  background: url(${logo});
  width: 18.94px;
  height: 23.09px;
  color: #3B368D;
}
.logo_signUp {
  background: url(${logo_Signup});
  width: 18.94px;
  height: 23.09px;
  color: #3B368D;
}
`;

export default Auth_Style;