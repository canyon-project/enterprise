"use client";

import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node: React.ReactNode) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7A00A1',
        },
      }}
    >
      {node}
    </ConfigProvider>
  </>
)

export default withTheme;
