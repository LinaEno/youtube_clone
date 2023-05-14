import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../img/bg.jpg";
import number from "../img/404.png";
import ghost1 from "../img/ghost1.png";
import ghost2 from "../img/ghost2.png";

function PageNotFound404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div className="error__box">
      <h2 className="error__title">
        The page you are looking for does not exist.
      </h2>
      <img src={ghost1} alt="404" className="error__ghost1" />
      <img src={ghost2} alt="404" className="error__ghost2" />
      <img src={number} alt="404" className="error__number" />
      <img src={bg} alt="error" className="error__bg" />
    </div>
  );
}

export default PageNotFound404;
