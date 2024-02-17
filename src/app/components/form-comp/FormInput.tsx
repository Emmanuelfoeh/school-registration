"use client";
import React from "react";
import { Form, Input } from "antd";
import { Rule } from "antd/es/form";

interface FormInputProps {
  label: string;
  name: string;
  placeholder?: string;
  max?: number;
  rules?:Rule[];
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  rules,
  ...rest
}) => {
  return (
    <Form.Item hasFeedback label={label} name={name} rules={rules} validateTrigger="onBlur">
      <Input
        placeholder={placeholder || `Validate required onBlur - ${name}`}
        {...rest}
      />
    </Form.Item>
  );
};

export default FormInput;
