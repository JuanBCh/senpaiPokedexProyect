import "./Top.css";
import {useNavigate} from "react-router-dom";

function Top({name, id}) {
  const navigate = useNavigate();
  return (
    <nav className="topNav">
      <img src={"/Images/arrow-left.svg"} onClick={() => navigate("/")} />
      <h3>{name}</h3>
      <h4>#{id}</h4>
    </nav>
  );
}
export default Top;
