# Brillo Celular

A blank Vite project with TypeScript setup, ready for development.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js)

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Zheoden/brillo-celular.git
cd brillo-celular
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

#### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

#### Production Build

Build the application for production:

```bash
npm run build
```

This command will:

1. Run TypeScript compiler to check for type errors
2. Build the application using Vite
3. Output the optimized files to the `dist/` directory

#### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This will serve the built files from the `dist/` directory.

## 📁 Project Structure

```
brillo-celular/
├── src/                  # Source files
│   ├── main.tsx         # Application entry point (React)
│   ├── App.tsx          # Root React component
│   ├── counter.ts       # Example TypeScript module (wires the counter button)
│   ├── style.css        # Application styles
│   └── typescript.svg   # TypeScript logo
├── public/              # Static assets
│   └── vite.svg         # Vite logo
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration (JSX enabled)
└── vite.config.js       # Vite configuration (optional)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔧 Configuration

### TypeScript

TypeScript is configured with strict mode enabled. You can modify the configuration in `tsconfig.json`.

### Vite

Vite configuration can be customized by creating a `vite.config.ts` file in the root directory if needed.

## 📝 Development

To start developing:

1. Start the development server: `npm run dev`
2. Open `src/main.tsx` and start coding (the app now uses React/TSX)
3. Changes will be reflected immediately in the browser thanks to HMR

## 🏗️ Building for Production

When you're ready to deploy:

1. Run `npm run build` to create an optimized production build
2. The output will be in the `dist/` directory
3. Deploy the contents of the `dist/` directory to your hosting service

## 📚 Learn More

- [Vite Documentation](https://vite.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
