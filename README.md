# 🎧 Spotify — Full-Stack Music & Social Experience

> **A premium, real-time music streaming platform** engineered with the modern MERN stack, featuring seamless synchronization, an administrative nerve center, and a state-of-the-art user interface.

![Spotify App Preview](https://res.cloudinary.com/dytxhpcai/image/upload/v1740470300/spotify_preview.png)

## ✨ Key Features

### 🎵 Music Playback
- **Real-Time Playback**: Seamless music streaming with interactive player controls.
- **Dynamic Queuing**: Intelligent queue management with shuffle and repeat modes.
- **Search & Discovery**: Find your favorite songs, artists, and albums instantly.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

### 🔐 Authentication & Security
- **Clerk Integration**: Secure user authentication and profile management.
- **Protected Routes**: Granular access control for users and administrators.

### 🛠 Administrative Dashboard
- **Content Management**: Effortlessly upload and manage songs and albums.
- **Statistics**: Real-time analytics on total users, songs, albums, and artists.
- **Media Storage**: High-performance image and audio hosting via **Cloudinary**.

### ⚡ Real-Time Features
- **Live Updates**: Synchronized state across clients using **Socket.io**.
- **Interactive Chat**: Connect with other listeners in real-time.

## 🛠 Tech Stack

### Frontend
- **Framework**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/)
- **Networking**: [Axios](https://axios-http.com/) & [Socket.io-client](https://socket.io/docs/v4/client-api/)
- **Authentication**: [Clerk](https://clerk.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Real-time**: [Socket.io](https://socket.io/)
- **Media**: [Cloudinary](https://cloudinary.com/)
- **Auth**: [@clerk/express](https://clerk.com/docs/references/nodejs/clerk-express)

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Cloudinary account
- Clerk account

### 1. Clone the Repository
```bash
git clone https://github.com/Kunall7890/Real_Time_Spotify_Clone.git
cd Real_Time_Spotify_Clone
```

### 2. Environment Configuration

#### Backend (`/backend/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=your_admin_email
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

#### Frontend (`/frontend/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
```

### 3. Installation
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Seed the Database
```bash
cd ../backend
npm run seed:albums
npm run seed:songs
```

### 5. Run the Application
```bash
# Start backend (from /backend)
npm run dev

# Start frontend (from /frontend)
npm run dev
```

## 🌐 Deployment

The project is configured for easy deployment on **Vercel**. 

- **Backend**: Deployed as Serverless Functions.
- **Frontend**: Deployed as a Static Site with Vite.

Make sure to set all environment variables in your Vercel project settings.

## 📄 License

This project is licensed under the ISC License.

---
Built with ❤️ by [Kunal](https://github.com/Kunall7890)