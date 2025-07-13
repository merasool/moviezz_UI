# Moviezz UI - React Movie Application

A modern React-based movie streaming application with a beautiful UI, built with Vite, Redux, and Firebase.

## 🎬 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Movie Discovery**: Browse popular, upcoming, and top-rated movies
- **User Authentication**: Firebase-powered login and signup system
- **Personal Watchlist**: Add movies to your personal list
- **Movie Details**: View trailers, ratings, and streaming information
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **State Management**: Redux Toolkit
- **Styling**: Styled Components
- **Authentication**: Firebase Auth
- **Icons**: React Icons
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/moviezz_ui.git
cd moviezz_ui
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header/         # Navigation header
│   ├── carousel/       # Movie carousel
│   ├── channels/       # Channel logos
│   ├── films/          # Movie cards
│   └── shows/          # Show components
├── pages/              # Page components
│   ├── home/           # Home page
│   ├── login/          # Login page
│   ├── signup/         # Signup page
│   └── ...             # Other pages
├── store/              # Redux store configuration
├── utils/              # Utility functions
└── assets/             # Images and media files
```

## 🌐 Live Demo

Visit the live application:(https://moviezz-ui.vercel.app/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data
- [Firebase](https://firebase.google.com/) for authentication
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons

## 📞 Contact

If you have any questions or suggestions, feel free to reach out!

---

Made with ❤️ by [Your Name]
