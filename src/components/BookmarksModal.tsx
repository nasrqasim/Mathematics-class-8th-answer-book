import React from 'react';
import { Question } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { X, Bookmark, Trash2, ArrowUpRight } from 'lucide-react';

interface BookmarksModalProps {
  bookmarkedQuestions: Question[];
  onSelectQuestion: (question: Question) => void;
  onRemoveBookmark: (questionId: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  bookmarkedQuestions,
  onSelectQuestion,
  onRemoveBookmark,
  onClearAll,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-600 rounded-xl">
              <Bookmark className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
                Revision Bookmarks ({bookmarkedQuestions.length})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Saved tricky questions for quick exam preparation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {bookmarkedQuestions.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium px-2.5 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-3">
          {bookmarkedQuestions.length === 0 ? (
            <div className="text-center py-12 space-y-3 text-slate-400">
              <Bookmark className="w-12 h-12 mx-auto stroke-1 opacity-50" />
              <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                No bookmarked questions yet
              </div>
              <p className="text-xs max-w-xs mx-auto text-slate-400">
                Click the "Bookmark" icon on any question to save it here for quick revision before exams!
              </p>
            </div>
          ) : (
            bookmarkedQuestions.map((q) => (
              <div
                key={q.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-blue-400 transition-colors flex items-start justify-between gap-4 group"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onSelectQuestion(q);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    <span>Unit {q.chapterNumber}: {q.chapterTitle}</span>
                    <span>·</span>
                    <span>{q.exerciseTitle}</span>
                    <span>·</span>
                    <span>{q.questionNumber}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2">
                    <MathRenderer content={q.statement} />
                  </div>
                  <div className="mt-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    Ans: <MathRenderer content={q.finalAnswer} />
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <button
                    onClick={() => {
                      onSelectQuestion(q);
                      onClose();
                    }}
                    className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg cursor-pointer"
                    title="Open Question"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(q.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg cursor-pointer"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
