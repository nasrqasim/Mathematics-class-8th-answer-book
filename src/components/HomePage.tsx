import React, { useState } from 'react';
import { Chapter, Question } from '../types/math';
import {
  BookOpen,
  GraduationCap,
  Download,
  Smartphone,
  Monitor,
  CheckCircle2,
  Mail,
  Phone,
  User,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Calculator,
  Search,
  Bookmark,
  FileText,
  AlertCircle
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface HomePageProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: number) => void;
  onOpenSearch: () => void;
  onOpenInstall: () => void;
  onOpenWorkbench: () => void;
  onOpenFormulas: () => void;
  onSelectQuestion: (question: Question) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  chapters,
  onSelectChapter,
  onOpenSearch,
  onOpenInstall,
  onOpenWorkbench,
  onOpenFormulas,
  onSelectQuestion
}) => {
  const [formState, handleFormSubmit] = useForm('mgaobgwv');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const totalQuestions = chapters.reduce(
    (acc, c) => acc + c.exercises.reduce((exAcc, ex) => exAcc + ex.questions.length, 0),
    0
  );

  const handleDownloadShortcut = () => {
    const currentUrl = window.location.origin + window.location.pathname;
    const shortcutContent = `[InternetShortcut]\r\nURL=${currentUrl}\r\nIconIndex=0\r\nIconFile=${currentUrl}favicon.svg\r\n`;
    const blob = new Blob([shortcutContent], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Grade-8-Mathematics-Keybook.url';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotice('Desktop shortcut (.url) downloaded! Place it on your desktop for 1-click launch.');
    setTimeout(() => setDownloadNotice(null), 5000);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white p-4 sm:p-8 md:p-10 shadow-xl border border-blue-800/30">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Balochistan Textbook Board, Quetta · SNC 2022–23</span>
          </div>

          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Grade 8 Mathematics Official Digital Keybook
          </h1>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            Complete, authentic, step-by-step solutions for all <span className="text-amber-400 font-bold">{totalQuestions} questions</span> across all 13 textbook chapters. Formatted in clear LaTeX mathematical notation and verified against the official textbook answer key.
          </p>

          {/* Quick Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => onSelectChapter(1)}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse Chapter Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenInstall}
              className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Install App</span>
            </button>

            <button
              onClick={handleDownloadShortcut}
              className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span>Download Desktop Shortcut</span>
            </button>
          </div>

          {downloadNotice && (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{downloadNotice}</span>
            </div>
          )}
        </div>
      </section>

      {/* Official Keybook Information Card */}
      <section className="p-4 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              About This Keybook
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Curriculum accreditation, authorship, and editorial verification
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="space-y-1 border-b border-slate-200 dark:border-slate-700 pb-3">
            <div className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Based on the Balochistan Textbook Board, Quetta
            </div>
            <div className="font-medium text-blue-600 dark:text-blue-400">
              Single National Curriculum (SNC) 2022–23
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-slate-500 shrink-0" />
              <span><strong>Prepared and Compiled by:</strong> NasrQasim Roonjha</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-500 shrink-0" />
              <span><strong>Contact:</strong> <a href="tel:+923152914836" className="text-blue-600 dark:text-blue-400 font-mono hover:underline">+92 315 2914836</a></span>
            </div>
          </div>

          <p>
            This keybook provides solutions to the Grade 8 Mathematics textbook exercises, prepared to support students, teachers, and educational professionals.
          </p>

          <p>
            The solutions have been carefully reviewed and cross-checked against the official answer key (pages 220–252) to promote accuracy and reliability.
          </p>

          <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Developed for educational and academic reference purposes.</span>
          </div>
        </div>
      </section>

      {/* Chapters Catalog Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              Textbook Units & Exercises
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Jump straight to any unit to study solved questions
            </p>
          </div>
          <button
            onClick={onOpenSearch}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search all questions</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chap) => {
            const qCount = chap.exercises.reduce((acc, ex) => acc + ex.questions.length, 0);
            return (
              <div
                key={chap.id}
                onClick={() => onSelectChapter(chap.id)}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      Unit {chap.number}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {qCount} Questions
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {chap.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {chap.summary}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span>{chap.exercises.length} {chap.exercises.length === 1 ? 'Exercise' : 'Exercises'}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Solutions <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to Download & Use It */}
      <section className="p-4 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-600" />
            <span>Download and Use It Anywhere</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Install this keybook directly to your phone, tablet, or PC for fast 1-click access even without memorizing web links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-900 dark:text-slate-100">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>Android Phones & Tablets</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              In Google Chrome, tap <strong>Menu (⋮)</strong> &gt; tap <strong>Install App</strong> or <strong>Add to Home screen</strong>. The math keybook icon will be placed directly on your apps screen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-900 dark:text-slate-100">
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Apple iPhone & iPad (Safari)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              In Safari, tap the <strong>Share</strong> button &gt; scroll down and choose <strong>Add to Home Screen</strong> &gt; tap <strong>Add</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-900 dark:text-slate-100">
              <Monitor className="w-4 h-4 text-indigo-600" />
              <span>Windows, Mac & Chromebooks</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Click the <strong>Install</strong> icon in Chrome/Edge URL bar or download the 1-click <code>.url</code> desktop shortcut below.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onOpenInstall}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Install App on this Device</span>
          </button>
          <button
            onClick={handleDownloadShortcut}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Monitor className="w-4 h-4 text-blue-600" />
            <span>Download Desktop Shortcut (.url)</span>
          </button>
        </div>
      </section>

      {/* User Feedback Section (Formspree Integration) */}
      <section id="feedback-section" className="p-4 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              Send Your Feedback or Suggestions
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Have a question, noticed a typo, or want to suggest an improvement? We would love to hear from students and teachers!
            </p>
          </div>
        </div>

        {formState.succeeded ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
            <h3 className="font-bold text-base text-emerald-800 dark:text-emerald-200">
              Thank You! Your Feedback Has Been Received
            </h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
              Your message has been directly sent to compiler NasrQasim Roonjha. We appreciate your contribution to making this keybook better!
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ahmed Ali"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-[11px] text-rose-500" />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-[11px] text-rose-500" />
              </div>
            </div>

            {/* Contact Number (Optional) */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                Contact Number <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. +92 300 1234567"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
                />
              </div>
              <ValidationError prefix="Phone" field="phone" errors={formState.errors} className="text-[11px] text-rose-500" />
            </div>

            {/* Feedback Message */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                Feedback / Query / Suggestions <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Write your feedback, question suggestions, or corrections here..."
                className="w-full p-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-[11px] text-rose-500" />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={formState.submitting}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{formState.submitting ? 'Sending Feedback...' : 'Submit Feedback'}</span>
            </button>
          </form>
        )}
      </section>

      {/* Privacy Policy & Academic Reference Disclaimer */}
      <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-3">
        <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Educational Disclaimer & Privacy Policy</span>
        </div>
        <p>
          <strong>Academic & Educational Reference:</strong> This keybook and digital learning tool is developed strictly for educational, learning, and academic reference purposes in accordance with the Single National Curriculum (SNC) 2022–23 established by the Balochistan Textbook Board, Quetta. All textbook problems are the intellectual property of the respective curriculum authorities.
        </p>
        <p>
          <strong>Privacy Commitment:</strong> We respect your privacy. No personal data, tracking cookies, or browsing history are stored or sold to third parties. Any details submitted via the feedback form are used exclusively by compiler NasrQasim Roonjha to respond to user inquiries and enhance mathematical accuracy.
        </p>
      </section>

      {/* Developer Attribution Footer */}
      <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="text-center sm:text-left">
          <span>Designed and Developed by </span>
          <a
            href="https://roonjha-developer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Roonjha Developers</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="text-center sm:text-right font-mono text-[11px]">
          Compiled by NasrQasim Roonjha (+92 315 2914836)
        </div>
      </footer>
    </div>
  );
};
