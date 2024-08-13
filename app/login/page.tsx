"use client";
import { Button, Form, FormProps, Input } from "antd";
import axios from "axios";
import { MailOutlined } from "@ant-design/icons";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
  axios.post("/api/sendLoginMagicLink", values).then((res) => {
    console.log(res);
  });
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  return (
    <div>
      <div className="mx-auto">
        <h2 className="text-center py-4 text-xl">Welcome back</h2>
        <div className={"flex justify-center py-[48px]"}>
          <Form
            className={"w-[512px] rounded-lg"}
            name="basic"
            layout={"vertical"}
            style={{ border: "1px solid #000", padding: "32px" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "#d9d9d9" }} />}
                placeholder={"Enter your email address"}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={"w-full"}>
                Login via magic link
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
