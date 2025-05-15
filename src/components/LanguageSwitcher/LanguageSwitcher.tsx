'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Button } from '@mui/material';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLang = params.lng as string;
  const otherLang = currentLang === 'es' ? 'en' : 'es';

  const switchLanguage = () => {
    const newPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);
    router.push(newPath);
  };

  return (
    <Button size="small" onClick={switchLanguage}>
      {otherLang.toUpperCase()}
    </Button>
  );
};

export default LanguageSwitcher;
