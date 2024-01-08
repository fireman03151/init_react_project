import React from "react";
import './App.css';
import { Row, Input, Col, Modal, Button, Divider, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Link } = Typography;

const SignIn = () => {
  return (
    <Modal
      visible={true}
      closeIcon={null}
      width='721px'
      footer={null}
      style={{ borderRadius: '16px', padding: '24px', gap: '24px' }}
    >
      <Row style={{ height: '509px' }} >
        <Col span={8} className='Background' />
        <Col offset={1} span={15}>
          <Row style={{ width: '100%', padding: '24px 0px 0px 0px', gap: '24px', flexColume: 'auto' }} >
            <Row style={{ width: '100%', height: '28px', backgroundRepeat: 'no-repeat', padding: '24px 0px 0px 0px', backgroundPosition: 'center' }} className='logo' />
            <Row style={{ width: '100%', height: '35px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} className='welcome' />
            <Row style={{ width: '100%', height: '59px', gap: '10px' }}>
              <Row style={{ width: '100%', height: '17px', fontSize: '14px' }}>
                Email Address
              </Row>
              <Row style={{ width: '100%' }}>
                <Input prefix={<SearchOutlined />} placeholder="Please Input here" style={{ width: '100%', height: '32px', padding: '8px', gap: '8px', borderRadius: '8px', color: '#D8D7E8' }} />
              </Row>
            </Row>
            <Row style={{ width: '100%', height: '59px', gap: '10px' }}>
              <Row style={{ width: '100%', height: '17px', fontSize: '14px' }}>
                User Password
              </Row>
              <Row style={{ width: '100%' }}>
                <Input.Password placeholder="Please Input here" style={{ width: '100%', height: '32px', padding: '8px', gap: '8px', borderRadius: '8px', color: '#D8D7E8' }} />
              </Row>
            </Row>
            <Row style={{ width: '100%', height: '32px' }}>
              <Button style={{
                width: '100%', height: '32px', backgroundColor: '#3B368D', fontSize: '12px', gap: '10px', color: '#EBEBF4', borderRadius: '8px',
                font: 'Rubik'
              }}>Login</Button>
            </Row>
            <Divider style={{ height: '17px', font: 'Rubik', fontSize: '14px', color: '#B3B3B3', gap: '12px', marginTop: '-1.5vh' }}>or</Divider>
            <Row style={{ width: '100%', height: '76px', marginTop: '-2.5vh' }}>
              <Button className='google-icon' style={{
                width: '100%', height: '32px', fontSize: '12px', gap: '10px', borderRadius: '8px', color: '#3B368D',
                font: 'Rubik'
              }}>Google</Button>
              <Button className='facebook-icon' style={{
                width: '100%', height: '32px', fontSize: '12px', gap: '10px', borderRadius: '8px', color: '#3B368D',
                font: 'Rubik'
              }}>Facebook</Button>
            </Row>
            <Row style={{ width: '100%', marginTop: '-1vh' }}>
              <center>Don't have an account?
                <Link to='/signup'>SignUp</Link>
              </center>
            </Row>
          </Row>
        </Col>
      </Row >
    </Modal >
  );
};

export default SignIn;