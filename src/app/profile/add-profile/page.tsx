"use client";
import FormInput from "@/app/components/form-comp/FormInput";
import Layout from "@/app/components/layout-comp/LayoutComp";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Upload } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const AddProfile = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  // const handlePreview = async (file: any) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj as FileType);
  //   }

  //   setPreviewImage(file.url || (file.preview as string));
  //   setPreviewOpen(true);
  //   setPreviewTitle(
  //     file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
  //   );
  // };

  // const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
  //   setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Add New Profile</h1>
      <Form
        name="trigger"
        // style={{ maxWidth: 600 }}
        layout="vertical"
        autoComplete="off"
        className="w-full "
      >
        <div className="flex flex-col w-[70%]">
          <h1 className="text-lg font-bold mb-5">Account Information</h1>
          <div className="grid grid-cols-2 gap-x-8 justify-between ">
            <FormInput
              name="businessName"
              label="Business Name"
              rules={[{ required: true, message: "This field is required" }]}
            />

            <FormInput
              name="businessType"
              label="Business Type"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>

          <div className=" grid grid-cols-2 gap-x-8 w-full">
            <FormInput
              name="email"
              label="Email"
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
            />
            <FormInput
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone Number!",
                },
              ]}
            />
          </div>
          <div className="upload-div mt-5">
            <Upload
              listType="picture-card"
              // fileList={fileList}
              multiple
              // onPreview={handlePreview}
              // onChange={handleChange}
            >
              {/* {fileList.length >= 8 ? null : uploadButton} */}
              {uploadButton}
            </Upload>
            <Modal
              // open={previewOpen}
              // title={previewTitle}
              // footer={null}
              onCancel={handleCancel}
            >
              <Image
                alt="example"
                style={{ width: "100%" }}
                src={previewImage}
              />
            </Modal>
          </div>
          <div className="w-24 mt-5">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      </Form>
    </Layout>
  );
};

export default AddProfile;
