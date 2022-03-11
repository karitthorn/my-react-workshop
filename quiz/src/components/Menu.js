import { DataContext } from "../App";
import { useContext } from "react";

const Menu = () => {
  const { setAppState } = useContext(DataContext);
  return (
    <div className="menu">
      <h1>ทำด้วยใจ</h1>
      <button onClick={()=>setAppState("Quiz")}>เริ่มทำเเบบทดสอบ</button>
    </div>
  );
};

export default Menu;
