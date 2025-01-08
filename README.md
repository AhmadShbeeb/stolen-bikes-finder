# Stolen Bikes Tracker

A modern web application built to help track and recover stolen bicycles. This platform provides a user-friendly interface to search, report, and manage stolen bike cases.

## 🚲 Features

- **Advanced Search**: Filter bikes by various criteria including date range, location, and bike details
- **Responsive Design**: Fully responsive interface that works seamlessly across desktop and mobile devices
- **Real-time Updates**: Powered by React Query for efficient data fetching and caching
- **Modern UI**: Beautiful and intuitive user interface built with Tailwind CSS and Shadcn UI components

## 🛠️ Technologies

### Frontend

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Tanstack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Shadcn UI** - Accessible component primitives
- **date-fns** - Date manipulation library
- **Axios** - HTTP client

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Turbopack** - Incremental bundler

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmadShbeeb/stolen-bikes-finder.git
   cd stolen-bikes-finder
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Scripts

- `pnpm run dev` - Start development server with Turbopack
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

## 🎨 UI Components

The project uses a combination of custom components and Radix UI primitives, styled with Tailwind CSS for a modern and consistent user interface. Key components include:

- Custom form elements
- Date range picker
- Responsive grid layouts
- Loading states
- Error boundaries
- Pagination
- Tooltips and popovers

## 🔍 Search Functionality

The application implements a robust search system with:

- Real-time search updates
- Query parameter synchronization
- Count-based results
- Efficient data caching
