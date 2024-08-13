"use client";
import { Button, Empty, Input, InputNumber, Modal, Space, Table } from "antd";
import Icon, { ExportOutlined, KeyOutlined } from "@ant-design/icons";
import { useState } from "react";

// const Test = () => <span className="icon-[heroicons--arrow-top-right-on-square-solid]" style={{width:'10px',height:'10px'}}></span>
export default function Dashboard() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [seatValue, setSeatValue] = useState(1);
  const dataSource = [
    // {
    //   key: '1',
    //   seatsPurchased: 32,
    //   nextPaymentDue: '2021-09-01',
    // }
  ];
  const columns = [
    {
      title: "License Key",
      dataIndex: "key",
      // key: 'key',
      // render: text => <a>{text}</a>,
    },
    {
      title: "Seats Purchased",
      dataIndex: "seatsPurchased",
      // key: 'address',
    },
    {
      title: "Next Payment Due",
      dataIndex: "nextPaymentDue",
      // key: 'age',
    },
  ];
  return (
    <div className={"px-[24px]"}>
      <h2
        className={"py-[16px] text-[16px] text-center"}
        style={{ fontWeight: 500 }}
      >
        CANYON
      </h2>
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
        {/*No License Key.*/}
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
          {/*<span>{seatValue}</span>*/}
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
