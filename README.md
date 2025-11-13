# Brillo Celular

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (se recomienda la versión 22 o superior)
- npm (incluido con Node.js)

## 🚀 Primeros pasos

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Zheoden/brillo-celular.git
cd brillo-celular
```

2. Instala las dependencias:

```bash
npm install
```

### Ejecutar la aplicación

#### Modo de desarrollo

Inicia el servidor de desarrollo con hot module replacement (HMR):

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

#### Compilación para producción

Genera la versión optimizada para producción:

```bash
npm run build
```

Este comando realizará:

1. Ejecutar el compilador de TypeScript para comprobar errores de tipos
2. Compilar la aplicación usando Vite
3. Generar los archivos optimizados en el directorio `dist/`

#### Previsualizar la compilación de producción

Previsualiza la compilación de producción localmente:

```bash
npm run preview
```

Esto servirá los archivos generados desde el directorio `dist/`.

## 📁 Estructura del proyecto

```
brillo-celular/
├── src/                 # Archivos fuente
│   ├── main.tsx         # Punto de entrada de la aplicación (React)
│   ├── App.tsx          # Componente raíz de React
│   ├── style.css        # Estilos de la aplicación
│   └── typescript.svg   # Logo de TypeScript
├── public/              # Recursos estáticos
│   └── vite.svg         # Logo de Vite
├── index.html           # Punto de entrada HTML
├── package.json         # Dependencias y scripts del proyecto
├── tsconfig.json        # Configuración de TypeScript (JSX habilitado)
└── vite.config.js       # Configuración de Vite (opcional)
```

## 🛠️ Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Previsualiza la compilación de producción localmente

## 🔧 Configuración

### TypeScript

TypeScript está configurado con modo estricto habilitado. Puedes modificar la configuración en `tsconfig.json`.

### Vite

La configuración de Vite puede personalizarse creando un archivo `vite.config.ts` en la raíz si es necesario.

## 📝 Desarrollo

Para comenzar a desarrollar:

1. Inicia el servidor de desarrollo: `npm run dev`
2. Abre `src/main.tsx` y comienza a codificar (la aplicación ahora usa React/TSX)
3. Los cambios se reflejarán inmediatamente en el navegador gracias a HMR

## 🏗️ Compilar para producción

Cuando estés listo para desplegar:

1. Ejecuta `npm run build` para crear una compilación optimizada
2. La salida estará en el directorio `dist/`
3. Despliega el contenido del directorio `dist/` en tu servicio de hosting

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [licencia MIT](LICENSE).
