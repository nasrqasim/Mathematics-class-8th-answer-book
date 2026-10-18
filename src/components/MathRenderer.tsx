import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '', block = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // If whole string is wrapped in $$...$$ or block is requested
    if (block && !content.includes('$')) {
      try {
        return katex.renderToString(content, {
          displayMode: true,
          throwOnError: false,
        });
      } catch (err) {
        return `<span class="text-rose-600 font-mono">${content}</span>`;
      }
    }

    // Split string by LaTeX delimiters: $$...$$ (display) and $...$ (inline)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g;
    const parts = content.split(regex);

    return parts
      .map((part) => {
        if (!part) return '';

        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2).trim();
          try {
            return katex.renderToString(math, {
              displayMode: true,
              throwOnError: false,
            });
          } catch (e) {
            return `<div class="katex-error font-mono text-xs text-rose-500">${math}</div>`;
          }
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1).trim();
          try {
            return katex.renderToString(math, {
              displayMode: false,
              throwOnError: false,
            });
          } catch (e) {
            return `<span class="katex-error font-mono text-xs text-rose-500">${math}</span>`;
          }
        } else {
          // Plain text - convert newlines to <br/> if needed, escape basic html
          return part
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br/>');
        }
      })
      .join('');
  }, [content, block]);

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
