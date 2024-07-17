import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Today from "./pages/Today"
import Astronaut from "./pages/Astronaut"
import Jindam from "./pages/Jindam"
import MonthJin from "./pages/MonthJin"
import Fancam from "./pages/Fancam"
import Channel from "./pages/Channel"
import Video from "./pages/Video"
import Search from "./pages/Search"
import Not from "./pages/Not"
import Header from "./components/section/Header"
import Main from "./components/section/Main"
import Footer from "./components/section/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route pate="/" element={<Home />}></Route>
          <Route pate="/today" element={<Today />}></Route>
          <Route pate="/astronaut" element={<Astronaut />}></Route>
          <Route pate="/jindam" element={<Jindam />}></Route>
          <Route pate="/monthJin" element={<MonthJin />}></Route>
          <Route pate="/fancam" element={<Fancam />}></Route>
          <Route pate="/channel/:channelID" element={<Channel />}></Route>
          <Route pate="/video/:videoID" element={<Video />}></Route>
          <Route pate="/search/:searchID" element={<Search />}></Route>
          <Route pate="/*" element={<Not />}></Route>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
