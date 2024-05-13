import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import ArtistDetail from "./pages/ArtistDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import PlaylistDetail from "./pages/PlaylistDetail";
import PlaylistPublic from "./pages/PlaylistPublic";
import Playlists from "./pages/Playlists";
import Register from "./pages/Register";
import TrackDetail from "./pages/TrackDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlists/public/:id" element={<PlaylistPublic />} />
        {/* Private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:id" element={<PlaylistDetail />} />
          <Route path="/tracks/:id" element={<TrackDetail />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />}/> 
      </Routes>
    </>
  );
}

export default App;
