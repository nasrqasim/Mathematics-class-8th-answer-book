import { Chapter, Question } from '../types/math';
import { unit1RealNumbers } from './chapters/unit1_real_numbers';
import { unit2Approximation } from './chapters/unit2_approximation';
import { unit3Roots } from './chapters/unit3_roots';
import { unit4Sets } from './chapters/unit4_sets';
import { unit5Proportion } from './chapters/unit5_proportion';
import { unit6Financial } from './chapters/unit6_financial';
import { unit7Sequences } from './chapters/unit7_sequences';
import { unit8Algebra } from './chapters/unit8_algebra';
import { unit9Linear } from './chapters/unit9_linear';
import { unit10Mensuration } from './chapters/unit10_mensuration';
import { unit11Geometry } from './chapters/unit11_geometry';
import { unit12Information } from './chapters/unit12_information';
import { unit13Probability } from './chapters/unit13_probability';

export const allChapters: Chapter[] = [
  unit1RealNumbers,
  unit2Approximation,
  unit3Roots,
  unit4Sets,
  unit5Proportion,
  unit6Financial,
  unit7Sequences,
  unit8Algebra,
  unit9Linear,
  unit10Mensuration,
  unit11Geometry,
  unit12Information,
  unit13Probability
];

// Flat list of all questions across all chapters for fast search
export const allQuestions: Question[] = allChapters.flatMap((chapter) =>
  chapter.exercises.flatMap((exercise) => exercise.questions)
);

export function findQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

export function searchQuestions(query: string): Question[] {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();

  return allQuestions.filter((item) => {
    const matchStatement = item.statement.toLowerCase().includes(q);
    const matchTopic = item.topic.toLowerCase().includes(q);
    const matchExercise = item.exerciseTitle.toLowerCase().includes(q);
    const matchChapter = item.chapterTitle.toLowerCase().includes(q);
    const matchAnswer = item.finalAnswer.toLowerCase().includes(q);
    const matchFormula = item.formula ? item.formula.toLowerCase().includes(q) : false;
    const matchSubQ = item.subQuestions?.some(
      (sub) => sub.statement.toLowerCase().includes(q) || sub.finalAnswer.toLowerCase().includes(q)
    );

    return matchStatement || matchTopic || matchExercise || matchChapter || matchAnswer || matchFormula || matchSubQ;
  });
}
