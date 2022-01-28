### ЗАДАЧА:
Требуется разработать веб-приложение отображающее онлайн карту мира "Игры престолов". По данным сервера, передаваемым по websocket, показывать перемещение известных персонажей мира. 

Персонажи отображаются гербами, предоставленными в задаче.

При выполнении задачи необходимо использовать библиотеку для отображения карт "leaflet.js".

При наведении курсора на герб персонажа, необходимо выводить его имя во всплывающей подсказке.

Первоночальное расположение персонажей должно быть как в примере example.png.

Backend часть прилагается в репозитарии задачи.

Задачу нужно сдать на доступный git-репозиторий.


##### Выполнить задание можно двумя способами:

1. Без использования React. В этом случае статические файлы (html, css, js) должны быть добавлены в директорию `public`.

2. С использованием React. В этом случае исходный код проекта должен располагаться в директории `client`, и собираться Webpack. При production сборке статические файлы должны быть добавлены в директорию `public`.

В обоих случаях доступ к странице приложения из браузера должен быть получен по адресу `http://localhost:8080/index.html`.

# При выполнении задания вторым способом это учитывается, как большее достижение.


#### Запуск:

Для запуска сервера требуется ввести команды:

`npm install`
 
`npm run server`
 
Сервер слушает запросы по адресу `http://localhost:8080`. Раздает локацию через веб-сокет по адресу `http://localhost:8081`. 


#### Формат пакета локации:

```js
{
   "hero": "Daenerys Targaryen",
   "house": "Targaryen",
   "x": 15,
   "y": 15
}
```

#### Настройка:

Изображения гербов находится в директории `public/images/coat-of-arms/`

Изображение карты находится в директории `public/images/map/`
