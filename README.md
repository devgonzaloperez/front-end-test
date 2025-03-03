
# Front-End Test

## Descripción

Este proyecto es una prueba técnica de front end que consiste en un e-commerce de dos páginas, desarrollado utilizando **React**, **Jest** y **Cypress**.

## Instalación

Para configurar este proyecto en tu entorno local, sigue los pasos a continuación:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/devgonzaloperez/front-end-test
   cd front-end-test
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en el archivo `env.example` y completa la variable `VITE_API_BASE_URL` con la URL base de la API que tu aplicación necesitará para funcionar. Ejemplo:
   ```env
   VITE_API_BASE_URL=https://api.tu-ecommerce.com
   ```

## Scripts

Este proyecto incluye varios scripts para facilitar el desarrollo y la ejecución de tareas. A continuación se describen los scripts disponibles:

- `start`: Inicia el servidor de desarrollo con Vite.
  ```bash
  npm start
  ```

- `build`: Genera los archivos optimizados para producción.
  ```bash
  npm run build
  ```

- `lint`: Ejecuta ESLint para comprobar el código fuente en busca de problemas de estilo y calidad.
  ```bash
  npm run lint
  ```

- `test`: Ejecuta las pruebas con Jest.
  ```bash
  npm test
  ```

- `test:watch`: Ejecuta Jest en modo "watch", donde se ejecutan las pruebas automáticamente al realizar cambios.
  ```bash
  npm run test:watch
  ```

- `test:watch:coverage`: Ejecuta las pruebas con cobertura en modo "watch".
  ```bash
  npm run test:watch:coverage
  ```

- `cypress`: Abre la interfaz de Cypress para pruebas end-to-end.
  ```bash
  npm run cypress
  ```

- `test:cypress`: Ejecuta las pruebas de Cypress.
  ```bash
  npm run test:cypress
  ```

- `preview`: Previsualiza la aplicación construida en un entorno de producción.
  ```bash
  npm run preview
  ```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

### Producción:
- **@emotion/react** y **@emotion/styled**: Bibliotecas para gestionar estilos en React utilizando CSS-in-JS.
- **@fontsource/roboto**: Fuente Roboto para el diseño.
- **@mui/icons-material** y **@mui/material**: Material UI para la construcción de interfaces de usuario.
- **react**, **react-dom**: La biblioteca de React y su renderizador para la creación de interfaces de usuario.
- **react-router**: Manejo de rutas en la aplicación.
- **react-window**: Para la renderización eficiente de listas grandes.

### Desarrollo:
- **@babel/preset-env** y **@babel/preset-react**: Configuración de Babel para transpilar código JavaScript y JSX.
- **@eslint/js** y varios plugins de ESLint: Para mantener la calidad y estilo del código.
- **jest**, **babel-jest**: Herramientas para realizar pruebas unitarias.
- **cypress**: Herramienta para pruebas end-to-end.
- **vite**: Herramienta de construcción y desarrollo rápida.
- **vite-plugin-checker**: Para comprobar la calidad del código durante el desarrollo.


