import {useNavigate} from "react-router-dom";
import "./Err404.css";

function Err404() {
  const navigate = useNavigate();
  return (
    <div className="err404">
      <p>Error 404</p>
      <p>
        Please, come back to the{" "}
        <a onClick={() => navigate("/")} className="pointer">
          Main
        </a>{" "}
        page!
      </p>
    </div>
  );
}
export default Err404;
