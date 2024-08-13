"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import withTheme from "@/theme";
import "./globals.css";
import Header from "@/components/header";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {withTheme(
            <div>
              <Header />
              {children}
            </div>,
          )}
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
