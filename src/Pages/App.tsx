import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Cat from "./Cat";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800">
          {/* Menu padrão */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/"
                    >
                      Home
                    </Link>

                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/about"
                    >
                      About
                    </Link>
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/cats"
                    >
                      Cats
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu para telas pequenas */}
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/about"
              >
                About
              </Link>
              <Link
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/cats"
              >
                Cats
              </Link>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Exemplo Router / Axios / ReactQuery / Tailwind
            </h1>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Switch>
              <Route path="/cats">
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <Cat />
                  </div>
                </div>
              </Route>
              <Route path="/about">
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <About />
                  </div>
                </div>
              </Route>
              <Route path="/">
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <Home />
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
