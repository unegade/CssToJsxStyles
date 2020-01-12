## Скрип для конвертации css стилей в стили jsx для React
Скрипт выполняет следующее:
1. Берет данные из буфера
2. Конвертирует в jsx
3. Кладет обратно в буфер

Все видимые стили, которые применяются для элемента можно скопировать в Инструментах разработчика кликнув правой кнопкой по элементу Copy > Copy styles

## Пример:
Буфер до выполнения скрипта:
```css
min-height: 0;
font-size: 14px;
font-family: Roboto,"Helvetica Neue",sans-serif;
color: rgba(0,0,0,0.87);
box-sizing: border-box;
display: flex;
flex: 1;
width: 100%;
```
Буфер после выполнения скрипта:
```json
minHeight: 0,
fontSize: '14px',
fontFamily: 'Roboto,"Helvetica Neue",sans-serif',
color: 'rgba(0,0,0,0.87)',
boxSizing: 'border-box',
display: 'flex',
flex: 1,
width: '100%',

```
---

Для работы скрипта нужен модуль [copy-paste](https://www.npmjs.com/package/copy-paste)<br />
Установить и связать можно с помощью команд 
```bash
npm install -g copy-paste
npm link copy-paste
```
