#### ЗАДАЧА
Требуется разработать веб-приложение отображающее онлайн карту мира "Игры престолов" и по данным бекенда, передаваемым по websocket, показывает перемещение известных персонажей мира. 

Backend часть прилагается в репозитарии задачи.

Задачу нужно сдать репозитарием на bitbucket.

#### Запуск

Для запуска сервера требуется ввести команду `npm start`. 
Сервер раздает локацию через веб-сокет по адресу `http://localhost:8080/`. 

#### Формат пакета локации

```js
{
   "hero": "Daenerys Targaryen",
   "house": "Targaryen",
   "x": 15,
   "y": 15
}
```

#### Настройка
Герои создаются с помощью `.json` конфигурации в директории `heroes`. Для каждого героя создается своя конфигурация. 

Изображения гербов находится в директории `/image/coat-of-arms/`

Изображение карты находится в директории `/image/map/`
