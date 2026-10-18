import React from 'react';
import { Search, Sun, Moon, Menu, Bookmark } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onOpenFormulas: () => void;
  onOpenWorkbench: () => void;
  onOpenGlossary: () => void;
  onOpenBookmarks: () => void;
  bookmarksCount: number;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenMobileMenu,
  onOpenFormulas,
  onOpenWorkbench,
  onOpenGlossary,
  onOpenBookmarks,
  bookmarksCount,
  isDark,
  onToggleDark
}) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-8">
      {/* Zone 1: Brand title, one line */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenMobileMenu}
          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap">
          Grade 8 Mathematics Keybook
        </span>
      </div>

      {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
      <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
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
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          onClick={onToggleDark}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>

        <button
          onClick={onOpenSearch}
          className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Search Solutions</span>
        </button>
      </div>
    </header>
  );
};
