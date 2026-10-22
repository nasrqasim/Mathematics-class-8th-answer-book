import React, { useState } from 'react';
import { Chapter, Question } from '../types/math';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Bookmark,
  Layers,
  FileText,
  HelpCircle,
  Hash,
  Download,
  Home,
  ExternalLink,
  ShieldCheck,
  X,
  Sun,
  Moon
} from 'lucide-react';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterId: number;
  currentExerciseId: string;
  currentQuestionId: string;
  onSelectQuestion: (question: Question) => void;
  onSelectChapter: (chapterId: number) => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
  onOpenFormulas: () => void;
  onOpenGlossary: () => void;
  onOpenWorkbench: () => void;
  onOpenInstall?: () => void;
  onOpenHome?: () => void;
  isHomeActive?: boolean;
  isDark?: boolean;
  onToggleDark?: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  currentChapterId,
  currentExerciseId,
  currentQuestionId,
  onSelectQuestion,
  onSelectChapter,
  bookmarksCount,
  onOpenBookmarks,
  onOpenFormulas,
  onOpenGlossary,
  onOpenWorkbench,
  onOpenInstall,
  onOpenHome,
  isHomeActive,
  isDark,
  onToggleDark,
  isOpenMobile,
  onCloseMobile
}) => {
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({
    [currentChapterId]: true
  });
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({
    [currentExerciseId]: true
  });

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const toggleExercise = (exerciseId: string) => {
    setExpandedExercises((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand / Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/favicon-64.png" alt="Class 8 Math Keybook" className="w-9 h-9 rounded-xl object-contain shadow-xs shrink-0" />
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100 leading-tight">
                Class 8 Math Keybook
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Balochistan Textbook Board
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {onToggleDark && (
              <button
                onClick={onToggleDark}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>
            )}
            <button
              onClick={onCloseMobile}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 lg:hidden cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Tools Navigation */}
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 grid grid-cols-4 gap-1 text-[11px]">
          <button
            onClick={() => {
              onOpenWorkbench();
              onCloseMobile();
            }}
            className="p-2 flex flex-col items-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
            title="Interactive Math Tools"
          >
            <Layers className="w-4 h-4 text-blue-600 mb-1" />
            <span>Tools</span>
          </button>
          <button
            onClick={() => {
              onOpenFormulas();
              onCloseMobile();
            }}
            className="p-2 flex flex-col items-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
            title="Key Formulas"
          >
            <FileText className="w-4 h-4 text-emerald-600 mb-1" />
            <span>Formulas</span>
          </button>
          <button
            onClick={() => {
              onOpenBookmarks();
              onCloseMobile();
            }}
            className="p-2 flex flex-col items-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer relative"
            title="Saved Revision Questions"
          >
            <Bookmark className="w-4 h-4 text-amber-500 mb-1" />
            <span>Saved ({bookmarksCount})</span>
          </button>
          <button
            onClick={() => {
              onOpenGlossary();
              onCloseMobile();
            }}
            className="p-2 flex flex-col items-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
            title="Index & Glossary"
          >
            <HelpCircle className="w-4 h-4 text-purple-600 mb-1" />
            <span>Glossary</span>
          </button>
        </div>

        {/* Home & Install App Buttons */}
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 space-y-2">
          {onOpenHome && (
            <button
              onClick={() => {
                onOpenHome();
                onCloseMobile();
              }}
              className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs ${
                isHomeActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home Overview</span>
            </button>
          )}

          {onOpenInstall && (
            <button
              onClick={() => {
                onOpenInstall();
                onCloseMobile();
              }}
              className="w-full py-2 px-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Install App</span>
            </button>
          )}
        </div>

        {/* Hierarchical Chapters & Exercises List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Textbook Chapters & Exercises
          </div>

          {chapters.map((chapter) => {
            const isChapterOpen = !!expandedChapters[chapter.id];
            const isCurrentChapter = chapter.id === currentChapterId;

            return (
              <div key={chapter.id} className="rounded-xl overflow-hidden">
                {/* Chapter Row */}
                <button
                  onClick={() => {
                    toggleChapter(chapter.id);
                    onSelectChapter(chapter.id);
                  }}
                  className={`w-full px-2.5 py-2 flex items-center justify-between text-left rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isCurrentChapter
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px] font-mono shrink-0">
                      {chapter.number}
                    </span>
                    <span className="truncate">{chapter.title}</span>
                  </div>
                  {isChapterOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  )}
                </button>

                {/* Sub-navigation: Exercises & Questions */}
                {isChapterOpen && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-slate-200 dark:border-slate-800 ml-4 my-1">
                    {chapter.exercises.map((exercise) => {
                      const isExerciseOpen = !!expandedExercises[exercise.id];
                      const isCurrentEx = exercise.id === currentExerciseId;

                      return (
                        <div key={exercise.id}>
                          <button
                            onClick={() => toggleExercise(exercise.id)}
                            className={`w-full px-2 py-1.5 flex items-center justify-between text-left rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                              isCurrentEx
                                ? 'bg-slate-200/60 dark:bg-slate-800 font-bold text-slate-900 dark:text-slate-100'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                            }`}
                          >
                            <span className="truncate">{exercise.title}</span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {exercise.questions.length}Q
                            </span>
                          </button>

                          {/* Quick Jump List for Questions */}
                          {isExerciseOpen && (
                            <div className="grid grid-cols-3 gap-1 py-1.5 pl-1">
                              {exercise.questions.map((q) => {
                                const isSelectedQ = q.id === currentQuestionId;
                                return (
                                  <button
                                    key={q.id}
                                    onClick={() => {
                                      onSelectQuestion(q);
                                      onCloseMobile();
                                    }}
                                    className={`px-2 py-1 text-[11px] font-mono rounded text-center transition-colors truncate cursor-pointer ${
                                      isSelectedQ
                                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                    title={`${q.questionNumber}: ${q.topic}`}
                                  >
                                    {q.questionNumber.replace('Question ', 'Q')}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info & official attribution */}
        <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
          <div className="font-bold text-slate-800 dark:text-slate-200 leading-tight">
            Based on the Balochistan Textbook Board, Quetta<br />
            Single National Curriculum (SNC) 2022–23
          </div>
          <div>
            <strong>Prepared and Compiled by:</strong> NasrQasim Roonjha<br />
            <strong>Contact:</strong> +92 315 2914836
          </div>
          <p className="line-clamp-3 hover:line-clamp-none transition-all">
            This keybook provides solutions to the Grade 8 Mathematics textbook exercises, prepared to support students, teachers, and educational professionals.
          </p>
          <p className="line-clamp-3 hover:line-clamp-none transition-all">
            The solutions have been carefully reviewed and cross-checked against the official answer key (pages 220–252) to promote accuracy and reliability.
          </p>
          <div className="font-semibold text-slate-500 dark:text-slate-400">
            Developed for educational and academic reference purposes.
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px]">
            Designed and Developed by{' '}
            <a
              href="https://roonjha-developer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
            >
              <span>Roonjha Developers</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
