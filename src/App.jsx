import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/layout/PageTransition";
import CursorFX from "./components/ui/CursorFX";

// Public Pages
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import ServicesPage from "./pages/public/ServicesPage";
import ServiceDetailPage from "./pages/public/ServiceDetailPage";
import SendEmailPage from "./pages/public/SendEmailPage";
import ContactPage from "./pages/public/ContactPage";

// Dashboard Pages
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  const location = useLocation();

  return (
    <>
      {/* ── Global Cursor + Interaction FX ── */}
      <CursorFX />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/services/:serviceId"
          element={
            <PageTransition>
              <ServiceDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/send_email"
          element={
            <PageTransition>
              <SendEmailPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={
            <PageTransition>
              <DashboardPage />
            </PageTransition>
          }
        />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
