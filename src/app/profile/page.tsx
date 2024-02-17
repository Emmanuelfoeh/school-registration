// "use client"
import { Alert, Button, Form, Input } from "antd";
import React from "react";
import FormInput from "../components/form-comp/FormInput";
import Layout from "../components/layout-comp/LayoutComp";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
  return (
    <Layout>
      <div className=" w-full">
        <div className="flex justify-between mb-4">
          <h1 className="text-lg">Profile</h1>

          <Link href={"/profile/add-profile"}>
            <Button>Add New Profile</Button>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-6" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
          <div className=" w-52 bg-white gap-4  rounded-md shadow p-3 relative">
            <div className="flex justify-between">
              <h1 className="font-bold">Emano LTD</h1>
              <span className="">
                <CiEdit />
              </span>
            </div>
            <p className="">Lorem ipsum dignissimos, ores...</p>
            <Link className="mt-4" href={"34"}>
              <Button> View Detail</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
