import { Spin } from "antd";

const HomePage = () => {
  return (
    <div className={"w-full h-[80vh] flex justify-center items-center"}>
      <Spin spinning={true}></Spin>
    </div>
  );
};

export default HomePage;
