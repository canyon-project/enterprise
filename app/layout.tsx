'use client';
import React, {useState} from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import withTheme from "@/theme";
import './globals.css'
import UserInfo from "@/components/user-info";
import axios from "axios";
import {useRequest} from "ahooks";
import Header from "@/components/header";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  // const userInfo = await axios.get('/api/user-info');
  // const [userInfo, setUserInfo] =useState(null);
  return (
    <html lang="en">
    <body>
    <AntdRegistry>{withTheme(<div>
      {/*<div>*/}
      {/*  <UserInfo userInfo={userInfo}/>*/}
      {/*</div>*/}
      <Header/>
      {children}
    </div>)}</AntdRegistry>
    </body>
    </html>
  );
}

export default RootLayout;
