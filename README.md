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

## 📁 Estructura del proyecto

```
brillo-celular/
├── src/                 # Archivos fuente
│   ├── main.tsx         # Punto de entrada de la aplicación (React)
│   ├── App.tsx          # Componente raíz de React
│   └── style.css        # Estilos de la aplicación
├── public/              # Recursos estáticos
│   └── favicon.png      # Logo del Sitio
├── index.html           # Punto de entrada HTML
├── package.json         # Dependencias y scripts del proyecto
└── tsconfig.json        # Configuración de TypeScript (JSX habilitado)
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [licencia MIT](LICENSE).
