"use client";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
// import {cookies} from "next/headers";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Space>
        <LogoutOutlined />
        Logout
      </Space>
    ),
  },
];
const onClick = () => {
  // cookies.remove('token');
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "/login";
  // console.log(document.cookie)
};
const UserInfo = ({ userInfo }) => {
  return (
    <div>
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar>{userInfo ? userInfo.email[0] : ""}</Avatar>
        </a>
      </Dropdown>
    </div>
  );
};

export default UserInfo;
