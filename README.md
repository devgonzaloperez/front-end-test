# Front-End Test - E-commerce

El proyecto es una prueba técnica frontend. Se trata de un e-commerce de dos páginas, desarrollado con **React** con **Vite**.

## 1. Scripts Disponibles

Desde la raíz del proyecto, se pueden ejecutar los scripts que se pueden observar a continuación.

### `npm start`

Inicia el servidor de desarrollo en `http://localhost:3000` utilizando **Vite**.

### `npm run build`

Genera la versión de producción en la carpeta `dist`.

### `npm run preview`

Ejecuta una versión pre-compilada de la aplicación en un servidor local.

### `npm run lint`

Ejecuta **ESLint** para analizar y corregir errores en el código.

### `npm run test`

Ejecuta los tests llevados a cabo con **Jest** y **React Testing Library**.

## 2. Tecnologías y Librerías Utilizadas

### Dependencias principales

- **React 19**: Biblioteca para construir la interfaz de usuario.
- **React Router 7**: Manejo de rutas dentro de la aplicación.
- **Material UI**: Componentes utilizados para la creación de la UI.

### Dependencias de desarrollo

- **Vite**: Herramienta de compilación y desarrollo rápida.
- **ESLint**: Linter para mantener un código limpio y consistente.

## 4. Instalación Entorno de Desarrollo
1. Clonar el repositorio.
   ```
   git clone https://github.com/tu-usuario/front-end-test.git
   cd front-end-test
   ```
2. Instalar dependencias.
   ```
   npm install
   ```
3. Iniciar el entorno de desarrollo:
   ```
   npm start
   ```

## 3. Rutas de la Aplicación

### `/products`

Página principal donde se listan los productos disponibles.

### `/products/:brand-name/:id`

Página de detalles de un producto específico.

## 5. Construcción para Producción

Para generar los archivos optimizados para producción, se debe ejecutar el siguiente comando.

```sh
npm run build
```

Esto generará la carpeta `dist/` con los archivos listos para desplegar en un servidor.

