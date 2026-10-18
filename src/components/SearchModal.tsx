import React, { useState } from 'react';
import { Question } from '../types/math';
import { searchQuestions } from '../data';
import { MathRenderer } from './MathRenderer';
import { Search, X, ArrowUpRight, BookOpen } from 'lucide-react';

interface SearchModalProps {
  onSelectQuestion: (question: Question) => void;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onSelectQuestion, onClose }) => {
  const [query, setQuery] = useState('');
  const results = searchQuestions(query);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden max-h-[75vh]">
        {/* Search Input bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions by formula, topic, exercise, or keyword (e.g. Pythagoras, 49x², LCM, loss %)..."
            className="w-full text-sm bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400 space-y-2">
              <BookOpen className="w-8 h-8 mx-auto opacity-40" />
              <p>Type keywords to search across all 13 Units & Exercises</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['Rational', 'Significant Figures', 'Square Root', 'Venn Diagram', 'Compound Proportion', 'Inheritance', 'Pythagoras'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching questions found for "{query}". Try another term.
            </div>
          ) : (
            results.map((q) => (
              <div
                key={q.id}
                onClick={() => {
                  onSelectQuestion(q);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40 hover:bg-blue-50/60 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-800 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>Unit {q.chapterNumber}</span>
                    <span>·</span>
                    <span>{q.exerciseTitle}</span>
                    <span>·</span>
                    <span className="font-bold">{q.questionNumber}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{q.topic}</span>
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200 line-clamp-2">
                  <MathRenderer content={q.statement} />
                </div>
                <div className="mt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                  <span>Ans: <MathRenderer content={q.finalAnswer} /></span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
