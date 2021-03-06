# Учебный проект «Portfolio»
💼 Адаптивное одностраничное SPA-приложение с авторизацией и админ-панелью для заполнения данными. Выпускной проект на курсе "Продвинутая веб-разработке".

Основной стек:
+ Vue.js
+ Pug
+ PostCSS
+ Webpack 4
+ JavaScript

<p align='center'>
<img src='http://lessons.sergeev.press/git%20portf%20(1).png'>
</p>

[**Демо**](https://sergeev-vn.github.io/portfolio-website/)

[**Демо Admin-панель**](https://sergeev-vn.github.io/portfolio-website/admin)

## Чтобы развернуть проект необходимо:
> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
> [последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

```sh
$ git clone git@github.com:sergeev-vn/portfolio-website.git
$ cd ls-portfolio-website
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение                                                                                   |
| ------ | -------------------------------------------------------------------------------------------- |
| dev    | Запустит webpack-dev-server с _горячей_ заменой модулей                                      |
| build  | Соберет проект для **production** (проект готов к загрузке на сервер)                        |
| reg    | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:

```sh
$ npm run имя_скрипта
```

##### Либо:

```sh
$ yarn имя_скрипта
```
