import React from "react";
import Menu from "../../components/Menu";
import Cards from "../../components/Cards";
import SettigsBlock from "../../components/SettingsBlock";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import ProfileSkeleton from "./ProfileSkeleton";
import { useSelector } from "react-redux";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { getUser } from "../../userApi";
import classes from "./index.module.css";

const ProfilePage = () => {
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  const [isLoading, setIsLoading] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      getUser(getTokenFromLocalStorage())
        .then((user) => {
          setUser(user);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

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
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
