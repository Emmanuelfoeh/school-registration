import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space } from "antd";
import React from "react";

const AddSchoolComp = () => {
  return (
    <>
      <Form.List name="school">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "schoolName"]}
                  label="Educational Institution Name"
                  className="w-72"
                  rules={[{ required: true, message: "Missing School Name" }]}
                >
                  <Input placeholder="Enter School Name" />
                </Form.Item>

                <div className="flex">
                  <Form.Item
                    {...restField}
                    name={[name, "StartDate"]}
                    label="Start Date"
                    className="mr-4 "
                    rules={[{ required: true, message: "Missing Start Date" }]}
                  >
                    <DatePicker className="w-36" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "EndDate"]}
                    label="End Date"
                    className="mr-2"
                    rules={[{ required: true, message: "Missing End Date" }]}
                  >
                    <DatePicker className="w-36" />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </div>
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add School
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default AddSchoolComp;
