import styled from 'styled-components';
import logo from '../../access/postJob/Logo.svg';
import mainbg from '../../access/postJob/main.png';

const PostJob_Style = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  .total_size {
    width: 1923px;
    height: 2150px;
    background-color: #00000005;
  }
  .logo {
    margin-top: 10px;
    background: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 231px;
    height: 29px;
  }
  .mainbg {
    background: url(${mainbg});
    background-repeat: no-repeat;
    width: 1922px;
    height: 184px;
  }
  .content {
    // textAlign: center,
    minHeight: 120px,
    lineHeight: 120px,
    width: 1923px,
    height: 2382px,
  }
  .footer {
    background: url(${logo});
    height: 29px !important;
    position: relative !important;
    width: 231px !important;
  }
  .text-wrapper {
    align-self: stretch;
    color: #063062;
    flex: 1;
    font-family: "Rubik-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }
  .ant-form-item-label :: before {
    display: inline-block;
    margin-inline-end: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun,sans-serif;
    line-height: 1;
    // content: "*";
  }

`;

export default PostJob_Style;