import styled from 'styled-components';
import SignIn from '../../access/SignIn.png';
import logo from '../../access/postJob/Logo.svg';
import mainbg from '../../access/postJob/main.png';

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
`;

export default Auth_Style;