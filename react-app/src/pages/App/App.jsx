import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import GroupsTest from "../GroupsTest/GroupsTest";
import AuthPage from "../AuthPage/AuthPage";
import ScrollToTop from "./ScrollToTop";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import GenericErrorPage from "../GenericErrorPage/GenericErrorPage";
import RestaurantIndexPage from "../RestaurantIndexPage/RestaurantIndexPage";
import { UserProvider } from "../../hooks/userContext";
import FoodsTestPage from "../FoodsTestPage/FoodsTestPage";
import ChangeNamePage from "../ChangeNamePage/ChangeNamePage";
import RestaurantDetailsPage from "../RestaurantDetailsPage/RestaurantDetailsPage"

function App() {
  // const [user, setUser] = useState();
  
  return (
    <UserProvider>
      <main className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/groups" element={<GroupsTest />} />
          <Route path="/foods" element={<FoodsTestPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/restaurants" element={<RestaurantIndexPage />} />
          <Route path="/change-name" element={<ChangeNamePage />} />
          <Route path="/restaurants/details" element={<RestaurantDetailsPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route
            path="/error"
            element={
              <GenericErrorPage message="An unexpected error occurred." />
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </UserProvider>
  );
}

export default App;
