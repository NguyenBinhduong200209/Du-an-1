import React, { useState } from "react";
import { Button, Modal, Tabs, Form, Input } from "antd";

const { TabPane } = Tabs;

const MyLoginForm = ({ onCancel }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Đăng nhập với", values);
        onCancel();
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="username" rules={[{ required: true }]}>
                <Input placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
                <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Đăng nhập
            </Button>
        </Form>
    );
};

const MyRegisterForm = ({ onCancel }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Đăng ký với", values);
        onCancel();
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="username" rules={[{ required: true }]}>
                <Input placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
                <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item name="confirmPassword" rules={[{ required: true }]}>
                <Input.Password placeholder="Xác nhận mật khẩu" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Đăng ký
            </Button>
        </Form>
    );
};

const MyLoginFormModal = ({ visible, onCancel }) => {
    return (
        <Modal title="Đăng nhập" visible={visible} onCancel={onCancel} footer={null}>
            <MyLoginForm onCancel={onCancel} />
        </Modal>
    );
};

const MyRegisterFormModal = ({ visible, onCancel }) => {
    return (
        <Modal title="Đăng ký" visible={visible} onCancel={onCancel} footer={null}>
            <MyRegisterForm onCancel={onCancel} />
        </Modal>
    );
};

const MyLoginOrRegisterButton = () => {
    const [visible, setVisible] = useState(false);
    const [activeTabKey, setActiveTabKey] = useState("login");

    const handleCancel = () => {
        setVisible(false);
    };

    const handleTabChange = (activeKey) => {
        setActiveTabKey(activeKey);
    };

    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Đăng nhập hoặc đăng ký
            </Button>

            <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
                <TabPane tab="Đăng nhập" key="login">
                    <MyLoginFormModal visible={activeTabKey === "login" && visible} onCancel={handleCancel} />
                </TabPane>
                <TabPane tab="Đăng ký" key="register">
                    <MyRegisterFormModal visible={activeTabKey === "register" && visible} onCancel={handleCancel} />
                </TabPane>
            </Tabs>
        </>
    );
};

export default MyLoginOrRegisterButton;