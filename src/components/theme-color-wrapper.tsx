import cn from '@/lib/cn';

interface ThemeColorWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string;
}

export function ThemeColorWrapper({
  children,
  className,
}: ThemeColorWrapperProps) {
  // const [fontSize] = useFontSize();

  // const fonts = 'font-inter font-general-sans font-plus-jakarta font-onest';

  // const fontSizeClasses =
  //   'font-sizes-small font-sizes-default font-sizes-large';

  // const fontSizeClass = `theme-text-sizes-${fontSize.fontSize}`;

  // console.log('fontSizeClass', fontSizeClass);

  return (
    <div
      className={cn(
        // `theme-${defaultTheme || themeColor}`,
        'w-full relative',
        // fonts,
        // fontSizeClass,
        className
      )}
      // style={
      //   {
      //     "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
      //   } as React.CSSProperties
      // }
    >
      {children}
    </div>
  );
}
