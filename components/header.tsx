import UserInfo from "@/components/user-info";
import { useRequest } from "ahooks";
import axios from "axios";

const Header = () => {
  const { data: userInfo } = useRequest(
    () => axios.get("/api/user-info").then(({ data }) => data),
    {
      onSuccess: (res) => {
        console.log(res.data);
      },
      onError: (error) => {
        if (window.location.pathname === "/login") {
        } else {
          window.location.href = "/login";
        }
      },
    },
  );
  return (
    <div>
      <header className="py-4">
        <div className="flex justify-center">
          <a
            className="uppercase font-bold flex-1 justify-center items-center flex"
            href="/"
          >
            Canyon
          </a>

          {userInfo && <UserInfo userInfo={userInfo} />}
        </div>
      </header>
    </div>
  );
};

export default Header;
