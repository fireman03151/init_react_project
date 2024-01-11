import React, { useEffect } from "react";
import axios from 'axios'
import { Row, Layout, Col, Menu, Input, Badge, Avatar, Button, Breadcrumb, Switch, Form, notification } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import { BiSolidBookAdd } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";
import PostJob_Style from "./postJob.style";
import { MailOutlined, HomeOutlined, SearchOutlined, BellOutlined, UserOutlined, UserAddOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';

const PostJob = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Success',
      description:
        'Post Job Success',
    });
  };
  const { Header, Content, Footer } = Layout;

  const items = [
    {
      label: 'Hire',
      key: 'mail',
      icon: <MailOutlined style={{ fontSize: '17px' }} />,
    },
    {
      label: 'Lead',
      key: 'app',
      icon: <HiDocumentReport style={{ fontSize: '17px' }} />,
    },
    {
      label: 'Train',
      key: 'train',
      icon: <BiSolidBookAdd style={{ fontSize: '17px' }} />,
    },
    {
      label: 'Community',
      key: 'community',
      icon: <FaRegMessage style={{ fontSize: '17px' }} />,
    },
  ];
  const breadcrumb_item = [
    {
      href: '',
      title: (
        <>
          <HomeOutlined />
          <span>Home</span>
        </>
      ),
    },
    {
      href: '',
      title: (
        <>
          <UserOutlined />
          <span>Application List</span>
        </>
      ),
    },
    {
      title: 'Application',
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };
  const onFinish = (e) => {
    axios.post('http://localhost:5000/api/job', e)
      .then((result) => {
        if (result.data == 'ok') {
          openNotificationWithIcon('success')
          navigate('/joblist');
        }

      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <PostJob_Style>
      <Layout className="total_size" >
        <Header style={{ width: '100%', height: '69px', backgroundColor: 'white', padding: '14px' }}>
          <Row style={{ width: '100%' }}>
            <Col span={4} />
            <Col span={16}>
              <Row style={{ width: '1400px', height: '47px', gap: '32px' }} >
                <Col span={3}>
                  <Row className="logo" />
                </Col>
                <Col span={9}>
                  <Row style={{ width: '100%', height: '32px', gap: '54px', padding: '0px 0px 0px 80px', marginTop: '-13px' }}>
                    <Menu style={{ height: '45px', fontSize: '17px', fontFamily: 'Rubik' }} selectedKeys='mail' mode="horizontal" items={items} />
                  </Row>
                </Col>
                <Col span={3}>
                  <Row style={{ width: '100%', color: 'gray' }}>
                    <Input prefix={<SearchOutlined />} placeholder="Search" style={{ borderRadius: '50px', marginTop: '5px' }} />
                  </Row>
                </Col>
                <Col span={1}>
                  <Row style={{ width: '100%', marginTop: '-0.9rem' }}>
                    <BellOutlined style={{ fontSize: '20px' }} />
                    <Badge color="#f50" style={{ transform: 'translate(-120% , -9%)' }} />
                  </Row>
                </Col>
                <Col span={2}>
                  <Row style={{ width: '100%', marginTop: '-15px' }}>
                    <Col span={12}>
                      <Avatar size={40} icon={<UserOutlined />} />
                    </Col>
                    <Col span={12}>
                      <Row style={{ width: '100%' }}>
                        <Row style={{ width: '100%', transform: 'translate(-10%,-10%)' }}>
                          John Doe
                        </Row>
                        <Row style={{ width: '100%', transform: 'translate(0%,-80%)' }}>
                          Hiring
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={4} />
          </Row>
        </Header>
        <Content className="content" >
          <Row style={{ width: '100%' }} className="mainbg">
            <Col span={4} />
            <Col span={16} >
              <Row style={{ width: '1400px', height: '120px', gap: '24px' }}>
                <Row style={{ width: '100%' }}>
                  <Col span={4}>
                    <Row justify='end' style={{ marginTop: '1.5rem' }}>
                      <Avatar size={84} shape="square" icon={<UserAddOutlined style={{ fontSize: '60px' }} />} style={{ padding: '8px', backgroundColor: '#EBEBF4' }} />
                    </Row>
                  </Col>
                  <Col offset={1} >
                    <Row style={{ width: '100%', marginBottom: '-0.9rem' }}>
                      <h1> Post New Job</h1>
                    </Row>
                    <Row>
                      <h4>
                        Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.
                      </h4>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ width: '100%' }} >
                  <Col span={2} />
                  <Button.Group style={{ gap: '24px', marginLeft: '3vh' }}>
                    <Button type='primary'>
                      Dashboard
                    </Button>
                    <Button >
                      <Link to='/joblist'>
                        My Jobs
                      </Link>
                    </Button>
                    <Button>
                      Applicants
                    </Button>
                    <Button>
                      Interviews
                    </Button>
                  </Button.Group>
                </Row>
              </Row>
            </Col >
            <Col span={4} />
          </Row>
          <Row style={{ width: '100%', height: '2vh', padding: '1% 17%' }} >
            <Row style={{ width: '100%', height: '49px', borderRadius: '20px', backgroundColor: '#FFFFFF' }} >
              <Breadcrumb style={{ fontSize: '17px', marginLeft: '10%', marginTop: '0.5%' }} items={breadcrumb_item} />
            </Row>
            <Row style={{ width: '100%', height: '2vh' }} />
            <Row style={{ width: '100%', height: '1500px', borderRadius: '20px', backgroundColor: '#FFFFFF', padding: '2%' }} justify='center'>
              {/* <Row style={{ border: 'solid 1px', borderColor: '#000000', width: '992px', height: '1720px', borderRadius: '20px', borderColor: 'rgba (0,0,0,0.5)' }} >
                123123123
              </Row> */}
              <Form
                style={{ border: 'solid 1px #00000005', width: '992px', height: '1400px', borderRadius: '20px', padding: '5%', gap: '30px' }}
                {...formItemLayout}
                requiredMark={false}
                onFinish={onFinish}
              >
                <Form.Item
                  colon={false}
                  label='Company Name'
                  name='company_name'
                  required={true}
                  rules={[
                    { required: true, message: 'Please input your Company Name!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Company Name can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Hiring Manager Name'
                  name='Hiring_Manager_Name'
                  rules={[
                    { required: true, message: 'Please input your Hiring Manager Name!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Hiring Manager Name can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Email'
                  name='email'
                  rules={[
                    {
                      type: "email",
                      required: true
                    }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  rules={[
                    { required: true, message: 'Please input your Hiring Address!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Hiring Address can only contain letters, numbers, and underscores' }
                  ]}
                  label='Address'
                  name='address'
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  rules={[
                    { required: true, message: 'Please input your City!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'City can only contain letters, numbers, and underscores' }
                  ]}
                  label='City'
                  name='city'
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  rules={[
                    { required: true, message: 'Please input your ZIP!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'ZIP can only contain letters, numbers, and underscores' }
                  ]}
                  colon={false}
                  label='Zip'
                  name='zip'
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Role Type'
                  name='role_type'
                  rules={[
                    { required: true, message: 'Please input your Role Type!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Role Type can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  rules={[
                    { required: true, message: 'Please input your Title!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Title can only contain letters, numbers, and underscores' }
                  ]}
                  label='Title'
                  name='title'
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Compensation Type'
                  name='compensation_type'
                  rules={[
                    { required: true, message: 'Please input your Compensation Type!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Compensation Type can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Salary Amount'
                  name='salary_amount'
                  rules={[
                    { required: true, message: 'Please input your Salary Amount!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Salary Amount can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='OTE'
                  name='ote'
                  rules={[
                    { required: true, message: 'Please input your OTE!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'OTE can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Inbound Leads?'
                  name='inbound_leads'
                >
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Prospecting Required?'
                  name='prospecting_required'
                >
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Average Order'
                  name='average_order'
                  rules={[
                    { required: true, message: 'Please input your Average Order!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Average Order can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Industry'
                  name='industry'
                  rules={[
                    { required: true, message: 'Please input your Industry!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Industry can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Job Description'
                  name='job_description'
                  rules={[
                    { required: true, message: 'Please input your Job Description!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Job Description can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Customer Service/ Success Support?'
                  name='Customer_Support'
                >
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Created Date'
                  name='created_date'
                  rules={[
                    { required: true, message: 'Please input your Created Date!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Created Date can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Expiration Date'
                  name='expiration_date'
                  rules={[
                    { required: true, message: 'Please input your Expiration Date!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Expiration Date can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Status'
                  name='status'
                  rules={[
                    { required: true, message: 'Please input your Status!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Status can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Company Description'
                  name='company_description'
                  rules={[
                    { required: true, message: 'Please input your Company Description!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Company Description can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Company URL'
                  name='company_url'
                  rules={[
                    { required: true, message: 'Please input your Company URL!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Company URL can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Form.Item
                  colon={false}
                  label='Header Image URL'
                  name='header_image_url'
                  rules={[
                    { required: true, message: 'Please input your Header Image URL!' },
                    { min: 3, message: 'Username must be at least 3 characters long' },
                    { pattern: /^[a-zA-Z0-9_ ]+$/, message: 'Header Image URL can only contain letters, numbers, and underscores' }
                  ]}
                >
                  <Input placeholder="Please input here" />
                </Form.Item>
                <Row justify='end'>
                  <Button type="primary" htmlType="submit">Submit</Button>
                </Row>
              </Form>
            </Row>
          </Row>
        </Content>
        <Footer style={{ backgroundColor: '#EBEBF4', width: 'Fill (1859px)', height: '258px', padding: '48px', gap: '32px', padding: '32px' }}>
          <Row style={{ width: 'Fill (1400px)', height: '157px' }} >
            <Row style={{ width: '100%' }} justify='center'>
              <Col span={3}>
                <Row style={{ width: '100%' }} className="footer" />
                <p className="text-wrapper">
                  Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas.
                </p>
              </Col>
              <Col offset={1} span={3}>
                <p style={{ fontSize: '20px', color: '#3B368D', marginTop: '-0.5vh' }}>Bussiness</p>
                <p style={{ fontSize: '16px' }}>Hire</p>
                <p style={{ fontSize: '16px' }}>Training</p>
                <p style={{ fontSize: '16px' }}>Scaling</p>
              </Col>
              <Col offset={1} span={3}>
                <p style={{ fontSize: '20px', color: '#3B368D', marginTop: '-0.5vh' }}>Bussiness</p>
                <p style={{ fontSize: '16px' }}>Hire</p>
                <p style={{ fontSize: '16px' }}>Training</p>
                <p style={{ fontSize: '16px' }}>Scaling</p>
              </Col>
              <Col offset={1} span={3}>
                <p style={{ fontSize: '20px', color: '#3B368D', marginTop: '-0.5vh' }}>Bussiness</p>
                <p style={{ fontSize: '16px' }}>Hire</p>
                <p style={{ fontSize: '16px' }}>Training</p>
                <p style={{ fontSize: '16px' }}>Scaling</p>
              </Col>
              <Col offset={1} span={3}>
                <p style={{ fontSize: '20px', color: '#3B368D', marginTop: '-0.5vh' }}>Follow Us</p>
                <Row style={{ gap: '24px' }}>
                  <Avatar icon={<TwitterOutlined />} style={{ backgroundColor: '#4C4C4C' }} />
                  <Avatar icon={< YoutubeOutlined />} style={{ backgroundColor: '#4C4C4C' }} />
                  <Avatar icon={<FacebookOutlined />} style={{ backgroundColor: '#4C4C4C' }} />
                  <Avatar icon={<TwitterOutlined />} style={{ backgroundColor: '#4C4C4C' }} />
                </Row>
              </Col>
            </Row>
            <Row style={{ width: '100%' }} justify='center'>
              <p> Copyright © All rights reserved by <Link to='/'>Salesmagiq</Link></p>

            </Row>
          </Row>
        </Footer>
      </Layout >
    </PostJob_Style >
  );
};

export default PostJob;

