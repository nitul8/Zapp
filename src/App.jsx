import React from 'react';
import { Menu, Search, Bell, User, Home, Compass, Library, History, ThumbsUp, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] h-14 flex items-center justify-between px-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold">Zapp</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 bg-[#222222] border border-l-0 border-gray-700 rounded-r-full hover:bg-[#303030]">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-[#0f0f0f] border-r border-gray-800 p-2">
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800">
            <Compass className="w-6 h-6" />
            <span>Explore</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800">
            <Library className="w-6 h-6" />
            <span>Library</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800">
            <History className="w-6 h-6" />
            <span>History</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800">
            <ThumbsUp className="w-6 h-6" />
            <span>Liked Videos</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800">
            <Clock className="w-6 h-6" />
            <span>Watch Later</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-14 pl-64">
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Video Cards */}
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="bg-[#1f1f1f] rounded-lg overflow-hidden hover:bg-[#2d2d2d] transition-colors">
              <img
                src={`https://source.unsplash.com/random/800x450?technology&sig=${i}`}
                alt="Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold mb-1">Amazing Tech Video #{i}</h3>
                <p className="text-gray-400 text-sm">TechChannel</p>
                <div className="text-gray-400 text-sm">
                  <span>123K views</span>
                  <span className="mx-1">•</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;