import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';

import { IconButton } from '@/components/ui/icon-button';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <IconButton
      type='button'
      variant='outline'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='hidden sm:block'
    >
      {theme === 'light' ? (
        <SunIcon className='w-7' />
      ) : (
        <MoonIcon className='w-7 p-0.5' />
      )}
    </IconButton>
  );
}
