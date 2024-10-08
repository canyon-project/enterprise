"use client";
import { Button, Empty, InputNumber, Modal, Space, Table } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Dashboard() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [seatValue, setSeatValue] = useState(1);
  const dataSource = [
    {
      key: "1",
      seatsPurchased: 32,
      nextPaymentDue: "2021-09-01",
    },
  ];
  const columns = [
    {
      title: "License Key",
      dataIndex: "key",
    },
    {
      title: "Seats Purchased",
      dataIndex: "seatsPurchased",
    },
    {
      title: "Next Payment Due",
      dataIndex: "nextPaymentDue",
    },
  ];
  return (
    <div className={"px-[24px]"}>
      <div className={"py-[48px] px-[24px]"}>
        <Space className={"pb-[32px]"}>
          <Button
            type={"primary"}
            onClick={() => {
              setCreateModalOpen(true);
            }}
          >
            Create License Key
          </Button>
          <Button icon={<ExportOutlined />}>View Customer Portal</Button>
        </Space>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          locale={{
            emptyText: <Empty description="No License Key."></Empty>,
          }}
        />
      </div>
      <Modal
        title="Create License Key"
        open={createModalOpen}
        onOk={() => {
          setCreateModalOpen(false);
        }}
        onCancel={() => {
          setCreateModalOpen(false);
        }}
        okText={"Create"}
      >
        <div className={"flex flex-col"}>
          <span style={{ fontWeight: 500, fontSize: "16px" }}>Seats</span>
          <InputNumber
            style={{ width: "100%" }}
            value={seatValue}
            onChange={(e) => {
              setSeatValue(e);
            }}
          />
        </div>
      </Modal>
    </div>
  );
}
