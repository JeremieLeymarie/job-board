import { FC } from "react";
import BoardContainer from "../components/board/BoardContainer";

const Auth: FC = () => {

  return (
    <div className="grid grid-cols-12 h-screen">
      <BoardContainer />
    </div>
  );
};

export default Auth;