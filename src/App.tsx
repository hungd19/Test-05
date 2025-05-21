import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import UserProfile from "./components/UserProfile.tsx";
import NftDetails from "./components/NftDetails.tsx";
import ViewNftList from "./components/ViewNftList.tsx";
import NewPage from "./components/NewPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home-page" />}
        />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/nft-details/[slug]" element={<NftDetails />} />
        <Route path="/view-nft-list" element={<ViewNftList />} />
        <Route path="/new-page" element={<NewPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
