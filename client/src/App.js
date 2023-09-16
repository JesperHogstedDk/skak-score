import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import AddEditNote from "./pages/result/AddEditNote";
import NoteList from "./pages/result/NoteList";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Results from "./pages/result/Results";
import ResultNew from "./pages/result/ResultNew";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SkakList from './pages/result/SkakList';

import './App.css';

function App() {
  return (
      <div className="App">
          <BrowserRouter basename={"/skak-score"}>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="results" element={<Results />} />
                      <Route path="result-new" element={<ResultNew />} />
                      <Route path="result-new/:skakId" element={<ResultNew />} />
                      <Route path="/skak-list" element={<SkakList />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="/note-list" element={<NoteList />} />
                      <Route path="/edit-note" element={<AddEditNote />} />
                      <Route path="/edit-note/:noteId" element={<AddEditNote />} />

                      <Route path="*" element={<NoPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>


  );
}

export default App;
