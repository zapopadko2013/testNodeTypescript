
Этот репозиторий содержит реализацию API  предложения по улучшению (фидбеки), голосовать за них и оставлять
комментарии с использованием NodeJS, Typescript и Prisma.(This repository contains an implementation of a Blog API using NodeJS, Typescript, and Prisma.)

Тестовое задание для Back-End разработчика

## Установка и запуск

1. Проект клонировать с репозитария(Clone the repository)
2. Прописать в файле .env в переменной DATABASE_URL параметры подключения к базе данных postgresql.
3. Установить нужные модули командой: npm install или yarn install(Install dependencies by running `yarn install`)
4. Запустить миграцию для создания нужных таблиц в базе данных командой: yarn db:push
5. Запустить программу командой: npm start или yarn start (Start the application by running `yarn start`)
6. Посмотреть swagger документацию программы можно по адресу: (http://localhost:8080/docs/)

## Конечные точки(Endpoints)

Доступны следующие конечные точки(The following endpoints are available):

- `POST /user/create`       : Добавление пользователя;
- `GET /user/getall`        : Список пользователя;
- `GET /user/get/:id`       : Выбор пользователя;
- `PUT /user/update`        : Обновление пользователя;
- `DELETE /user/delete/:id` : Удаление пользователя;
- `DELETE /user/deleteall`  : Удаление всех пользователей;
- `PUT /user/updatepart`    : Обновление email, avatar пользователя;


- `POST /feedback/create`         : Добавление предложения;
- `GET /feedback/getall`          : Спсисок всех предложений;
- `GET /feedback/get/:id`         : Выбор предложения;
- `PUT /feedback/update`          : Обновление предложения;
- `DELETE /feedback/delete/:id`   : Удаление предложения; 
- `GET /feedback/getcategory`     : Список категорий;
- `GET /feedback/getstatus`       : Список статусов;
- `GET /feedback/getcategoryfind` : Поиск предложений по категории;
- `GET /feedback/getstatusfind`   : Поиск предложений по статусу;


- `POST /comment/create`       : Добавление комментария;
- `GET /comment/getall`        : Список комментариев;
- `GET /comment/get/:id`       : Выбор комментария;
- `PUT /comment/update`        : Обновление комментария;
- `DELETE /comment/delete/:id` : Удаление комментария; 

- `POST /upvot/create`      : Добавление голосования;
- `GET /upvot/getf/:id`     : Голосования по предложениям;
- `GET /upvot/getu/:id`     : Голосования по пользователям;
- `GET /upvot/getcount/:id` : Количество голосований по предложению;


## Предпосылки(Prerequisites)

Чтобы использовать это приложение, вам понадобится следующее(To use this application, you will need the following):

- NodeJS
- NPM
- Typescript
- Prisma




