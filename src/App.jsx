import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <PageLayout>
      {/* Instead of adding the Sidebar component to every page, we can add it only once to the PageLayout component and wrap the children with it. This way, we can have a sidebar on every page except the AuthPage. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
