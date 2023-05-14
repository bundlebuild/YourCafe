import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
          />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
