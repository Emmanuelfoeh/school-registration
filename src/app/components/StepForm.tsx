"use client";
import React, { useState } from "react";
import {
  Steps,
  Form,
  Input,
  Button,
  ConfigProvider,
  Select,
  DatePicker,
  Space,
} from "antd";
import { Store } from "rc-field-form/lib/interface";
import {
  LockOutlined,
  MailOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import theme from "../Theme/themeConfig";
import PhoneInput from "antd-phone-input";
import AddSchoolComp from "./AddSchoolComp";

const { Step } = Steps;

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [form] = Form.useForm();
  const { Option } = Select;

  const steps = [
    {
      title: "Basic Information",
      content: (
        <ConfigProvider theme={theme}>
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              hasFeedback
              label="First Name"
              name="firstName"
              validateTrigger="onBlur"
              rules={[{ required: true, max: 12 }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="First Name"
                // size="default"
              />
            </Form.Item>

            <Form.Item hasFeedback label="Middle Name" name="middleName">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Middle Name"
                // size="small"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
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
                // size="large"
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              validateTrigger="onBlur"
              hasFeedback
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select
                // prefix={<TeamOutlined className="site-form-item-icon" />}
                placeholder="select your gender"
                // size="large"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              name="email"
              // label={<label style={{ fontSize: "13px" }}>Email</label>}
              label="E-mail"
              validateTrigger="onBlur"
              hasFeedback
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
                // size="large"
              />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              hasFeedback
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Required! with at least 3 characters",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                // size="large"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              label="Password"
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  min: 6,
                  message: "Required! with at least 6 characters",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                // size="large"
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
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                // size="large"
              />
            </Form.Item>
          </div>
        </ConfigProvider>
      ),
    },

    {
      title: "Contact Information",
      content: (
        <ConfigProvider theme={theme}>
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              label="Telephone Number"
              name="phone"
              hasFeedback
              validateTrigger="onBlur"
              rules={[
                { required: true, message: "Please Phone number is required!" },
              ]}
            >
              <PhoneInput enableSearch />
            </Form.Item>
            <Form.Item
              name="address"
              label="Digital Address"
              hasFeedback
              validateTrigger="onBlur"
              rules={[
                { required: true, message: "Please Address is required!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                // size="large"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              name="regions"
              label="Permanent Address Region"
              hasFeedback
              validateTrigger="onBlur"
              rules={[{ required: true, message: "Please Select Region!" }]}
            >
              <Select
                // prefix={<TeamOutlined className="site-form-item-icon" />}
                placeholder="Select Region"
              >
                <Option value="male">Greater Accra Region</Option>
                <Option value="female">Volta Region</Option>
                <Option value="other">Oti Region</Option>
              </Select>
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Permanent Address"
              name="permanent_address"
              validateTrigger="onBlur"
              rules={[{ required: true, max: 100 }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Akoefe Tato"
              />
            </Form.Item>
          </div>
          {/* <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              name="home_regions"
              label="Home Address Region"
              rules={[{ required: true, message: "Please Select Region!" }]}
            >
              <Select
                // prefix={<TeamOutlined className="site-form-item-icon" />}
                placeholder="Select Region"
              >
                <Option value="male">Greater Accra Region</Option>
                <Option value="female">Volta Region</Option>
                <Option value="other">Oti Region</Option>
              </Select>
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Home Address"
              name="home_address"
              validateTrigger="onBlur"
              rules={[{ required: true, max: 100 }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Akoefe Tato"
              />
            </Form.Item>
          </div> */}

          <h1 className="font-bold mt-4">
            {" "}
            Contact Person in Case of Emergency
          </h1>
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              hasFeedback
              label="Full Name"
              name="fullName"
              validateTrigger="onBlur"
              rules={[{ required: true, max: 100 }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Full Name"
                // size="default"
              />
            </Form.Item>

            <Form.Item
              label="Telephone Number"
              name="telephoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please telephone number is required!",
                },
              ]}
            >
              <PhoneInput enableSearch />
            </Form.Item>
          </div>
        </ConfigProvider>
      ),
    },

    {
      title: "School Information",
      content: (
        <ConfigProvider theme={theme}>
          <AddSchoolComp />
        </ConfigProvider>
      ),
    },
  ];

  const handleNext = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: Store) => {
    // const formData = form.getFieldsValue(true);
    // delete formData.phone.countryCode;
    // delete formData.phone.areaCode;
    // delete formData.phone.isoCode;
    // formData.phone = formData.phone.phoneNumber;
    // delete formData.phone.phoneNumber;

    // delete formData.telephoneNumber.countryCode;
    // delete formData.telephoneNumber.areaCode;
    // delete formData.telephoneNumber.isoCode;
    // formData.telephoneNumber = formData.telephoneNumber.phoneNumber;
    // delete formData.telephoneNumber.phoneNumber;

    const formData = { ...form.getFieldsValue(true) };

    // Restructure "phone" field
    // formData.phone = `${formData.phone.countryCode}${formData.phone.areaCode}${formData.phone.phoneNumber}`;

    // Restructure "telephoneNumber" field
    // formData.telephoneNumber = formData.telephoneNumber.phoneNumber;

    // Remove unnecessary fields
    // ["countryCode", "areaCode", "isoCode"].forEach((field) => {
    //   delete formData.phone[field];
    //   delete formData.telephoneNumber[field];
    // });

    // Remove "phoneNumber" field
    // delete formData.phone.phoneNumber;
    // delete formData.telephoneNumber.phoneNumber;

    
    console.log("All input values:", formData);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <ConfigProvider theme={theme}>
        <Steps current={currentStep}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </ConfigProvider>

      <div className=" mt-8">{steps[currentStep].content}</div>

      <div className="steps-action">
        {currentStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="dashed" onClick={handleNext}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="dashed" htmlType="submit">
            Register
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MultiStepForm;
