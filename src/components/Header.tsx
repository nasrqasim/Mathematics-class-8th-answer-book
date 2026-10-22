import React from 'react';
import { Search, Sun, Moon, Menu, Bookmark, Download, Home } from 'lucide-react';

interface HeaderProps {
  onOpenHome?: () => void;
  isHomeActive?: boolean;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onOpenFormulas: () => void;
  onOpenWorkbench: () => void;
  onOpenGlossary: () => void;
  onOpenBookmarks: () => void;
  onOpenInstall: () => void;
  bookmarksCount: number;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHome,
  isHomeActive,
  onOpenSearch,
  onOpenMobileMenu,
  onOpenFormulas,
  onOpenWorkbench,
  onOpenGlossary,
  onOpenBookmarks,
  onOpenInstall,
  bookmarksCount,
  isDark,
  onToggleDark
}) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-2.5 sm:px-6 flex items-center justify-between gap-1.5 sm:gap-4 lg:gap-8 max-w-full">
      {/* Zone 1: Brand title, flexible with ellipsis/short mobile text */}
      <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1">
        <button
          onClick={onOpenMobileMenu}
          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden cursor-pointer shrink-0"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <button
          onClick={onOpenHome}
          className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer overflow-hidden"
          title="Go to Home Overview"
        >
          <img src="/favicon-64.png" alt="Math 8 Keybook Icon" className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg object-contain shadow-xs shrink-0" />
          <span className="font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-sm sm:text-base lg:text-lg truncate">
            <span className="inline sm:hidden">Math 8 Keybook</span>
            <span className="hidden sm:inline">Grade 8 Mathematics Keybook</span>
          </span>
        </button>
      </div>

      {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
      <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
        <button
          onClick={onOpenHome}
          className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 ${
            isHomeActive ? 'text-blue-600 dark:text-blue-400 font-bold' : ''
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <button
          onClick={onOpenWorkbench}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Workbench
        </button>
        <button
          onClick={onOpenFormulas}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Formulas
        </button>
        <button
          onClick={onOpenGlossary}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Glossary
        </button>
        <button
          onClick={onOpenBookmarks}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
        >
          <span>Bookmarks</span>
          {bookmarksCount > 0 && (
            <span className="text-[10px] font-mono font-bold bg-amber-500 text-white rounded-full px-1.5 py-0.2">
              {bookmarksCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenInstall}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer text-blue-600 dark:text-blue-400 font-semibold"
          title="Install App or Add Shortcut"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install App</span>
        </button>
      </nav>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        <button
          onClick={onOpenInstall}
          className="p-1.5 sm:px-3 sm:py-2 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          title="Install App"
          aria-label="Install App"
        >
          <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="hidden sm:inline">Install App</span>
        </button>

        <button
          onClick={onToggleDark}
          className="p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>

        <button
          onClick={onOpenSearch}
          className="p-1.5 sm:px-3 sm:py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          title="Search questions"
          aria-label="Search questions"
        >
          <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </header>
  );
};
