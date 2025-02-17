# Car Showcase Project 🚗

Welcome to the **Car Showcase** project! This is a modern web application built with **Next.js 13** that allows users to explore and filter cars based on various parameters such as make, model, year, and fuel type. The project integrates with the [API Ninjas Cars API](https://api-ninjas.com/api/cars) to fetch car data and provides a sleek, responsive user interface.

![Car Showcase Screenshot](./public/screenshot.png) 
---

## Features ✨

- **Search and Filter Cars**: Users can search for cars by make, model, year, and fuel type.
- **Responsive Design**: The application is fully responsive and works seamlessly on all devices.
- **Dynamic Data Fetching**: Car data is fetched dynamically from the [API Ninjas Cars API](https://api-ninjas.com/api/cars).
- **Modern UI**: Built with **Tailwind CSS** for a clean and modern user interface.
- **Server-Side Rendering (SSR)**: Utilizes Next.js 13's SSR capabilities for fast page loads and SEO optimization.

---

## Technologies Used 🛠️

- **Frontend**:
  - [Next.js 15](https://nextjs.org/) (React framework)
  - [Tailwind CSS](https://tailwindcss.com/) (Styling)
  - [TypeScript](https://www.typescriptlang.org/) (Type checking)
- **API**:
  - [API Ninjas Cars API](https://api-ninjas.com/api/cars) (Car data)
- **Deployment**:
  - [Vercel](https://vercel.com/) (Hosting)

---

## Getting Started 🚀

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- An API key from [API Ninjas](https://api-ninjas.com/) (free tier available)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yeabTesfaye/car-showcase.git
   cd car-showcase

2. **Install dependencies**: 
npm install

3. **Set up environment variables**:
``bash 
  NEXT_PUBLIC_API_NINJAS_KEY=your_api_key_here

3. **Start the development server**:
``bash 
  npm run dev


## Known Shortcomings ⚠️
Currently, the application is limited to returning a single car for each query. This is because the free version of the API Ninjas Cars API does not allow the use of the limit parameter, restricting the results. This limitation may impact the overall user experience when exploring multiple options at once.