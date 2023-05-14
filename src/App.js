import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
import PageNotFound404 from "./components/Error404";

const App = () => (
  <BrowserRouter
  //  basename="/youtube_clone/"
  >
    <Box sx={{ backgroundColor: "#012b31" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<PageNotFound404 />}/>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
