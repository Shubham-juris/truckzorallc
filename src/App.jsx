import React from "react";
import Navbar from "./common/Navbar";
import RoutesPage from "./routes/RoutesPage";
import Footer from "./common/Footer";

const App = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
          {/* Pages */}
          <div className="flex-grow">
            <RoutesPage />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
