import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import TopStoriesPage from "./Pages/TopStoriesPage";
import SingleNewsDetailsPage from "./Pages/SingleNewsDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<TopStoriesPage />} />
          <Route path="/news" element={<TopStoriesPage />} />
          <Route path="/news/:id" element={<SingleNewsDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
