# Sky-Avito

<img src="public/img/logo.png" width="150" height="150"> 

**Sky-Avito** - финальный индивидуальный проект по курсу Web-разработчик Skypro

## Описание проекта:

Cайт онлайн объявлений, аналог "Авито" [(макет)](https://www.figma.com/file/ISqzPS7Sym7V004jFo5buE/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B0%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3-%D0%90%D0%B2%D0%B8%D1%82%D0%BE?type=design&node-id=7-507&mode=design&t=GgB1T4ikZuq5RZnv-0)

## Структура и функционал приложения

### Главная страница приложения

* Пользователь имеет возможность авторизации и регистрации на сайте.
* Пока пользователь не авторизован, он имеет доступ к следующему функционалу:

  - просмотр товаров на Главной странице;
  - поиск товаров по названию;
  - просмотр объявления;
  - возможность увидеть номер телефона продавца, а также посмотреть его профиль.

### Страница профиля

* В личном кабинете отображается: приветствие пользователя, имя и фамилия, аватар и телефон.
* Все поля могут редактироваться.
* Если пользователь не редактировал эти поля, то кнопка “Сохранить” неактивна.
* Пользователь имеет возможность изменить пароль.
* Ниже в профиле отображаются “Мои товары”.
* По клику на товар открывается карточка товара.

### Страница товара

* Указаны цена, наименование и описание товара, телефон и имя продавца. Также представлены отзывы пользователей о товаре. 
* Если эту карточку открывает продавец, он имеет возможность редактировать цену, наименование и описание товара, а также снять объявление с публикации.
* По клику на кнопку “Разместить объявление” открывается модальное окно и у продавца есть возможность добавить цену, наименование и описание товара, и его картинку. В конце окна кнопка “Опубликовать”.

### Страница продавца

* Информация о продавце: аватар, имя, фамилия, город, дата размещения первого объявления.
* Кнопка для просмотра телефона продавца.
* Список всех товаров продавца.

### Модальное окно отзывов

* Список всех отзывов о товаре с указанием имени продавца, его аватарки и даты размещения отзыва.
* Неавторизованный пользователь не может оставлять комментарии.

### Модальное окно создания нового объявления

* При создании объявления пользователь имеет возможность указать название, описание, цену товара, а также загрузить до 5 фотографий.

### Модальное окно редактирования объявления

* Пользователь имеет возможность изменить название, описание, цену товара, а также удалить / загрузить до 5 фотографий.

### Модальное окно изменения пароля

* Пользователь имеет возможность изменить пароль.


## Запуск приложения:

На локальной машине должна быть установлена программа [Docker](https://www.docker.com/).

Для запуска приложения потребуется скачать файл бэкенда по [ссылке](https://drive.google.com/file/d/1pFE-NRANTsWmQwTyURjHXuECMmoKCFjO/view):
* разархивируйте скачанный файл;
* через терминал перейдите в разархивированную папку;
* запустите в терминале сервер командой:

  ```
  docker-compose -f docker-compose-backend.yaml up -d
  ```
* после этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/
* чтобы остановить работу бэкенда выполните команду:
  
  ```
  docker-compose down
  ```
* запросы к backend можно посмотреть [здесь](https://drive.google.com/file/d/1bM_BRkxz8vqFEr18LpnbJslHoPW_73FF/view)

* далее склонируйте репозиторий:
 
  ```
  https://github.com/PavelChuprin/sky-avito
  ```
* установите зависимости командой:

  ```
  npm install
  ```
* запустите проект командой:

  ```
  npm start
  ```

  ## Технологии в проекте
Проект разработан с использованием современных инструментов и технологий:
* React;
* Redux + Redux Toolkit + RTK Query;
* CSS Modules;
* Docker.

Также приложение имеет мобильную версию.

Дополнительные вспомогательные библиотеки:
* [react-hook-form](https://www.npmjs.com/package/react-hook-form)
* [react-content-loader](https://www.npmjs.com/package/react-content-loader)
* [swiper](https://www.npmjs.com/package/swiper)