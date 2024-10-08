import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import { logo } from './assets';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] text-3xl">
        <Link to="/">
          <img src={logo} className="sm:w-[6rem] w-20 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] hover:bg-[#595de7] transition-all duration-300 text-white sm:text-[1.1rem] text-[1rem] px-4 py-1 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
