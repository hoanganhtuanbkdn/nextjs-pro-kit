'use client';
import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Sidebar from './Sidebar';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}));
export default function GuestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Layout>
			<Header style={{ display: 'flex', alignItems: 'center' }}>
				<div className="w-[200px]">
					<Link href="/">
						<div className="w-[120px] h-8 bg-gray-300 rounded-md" />
					</Link>
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={items1}
				/>
			</Header>
			<Layout>
				<Sidebar />
				<Layout className="px-6">
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content className="h-[calc(100vh_-_200px)] p-6">
						{children}
					</Content>
					<Footer className="bg-[#7dbcea] h-16 text-white center">
						Footer
					</Footer>
				</Layout>
			</Layout>
		</Layout>
	);
}
