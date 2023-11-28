import React from "react";
import { useDispatch } from "react-redux";
import { setModalExit } from "../../redux/store/slices/modalSlice";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { getUser } from "../../userApi";
import classes from "./index.module.css";

const ModalExit = () => {
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();

  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleLogout = () => {
    logout();
    dispatch(() => setModalExit(false));
    navigate("/login");
  };

  React.useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      getUser(getTokenFromLocalStorage())
        .then((user) => {
          setLoading(false);
          setUser(user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div
            className={classes.back_arrow}
            onClick={() => dispatch(setModalExit(false))}
          ></div>
          <h3 className={classes.title}>Выход из аккаунта</h3>
          <div
            className={classes.btn__close}
            onClick={() => dispatch(setModalExit(false))}
          >
            <div className={classes.btn__close_line}></div>
          </div>
          {loading ? (
            <div className={classes.loader}></div>
          ) : (
            <p className={classes.message}>
              Вы действительно хотите выйти из аккаунта{" "}
              <span>{user?.name ? user?.name : ""}</span>?
            </p>
          )}

          <div className={classes.btn_block}>
            <button className={classes.btn} onClick={handleLogout}>
              Да
            </button>
            <button
              className={classes.btn}
              onClick={() => dispatch(setModalExit(false))}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalExit;
