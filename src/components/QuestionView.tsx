import React, { useState } from 'react';
import { Question } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { MathDiagram } from './MathDiagram';
import {
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  BookOpen,
  Info
} from 'lucide-react';

interface QuestionViewProps {
  question: Question;
  isBookmarked: boolean;
  onToggleBookmark: (qId: string) => void;
  onPrevQuestion?: () => void;
  onNextQuestion?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  isBookmarked,
  onToggleBookmark,
  onPrevQuestion,
  onNextQuestion,
  hasPrev,
  hasNext
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopySolution = () => {
    let text = `${question.chapterTitle} | ${question.exerciseTitle} | ${question.questionNumber}\n`;
    text += `Topic: ${question.topic}\n\n`;
    text += `QUESTION STATEMENT:\n${question.statement}\n\n`;
    if (question.given) text += `GIVEN:\n${question.given}\n\n`;
    if (question.formula) text += `FORMULA:\n${question.formula}\n\n`;
    if (question.workingSteps) {
      text += `STEP-BY-STEP SOLUTION:\n${question.workingSteps.join('\n')}\n\n`;
    }
    if (question.subQuestions) {
      question.subQuestions.forEach((sq) => {
        text += `${sq.label} ${sq.statement}:\n${sq.working.join('\n')}\nAnswer: ${sq.finalAnswer}\n\n`;
      });
    }
    text += `FINAL ANSWER:\n${question.finalAnswer}\n`;
    if (question.officialAnswer) {
      text += `Official Textbook Answer Key: ${question.officialAnswer}\n`;
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden min-w-0">
      {/* Top Header Card */}
      <div className="border-b border-slate-100 dark:border-slate-800 p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 sm:gap-4 min-w-0">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Unit {question.chapterNumber}: {question.chapterTitle}</span>
            <span aria-hidden="true">·</span>
            <span>{question.exerciseTitle}</span>
          </div>
          <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex flex-wrap items-baseline gap-1.5 sm:gap-3">
            <span className="shrink-0">{question.questionNumber}</span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 break-words">({question.topic})</span>
          </h1>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onToggleBookmark(question.id)}
            className={`p-2 sm:p-2.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
            title={isBookmarked ? 'Remove from Revision Bookmarks' : 'Bookmark for Revision'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
            <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Bookmark'}</span>
          </button>

          <button
            onClick={handleCopySolution}
            className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Copy Solution to Clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-7 space-y-5 sm:space-y-6 min-w-0">
        {/* Question Statement Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" /> Original Question Statement (Textbook):
          </div>
          <div className="text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-relaxed font-serif">
            <MathRenderer content={question.statement} />
          </div>
        </div>

        {/* Optional Visual Diagram */}
        {question.diagramType && (
          <MathDiagram type={question.diagramType} data={question.diagramData} />
        )}

        {/* Given Information */}
        {question.given && (
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Given Data:</div>
            <div className="text-sm text-slate-700 dark:text-slate-300 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
              <MathRenderer content={question.given} />
            </div>
          </div>
        )}

        {/* Formula Used */}
        {question.formula && (
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formula Used:</div>
            <div className="text-sm text-slate-900 dark:text-slate-100 p-3.5 rounded-lg bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900">
              <MathRenderer content={question.formula} />
            </div>
          </div>
        )}

        {/* Step-by-Step Working */}
        {question.workingSteps && question.workingSteps.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Step-by-Step Calculation & Working:
            </div>
            <div className="space-y-2 pl-1 border-l-2 border-blue-500/30">
              {question.workingSteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-sm text-slate-800 dark:text-slate-200">
                  <MathRenderer content={step} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-Questions breakdown (if question has (i), (ii)...) */}
        {question.subQuestions && question.subQuestions.length > 0 && (
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Detailed Part Solutions:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.subQuestions.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2"
                >
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700 pb-2">
                    <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm">{sub.label}</span>
                    <span className="text-xs font-mono text-slate-500">Part {idx + 1}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    <MathRenderer content={sub.statement} />
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    {sub.working.map((w, wIdx) => (
                      <div key={wIdx}>
                        <MathRenderer content={w} />
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700 text-xs">
                    <span className="text-slate-500 font-medium">Answer: </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100 font-mono">
                      <MathRenderer content={sub.finalAnswer} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Verified Answer Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/30 dark:border-emerald-500/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Final Answer (Mathematically Verified):</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-emerald-950 dark:text-emerald-200 font-mono">
            <MathRenderer content={question.finalAnswer} />
          </div>
          {question.officialAnswer && (
            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-emerald-500/20">
              <span className="font-semibold">Textbook Answer Key (Balochistan Board): </span>
              <span className="font-mono">{question.officialAnswer}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation Buttons */}
      <div className="border-t border-slate-100 dark:border-slate-800 p-3 sm:p-4 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between gap-2 min-w-0">
        <button
          onClick={onPrevQuestion}
          disabled={!hasPrev}
          className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shrink-0 ${
            hasPrev
              ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 cursor-pointer'
              : 'opacity-40 cursor-not-allowed text-slate-400'
          }`}
        >
          <ChevronLeft className="w-4 h-4 shrink-0" />
          <span>Previous</span>
          <span className="hidden sm:inline">Question</span>
        </button>

        <button
          onClick={onNextQuestion}
          disabled={!hasNext}
          className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shrink-0 ${
            hasNext
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm cursor-pointer'
              : 'opacity-40 cursor-not-allowed bg-slate-300 text-slate-500'
          }`}
        >
          <span>Next</span>
          <span className="hidden sm:inline">Question</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
