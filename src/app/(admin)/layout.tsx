'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import theme from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';

export default function GuestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConfigProvider theme={theme}>{children}</ConfigProvider>
			</PersistGate>
		</Provider>
	);
}
