# Acortador de Enlaces con Redis

Este es un proyecto de un **acortador de enlaces** simple, que utiliza **Redis** como base de datos para almacenar y gestionar las URL acortadas. Permite a los usuarios ingresar un enlace largo y generar un enlace corto que redirige al original. Además, el proyecto muestra una lista de los últimos 5 enlaces acortados.

## Funcionalidad

- **Acortar Enlaces**: Los usuarios pueden pegar un enlace y obtener una versión acortada del mismo.
- **Redirección**: Los enlaces acortados redirigen a la URL original.
- **Historial de Enlaces**: Muestra los últimos 5 enlaces acortados.
  
## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (Fetch API para las solicitudes HTTP)
  
- **Backend**:
  - Node.js (servidor web)
  - Express.js (framework para gestionar rutas y solicitudes HTTP)
  - Redis (base de datos en memoria para almacenar las URLs)
  - body-parser (para manejar solicitudes JSON)
  
## Requisitos Previos

Para ejecutar este proyecto, necesitas tener instalados los siguientes programas en tu máquina:

- **Node.js**: [Descargar e instalar](https://nodejs.org/)
- **Redis**: [Descargar e instalar](https://redis.io/)

Si estás en Windows, puedes usar **WSL (Windows Subsystem for Linux)** para ejecutar Redis.

## Entornos Soportados
Este proyecto se puede ejecutar en los siguientes entornos:

- **Windows** (utilizando WSL para Redis)
- **Linux**
- **MacOS**
  
El proyecto es compatible con cualquier entorno que pueda ejecutar Node.js y Redis.
Pudes verlo en tu navegador en http://localhost:4567

## Autor
- **Luis Roma** - Estudiante de Full Stack Development.
- **Fundacion Vass** - **Lanbide** - **DevCamp** - **Bottega University**