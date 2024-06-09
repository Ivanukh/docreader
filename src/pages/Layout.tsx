import { Outlet } from "react-router-dom";
import TobBar from "../comonents/TopBar";
import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";
import Footer from "../comonents/Footer";
import LoaderContext from "../context/LoaderContext";

const Layout = () => {
  const settings = useContext(SettingsContext)
  const loaderContext = useContext(LoaderContext)
  return (
    <div className="layout">
      <TobBar title={settings.title} isLoading={loaderContext?.isLoading()} books={settings.books} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;