'use client';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';
import Link from 'next/link';
const LoginPage: React.FC = () => {
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div className="h-screen w-screen center">
			<Form
				name="normal_login"
				className="w-[300px] p-10 shadow"
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					label="Username Or Email *"
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
				>
					<Input
						prefix={
							<UserOutlined className="site-form-item-icon" />
						}
						placeholder="Username"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
				>
					<Input
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<Link href={'/admin/user'}>
						<Button
							type="primary"
							htmlType="submit"
							className="text-black"
						>
							Log in
						</Button>
					</Link>
					Or <a href="">register now!</a>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginPage;
