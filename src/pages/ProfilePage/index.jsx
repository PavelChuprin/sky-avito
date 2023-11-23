import React from "react";
import Menu from "../../components/Menu";
import Cards from "../../components/Cards";
import SettigsBlock from "../../components/SettingsBlock";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import ProfileSkeleton from "./ProfileSkeleton";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../redux/API/usersAPI";
import classes from "./index.module.css";

const ProfilePage = () => {
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  const timestamp = React.useRef(Date.now()).current;

  const {
    data: user,
    error,
    isLoading,
  } = useGetUserQuery(timestamp, {
    refetchOnMountOrArgChange: true,
  });

  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    if (user && user.name) {
      setUserName(user.name);
    }
  }, [user]);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
      <main>
        <div className={classes.container}>
          {isLoading && <ProfileSkeleton />}
          {!!user && (
            <>
              <div className={classes.center_block}>
                <Menu />
                <h2 className={classes.h2}>
                  Здравствуйте{user.name ? `, ${user.name}` : ""}!
                </h2>
                <div className={classes.profile}>
                  <div className={classes.content}>
                    <h3 className={classes.profile__title}>
                      Настройки профиля
                    </h3>
                    <SettigsBlock
                      user={user}
                      setUserName={setUserName}
                      userName={userName}
                    />
                  </div>
                </div>

                <h3 className={classes.main__title}>Мои товары</h3>
              </div>
              <div className={classes.main__content}>
                <Cards sellerId={user.id} />
              </div>
            </>
          )}
          {error && (
            <h2 className={classes.h2}>
              Извините, произошла ошибка! <br />{" "}
              <span>{error.data.detail}</span>
            </h2>
          )}
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
