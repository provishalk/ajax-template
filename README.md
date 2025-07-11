# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment Variables

This project uses the following environment variables for Mailmodo configuration:

- `VITE_MAILMODO_SITE_ID`: Mailmodo Site ID (default: `3sBXu5uV2H`)
- `VITE_MAILMODO_BASE_URL`: Mailmodo Base URL (default: `https://app-external-form-api-debug.azurewebsites.net`)
- `VITE_MAILMODO_SCRIPT_SRC`: Mailmodo Script Source URL (default: `https://api-debug.mailmodo.com/form/script.js`)

### Setting up environment variables for Vercel deployment:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:
   - `VITE_MAILMODO_SITE_ID`
   - `VITE_MAILMODO_BASE_URL`
   - `VITE_MAILMODO_SCRIPT_SRC`

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
