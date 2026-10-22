import React, { useState, useEffect } from 'react';
import { allChapters, allQuestions, findQuestionById } from './data';
import { Question, Chapter } from './types/math';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { QuestionView } from './components/QuestionView';
import { SearchModal } from './components/SearchModal';
import { FormulasModal } from './components/FormulasModal';
import { GlossaryModal } from './components/GlossaryModal';
import { BookmarksModal } from './components/BookmarksModal';
import { InteractiveSolver } from './components/InteractiveSolver';
import { InstallModal } from './components/InstallModal';
import { HomePage } from './components/HomePage';
import {
  BookOpen,
  CheckCircle2,
  Phone,
  User,
  GraduationCap,
  Layers,
  ChevronRight,
  Calculator,
  Search,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isHomeView, setIsHomeView] = useState<boolean>(true);
  const [currentChapter, setCurrentChapter] = useState<Chapter>(allChapters[0]);
  const [currentExercise, setCurrentExercise] = useState(allChapters[0].exercises[0]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    allChapters[0].exercises[0].questions[0]
  );

  const [activeModal, setActiveModal] = useState<
    'search' | 'formulas' | 'glossary' | 'bookmarks' | 'workbench' | 'install' | null
  >(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // PWA Install prompt state
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true
      );
    }
    return false;
  });

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Bookmarks state with localStorage persistence
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('btbb_math8_bookmarks');
      return saved ? JSON.parse(saved) : ['ex-1-1-q1', 'ex-3-1-q7', 'ex-10-1-q3'];
    } catch {
      return ['ex-1-1-q1', 'ex-3-1-q7'];
    }
  });

  // Dark mode state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('btbb_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('btbb_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('btbb_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem('btbb_math8_bookmarks', JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  const toggleBookmark = (qId: string) => {
    setBookmarks((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleSelectQuestion = (q: Question) => {
    const parentChap = allChapters.find((c) => c.id === q.chapterId) || allChapters[0];
    const parentEx = parentChap.exercises.find((e) => e.number === q.exerciseId) || parentChap.exercises[0];
    setCurrentChapter(parentChap);
    setCurrentExercise(parentEx);
    setCurrentQuestion(q);
    setIsHomeView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (chapterId: number) => {
    const found = allChapters.find((c) => c.id === chapterId);
    if (found) {
      setCurrentChapter(found);
      const ex = found.exercises[0];
      setCurrentExercise(ex);
      if (ex && ex.questions.length > 0) {
        setCurrentQuestion(ex.questions[0]);
      }
      setIsHomeView(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Current questions list for linear navigation
  const currentQuestionsList = currentExercise.questions;
  const currentQIndex = currentQuestionsList.findIndex((q) => q.id === currentQuestion.id);
  const hasPrev = currentQIndex > 0;
  const hasNext = currentQIndex < currentQuestionsList.length - 1;

  const handlePrevQuestion = () => {
    if (hasPrev) {
      setCurrentQuestion(currentQuestionsList[currentQIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextQuestion = () => {
    if (hasNext) {
      setCurrentQuestion(currentQuestionsList[currentQIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Get bookmarked question objects
  const bookmarkedQuestionObjects = bookmarks
    .map((id) => findQuestionById(id))
    .filter((q): q is Question => q !== undefined);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Top Bar Header */}
      <Header
        onOpenHome={() => setIsHomeView(true)}
        isHomeActive={isHomeView}
        onOpenSearch={() => setActiveModal('search')}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenFormulas={() => setActiveModal('formulas')}
        onOpenWorkbench={() => setActiveModal('workbench')}
        onOpenGlossary={() => setActiveModal('glossary')}
        onOpenBookmarks={() => setActiveModal('bookmarks')}
        onOpenInstall={() => setActiveModal('install')}
        bookmarksCount={bookmarks.length}
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
      />

      <div className="flex-1 flex">
        {/* Navigation Sidebar Drawer */}
        <Sidebar
          chapters={allChapters}
          currentChapterId={currentChapter.id}
          currentExerciseId={currentExercise.id}
          currentQuestionId={currentQuestion.id}
          onSelectQuestion={handleSelectQuestion}
          onSelectChapter={handleSelectChapter}
          bookmarksCount={bookmarks.length}
          onOpenBookmarks={() => setActiveModal('bookmarks')}
          onOpenFormulas={() => setActiveModal('formulas')}
          onOpenGlossary={() => setActiveModal('glossary')}
          onOpenWorkbench={() => setActiveModal('workbench')}
          onOpenInstall={() => setActiveModal('install')}
          onOpenHome={() => setIsHomeView(true)}
          isHomeActive={isHomeView}
          isDark={isDark}
          onToggleDark={() => setIsDark((prev) => !prev)}
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content Viewport */}
        <main className="flex-1 lg:pl-80 flex flex-col min-w-0">
          {isHomeView ? (
            <HomePage
              chapters={allChapters}
              onSelectChapter={(chapId) => {
                handleSelectChapter(chapId);
                setIsHomeView(false);
              }}
              onOpenSearch={() => setActiveModal('search')}
              onOpenInstall={() => setActiveModal('install')}
              onOpenWorkbench={() => setActiveModal('workbench')}
              onOpenFormulas={() => setActiveModal('formulas')}
              onSelectQuestion={(q) => {
                handleSelectQuestion(q);
                setIsHomeView(false);
              }}
            />
          ) : (
            <div className="max-w-5xl w-full mx-auto p-3 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 min-w-0">
              {/* Textbook Banner & Curriculum Notice */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md flex flex-wrap items-center justify-between gap-3 sm:gap-4 min-w-0">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span className="truncate">Balochistan Textbook Board, Quetta · SNC 2022-23</span>
                  </div>
                  <h2 className="text-base sm:text-xl font-bold leading-tight">
                    Grade 8 Mathematics — Official Digital Keybook
                  </h2>
                  <p className="text-xs text-slate-300 mt-0.5">
                    100% verified step-by-step solutions with LaTeX equations and answer keys
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveModal('search')}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5" /> Quick Search
                  </button>
                  <button
                    onClick={() => setActiveModal('workbench')}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5" /> Tools
                  </button>
                </div>
              </div>

              {/* Exercise Question Selector Strip */}
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs min-w-0 overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2 px-1 min-w-0">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">
                    {currentExercise.title}: Questions List
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono shrink-0">
                    Question {currentQIndex + 1} of {currentQuestionsList.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {currentQuestionsList.map((q, idx) => {
                    const isSelected = q.id === currentQuestion.id;
                    const isSaved = bookmarks.includes(q.id);
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestion(q)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        <span>{q.questionNumber.replace('Question ', 'Q')}</span>
                        {isSaved && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question Detail View */}
              <QuestionView
                question={currentQuestion}
                isBookmarked={bookmarks.includes(currentQuestion.id)}
                onToggleBookmark={toggleBookmark}
                onPrevQuestion={handlePrevQuestion}
                onNextQuestion={handleNextQuestion}
                hasPrev={hasPrev}
                hasNext={hasNext}
              />

              {/* Interactive Math Workbench Accordion Section */}
              <div className="mt-8">
                <InteractiveSolver />
              </div>

              {/* Dedicated Developer & Author Attribution Footer */}
              <footer className="mt-12 pt-8 pb-12 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 space-y-4">
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    Based on the Balochistan Textbook Board, Quetta
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Single National Curriculum (SNC) 2022–23
                  </div>
                  <div className="pt-1 text-slate-700 dark:text-slate-300">
                    <span className="font-medium">Prepared and Compiled by:</span> NasrQasim Roonjha
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-mono">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Contact: +92 315 2914836</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed pt-1">
                    This keybook provides solutions to the Grade 8 Mathematics textbook exercises, prepared to support students, teachers, and educational professionals. The solutions have been carefully reviewed and cross-checked against the official answer key (pages 220–252) to promote accuracy and reliability.
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    Developed for educational and academic reference purposes.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
                  <a
                    href="https://roonjha-developer.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    <span>Designed and Developed by Roonjha Developers</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setIsHomeView(true)}
                    className="text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                  >
                    Back to Keybook Home & Overview →
                  </button>
                </div>
              </footer>
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {activeModal === 'search' && (
        <SearchModal
          onSelectQuestion={handleSelectQuestion}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'formulas' && (
        <FormulasModal
          chapters={allChapters}
          onClose={() => setActiveModal(null)}
          onSelectChapter={handleSelectChapter}
        />
      )}

      {activeModal === 'glossary' && (
        <GlossaryModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'bookmarks' && (
        <BookmarksModal
          bookmarkedQuestions={bookmarkedQuestionObjects}
          onSelectQuestion={handleSelectQuestion}
          onRemoveBookmark={toggleBookmark}
          onClearAll={() => setBookmarks([])}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'workbench' && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <InteractiveSolver />
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'install' && (
        <InstallModal
          onClose={() => setActiveModal(null)}
          deferredPrompt={deferredPrompt}
          isInstalled={isInstalled}
          onInstallSuccess={() => setIsInstalled(true)}
        />
      )}
    </div>
  );
}
