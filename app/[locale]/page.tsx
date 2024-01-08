import { TestComp } from '@/components/TestComp';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

export default function Index() {
  const t = useTranslatedWord('jian');
  return (
    <div>
      <h1>{t('jijij')}</h1>
      <TestComp />
    </div>
  );
}
