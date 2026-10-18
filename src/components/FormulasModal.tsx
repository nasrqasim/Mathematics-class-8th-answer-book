import React from 'react';
import { Chapter } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { X, BookOpen } from 'lucide-react';

interface FormulasModalProps {
  chapters: Chapter[];
  onClose: () => void;
  onSelectChapter?: (chapterId: number) => void;
}

export const FormulasModal: React.FC<FormulasModalProps> = ({
  chapters,
  onClose,
  onSelectChapter
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
                Grade 8 Mathematics Formulas & Key Summary
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Balochistan Textbook Board · Single National Curriculum
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-6">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-mono">
                    {ch.number}
                  </span>
                  <span>{ch.title}</span>
                </h3>
                {onSelectChapter && (
                  <button
                    onClick={() => {
                      onSelectChapter(ch.id);
                      onClose();
                    }}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
                  >
                    View Exercises &rarr;
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {ch.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {ch.keyFormulas.map((f, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1"
                  >
                    <div className="font-semibold text-slate-700 dark:text-slate-300">
                      {f.name}
                    </div>
                    <div className="font-mono text-slate-900 dark:text-slate-100 overflow-x-auto">
                      <MathRenderer content={`$$${f.formula}$$`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
