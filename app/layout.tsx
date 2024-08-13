'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import withTheme from "@/theme";
import './globals.css'

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
  <body>
  <AntdRegistry>{withTheme(<div>
    {children}
  </div>)}</AntdRegistry>
  </body>
  </html>
);

export default RootLayout;
