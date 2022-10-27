import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import WatchPage from "./pages/WatchPage";
import StreamPage from "./pages/StreamPage";

function App() {
  return (
    <>

    <nav className="navbar navbar-expand-sm bg-light">

      <div className="container-fluid">

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">Create</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>
        </ul>
      </div>

  </nav>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/stream/:id" element={<StreamPage />} />
    </Routes>
    </>
  );
}

export default App;
