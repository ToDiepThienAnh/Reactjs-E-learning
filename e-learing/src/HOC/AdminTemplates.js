import React from 'react'

// library
import '../../node_modules/antd/dist/antd.min.css'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;




export default function AdminTemplates() {
    return (
        <div>
            <Layout style={{ height: '100vh' }}>

                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <p className='text-white text-center pt-3 mb-4'>Doash Board</p>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item style={{ marginTop: '2px' }} key="1" icon={<UserOutlined />}>
                            nav 1
        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            nav 4
        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            content
        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
