import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const {Header, Content, Footer} = Layout;

const items = [
    {
        key: '/page1',
        label: 'Page 1',
    },
    {
        key: '/page2',
        label: 'Page 2',
    },
    {
        key: '/page3',
        label: 'Page 3',
    },
];

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout className="h-screen">
            <Header className="flex items-center">
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={items}
                    className="flex-1 min-w-0"
                    onClick={({key}) => navigate(key)}
                />
            </Header>
            <Content className="px-12 flex-1 flex flex-col">
                <Breadcrumb 
                    className="my-4"
                    items={[
                        { title: 'Home' },
                        { title: location.pathname.replace('/', '') }
                    ]}
                />
                <div
                    className={`flex-1 p-6 rounded-lg bg-[${colorBgContainer}]`}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer className="text-center">
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default MainLayout;