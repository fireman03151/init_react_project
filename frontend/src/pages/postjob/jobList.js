import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Layout, Col, Menu, Input, Badge, Avatar, Button, Breadcrumb, Tabs, Dropdown, Space, List, Tag } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { LiaBookSolid, LiaCoinsSolid } from "react-icons/lia";
import { MdEditDocument } from "react-icons/md";
import PostJob_Style from "./postJob.style";
import { MailOutlined, AppstoreOutlined, HomeOutlined, SearchOutlined, ShoppingOutlined, BellOutlined, DownOutlined, FilterOutlined, UserOutlined, UserAddOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined, AppleOutlined, AndroidOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const PostJob = () => {
	const [mainData, setMainData] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:5000/api/job/')
			.then(result => {
				console.log(result.data);
				setMainData(result.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/postjob');
	};
	const items = [
		{
			label: 'Hire',
			key: 'mail',
			icon: <MailOutlined style={{ fontSize: '17px' }} />,
		},
		{
			label: 'Lead',
			key: 'app',
			icon: <AppstoreOutlined style={{ fontSize: '17px' }} />,
		},
		{
			label: 'Train',
			key: 'train',
			icon: <AppstoreOutlined style={{ fontSize: '17px' }} />,
		},
		{
			label: 'Community',
			key: 'community',
			icon: <AppstoreOutlined style={{ fontSize: '17px' }} />,
		},
	];
	const data = [
		{
			title: 'Looking for front end Engineer',
		},
		{
			title: 'Back-end developer need.',
		},
		{
			title: 'We are hiring WebGL developer',
		},
		{
			title: 'Need UI / UX designer',
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
					<span>Hire</span>
				</>
			),
		},
		{
			title: 'My Job',
		},
	];

	const children = (
		// <Row style={{ width: '100%' }}>
		<List
			itemLayout="horizontal"
			dataSource={mainData ? mainData : []}
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 20,
			}}
			renderItem={(item, index) => (
				<List.Item >
					<List.Item.Meta
						avatar={<Avatar icon={<ShoppingOutlined />} />}
						title={
							<Row>
								<Col span={5}>
									{item.title}
								</Col>
								<Col offset={16} span={3}>
									<LiaCoinsSolid style={{ fontSize: '20px' }} /> &nbsp;
									<Tag color="#B3B3B3" style={{ borderRadius: '50px', transform: 'translate(0%,-20%)' }}>
										{item.average_order}
									</Tag>
								</Col>
							</Row>
						}
						description={
							item.job_description
						}
					/>
				</List.Item>
			)}
		/>
	);

	let drop_items = [
		{
			label: '3rd menu item',
			key: '3',
		},
	];
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
										<Link to='/postjob'>
											<Button onClick={handleClick}>
												Dashboard
											</Button>
										</Link>
										<Button type='primary' >
											My Jobs
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
						<Row style={{ width: '100%', height: '1768px', borderRadius: '20px', backgroundColor: '#FFFFFF', padding: '2%' }}>
							<Col span={24}>
								<Tabs
									defaultActiveKey="1"
									items={[LiaBookSolid].map(() => {
										return {
											key: 1,
											label: 'My All Jobs',
											children: children,
											icon: <LiaBookSolid style={{ fontSize: '20px' }} />,
										};
									})}
									// tabBarExtraContent={<Button>123123</Button>}
									tabBarExtraContent={
										<Row style={{ width: '80vh' }} justify='end'>
											<Col offset={1}>
												<Input prefix={<SearchOutlined />} />
											</Col>
											<Col offset={1}>
												<Dropdown menu={drop_items} trigger={['click']}>
													<Button icon={<FilterOutlined />}>
														<Space >
															Filter
															<DownOutlined />
														</Space>
													</Button>
												</Dropdown>
											</Col>
											<Col offset={1}>
												<Button icon={<MdEditDocument />} style={{ backgroundColor: '#3B368D', color: 'white' }} onClick={() => { navigate('/postjob') }}>Post My Job</Button>
											</Col>
										</Row>}
								/>
							</Col>
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

