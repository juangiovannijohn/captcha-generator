# Captcha Generator API

API para que utilices en tu proyecto frontend. Genera una imagen Captcha imposible de leer por bots.

This project was generated with [NodeJS](https://nodejs.org/es "NodeJS") version v18.12.0.

## Installation
1- Clonar el repositorio
```sh
git clone https://github.com/juangiovannijohn/captcha-generator
```
2- Cambiar a rama TEST
```sh
git checkout test
```
3- Instalar dependencias
```sh
npm i
```
## Autocompilar typescript
```sh
tsc --watch
```
## Cambiar a carpeta dist 
Abrir nueva terminal
```sh
cd dist
```
## Correr servidor local
```sh
nodemon app
```

Todas las modificaciones de código debes realizarlas en los archivos typescript.

# API Reference

La API esta diseñada para que le envies un texto el cual se va a renderizar en la imagen, un ancho y un alto en pixeles para mayor facilidad en la maquetación frontend.


### Consulta POST

```http
 POST http://localhost:3000/
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `text`  | `string` | **Required**. Cadena de texto que se renderizará en la imagen |
| `width`  | `number` |  Valor numérico en PX correspondiente al ancho de la imagen generada, Por defecto son 300px |
| `height` | `number` |  Valor numérico en PX correspondiente al alto de la imagen generada, Por defecto son 150px |

Ejemplo:
```javascript
//body POST
{
    "text": "hola mundo",
    "width": 350,
    "height": 350
}
```
Ejemplo de respuesta:
```javascript
{
 "ok": boolean,
 "msg": string,
 "data": data:image/png
}
```
