import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Nav } from "./components/Nav"
import { Courses } from "./pages/Courses"
import { Bootcamps } from "./pages/Bootcamps"
import { Articles } from "./pages/Articles"
import { Books } from "./pages/Books"
import { Tutorials } from "./pages/Tutorials"
import { YTVideos } from "./pages/YTVideos"


function App() {

  return (
    <div className="h-screen flex flex-col">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Bootcamps" element={<Bootcamps />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Tutorials" element={<Tutorials />} />
          <Route path="/YTVideos" element={<YTVideos />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
