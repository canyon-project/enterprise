// 'use client';
// import withTheme from '../../../theme';

// import withTheme from "@/theme";
import {Button, Spin} from "antd";

function Home() {
  return (
    <div className={'w-full h-[80vh] flex justify-center items-center'}>
      <Spin spinning={true}>
      </Spin>
    </div>
  );
}


const HomePage = () => {
  return (<Home />);
}

export default HomePage;
