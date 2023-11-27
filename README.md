# Sky-Avito

<img src="public/img/logo.png" width="150" height="150"> 

**Sky-Avito** - финальный индивидуальный проект по курсу Web-разработчик Skypro

## Описание проекта:

Cайт онлайн объявлений, аналог "Авито" [(макет)](https://www.figma.com/file/ISqzPS7Sym7V004jFo5buE/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B0%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3-%D0%90%D0%B2%D0%B8%D1%82%D0%BE?type=design&node-id=7-507&mode=design&t=GgB1T4ikZuq5RZnv-0)

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

  ## Демо проекта

  ## Технологии в проекте

  ## Дополнительные данные