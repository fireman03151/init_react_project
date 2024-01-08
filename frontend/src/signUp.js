import React from "react"
import axios from 'axios';
import { Row, Input, Col, Modal, Button, Divider, Typography, Form, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Link } = Typography;

const SignUp = () => {

  const onFinish = (e) => {
    axios.post('http://localhost:5000/api/user/signup/', e)
      .then((result) => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Modal
      visible={true}
      closeIcon={null}
      width='721px'
      footer={null}
      style={{ borderRadius: '16px', padding: '24px', gap: '24px' }}
    >
      <Row style={{ height: '509px' }} >
        <Col xxl={{ span: 8 }} xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 0 }} xs={{ span: 0 }} xxs={{ span: 0 }} className='Background_signUp' />
        <Col xxl={{ offset: 1, span: 15 }} xl={{ offset: 1, span: 15 }} lg={{ offset: 1, span: 15 }} md={{ offset: 1, span: 15 }} sm={{ span: 24 }} xs={{ span: 24 }} xxs={{ span: 24 }}>
          <Row style={{ width: '100%', padding: '24px 0px 0px 0px', gap: '24px', flexColume: 'auto' }} >
            <Row style={{ width: '100%', height: '28px', backgroundRepeat: 'no-repeat', padding: '24px 0px 0px 0px', backgroundPosition: 'center' }} className='logo' />
            <Row style={{ width: '100%', height: '35px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} className='logo_signUp' />
            <Row style={{ width: '100%', height: '200px', gap: '10px' }}>
              <Form
                name="basic"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                requiredMark={false}
                style={{ margin: 'auto', width: '100%' }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                  style={{ marginTop: '-2vh' }}
                >
                  <Input prefix={<SearchOutlined />} placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  label="User Password"
                  name="password"
                  style={{ marginTop: '-1vh' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    // offset: 8,
                    span: 24,
                  }}
                >
                  <Button htmlType="submit" style={{
                    width: '100%', height: '32px', backgroundColor: '#3B368D', fontSize: '14px', gap: '10px', color: '#EBEBF4', borderRadius: '8px',
                    font: 'Rubik'
                  }}>Sign Up</Button>
                </Form.Item>
              </Form>
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
            <Row style={{ width: '100%', marginTop: '-1vh', marginLeft: '25%' }}>
              Already have an account?
              <Link href='/signin'>Login</Link>
            </Row>
          </Row>
        </Col>
      </Row >
    </Modal >
  );
};

export default SignUp;