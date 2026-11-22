'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CompetitionResult } from '@/types/content';

interface CompetitionResultRowProps {
  competition: CompetitionResult;
}

export function CompetitionResultRow({ competition }: CompetitionResultRowProps) {
  const { t } = useLanguage();

  return (
    <div className="font-sans">
      <div className="flex items-baseline justify-between gap-3">
        <p className="min-w-0 text-base font-bold leading-snug text-gray-900">{t(competition.event)}</p>
        {competition.year && (
          <span className="shrink-0 font-mono text-xs font-semibold text-gray-500">{competition.year}</span>
        )}
      </div>
      <p className="mt-0.5 text-sm leading-snug text-gray-600">{t(competition.result)}</p>
    </div>
  );
}
