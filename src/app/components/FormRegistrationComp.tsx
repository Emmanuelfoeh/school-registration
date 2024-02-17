"use client";
import {
  LockOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, Select } from "antd";
import PhoneInput from "antd-phone-input";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import theme from "../Theme/themeConfig";

const FormRegistrationComp = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const initialValues = {
    firstName: "Theodore",
    lastName: "Erickson",
    email: "xugawevat@mailinator.com",
    username: "behagumyva",
    password: "Pa$$w0rd!",
    confirm: "Pa$$w0rd!",
    gender: "female",
  };
  // Function to handle user registration.
  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };
  return (
    <ConfigProvider theme={theme}>
      <Form
        form={form}
        name="trigger"
        // initialValues={initialValues}
        // style={{ maxWidth: 600 }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            hasFeedback
            label="First Name"
            name="firstName"
            // initialValue={form.getFieldValue}
            validateTrigger="onBlur"
            rules={[{ required: true, max: 12 }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First Name"
              size="large"
              // activeBorderColor="#a2a2a2"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Last Name"
            name="lastName"
            validateTrigger="onBlur"
            rules={[{ required: true, max: 12 }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Last Name"
              size="large"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            label="Telephone Number"
            name="phone"
            rules={[
              { required: true, message: "Please Phone number is required!" },
            ]}
          >
            <PhoneInput size="large" enableSearch />
          </Form.Item>
          <Form.Item
            name="address"
            label="Digital Address"
            rules={[{ required: true, message: "Please Address is required!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
             
            />
          </Form.Item>
        </div>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select
            // prefix={<TeamOutlined className="site-form-item-icon" />}
            placeholder="select your gender"
            size="large"
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button className="" type="dashed" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default FormRegistrationComp;
