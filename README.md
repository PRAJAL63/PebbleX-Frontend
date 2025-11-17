# PebbleX - Hardware Marketplace Platform 🛠️

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC.svg)](https://tailwindcss.com/)

**PebbleX** is a trusted online platform that serves as a middleman connecting hardware vendors, suppliers, buyers, and distributors in one seamless marketplace. We don't sell products ourselves—we provide the digital infrastructure that enables all parties to buy and sell hardware products efficiently and securely. Built with cutting-edge web technologies for optimal performance and user experience.

## 🌟 Features

- **🤝 Platform Connector** - Connect vendors, suppliers, buyers, and middlemen in one place
- **🔐 Secure Authentication** - Protected user accounts for all parties
- **🛍️ Product Marketplace** - Browse, list, and search hardware products
- **👥 Multi-Role Support** - Vendor, supplier, buyer, and distributor accounts
- **🛒 Transaction Facilitation** - Seamless order processing between parties
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **⚡ Fast Performance** - Powered by Vite for lightning-fast development
- **🎨 Modern UI** - Beautiful components with shadcn/ui and Radix UI
- **🔒 Type-Safe** - Full TypeScript support for robust code

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v10 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PRAJAL63/javascript-react.git
   cd PebbleX-Frontend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   VITE_API_URL=http://localhost:3000/api
   VITE_API_KEY=your-api-key-here
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
PebbleX-Frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── InputField.tsx
│   │   └── LoginForm.tsx
│   ├── lib/              # Utility functions and services
│   │   ├── services/     # API service layer
│   │   │   ├── auth.ts   # Authentication services
│   │   │   ├── axios.ts  # Axios configuration
│   │   │   └── user.ts   # User services
│   │   └── utils.ts      # Utility functions
│   ├── pages/            # Page components
│   │   ├── Homepage.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── generated.ts      # Auto-generated types
├── .env                  # Environment variables
├── .prettierrc           # Prettier configuration
├── eslint.config.js      # ESLint configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies
```

## 🛠️ Tech Stack

### Core

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.2** - Build tool and dev server

### Styling

- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives

### State & Routing

- **React Router 7.9.6** - Client-side routing

### HTTP Client

- **Axios 1.13.2** - Promise-based HTTP client

### Code Quality

- **ESLint 9.39.1** - Linting
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=your-api-key-here
```

### Axios Configuration

The project uses a centralized Axios instance with:

- Automatic token authentication
- Request/response interceptors
- Global error handling
- 401 unauthorized redirect

Location: `src/lib/services/axios.ts`

## 🎨 UI Components

### Custom Components

- **InputField** - Reusable form input with label
- **LoginForm** - Login form with validation
- **Button** - Customizable button component
- **Input** - Enhanced input field
- **Label** - Accessible form label

## 🔐 Authentication

The authentication system includes:

- User login with email/password
- Token-based authentication (JWT)
- Automatic token storage in localStorage
- Protected routes
- Auto-redirect on unauthorized access

## 🌐 API Integration

### Service Layer Structure

```typescript
// Example: Login service
import axiosInstance from './axios';

export const login = async (data: UserLoginInput) => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data;
};
```

All API calls go through the centralized `axiosInstance` which handles:

- Base URL configuration
- Authentication headers
- Error handling
- Response transformation

## 🎯 Best Practices

- **Component Structure** - Separation of concerns (pages, components, services)
- **Type Safety** - Full TypeScript coverage
- **Code Formatting** - Automated with Prettier
- **Linting** - ESLint with React and TypeScript rules
- **Error Handling** - User-friendly error messages
- **Loading States** - Visual feedback for async operations
- **Responsive Design** - Mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses:

- **Prettier** for code formatting
- **ESLint** for code quality
- **TypeScript** for type checking

Run `pnpm format` before committing to ensure consistent code style.

## 🐛 Known Issues

- None at the moment

## 📅 Roadmap

- [ ] Product listing page
- [ ] Vendor dashboard
- [ ] Order management
- [ ] Payment integration
- [ ] Real-time notifications
- [ ] Advanced search and filters
- [ ] Product reviews and ratings

## 📄 License

This project is private and proprietary.

## 👥 Team

Developed by the PebbleX team.

## 📞 Support

For support, email support@pebblex.com or open an issue in the repository.

---

**Built with ❤️ by the PebbleX Team**
