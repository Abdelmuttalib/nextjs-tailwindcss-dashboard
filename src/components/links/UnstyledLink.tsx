import Link, { LinkProps } from 'next/link';
import React from 'react';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          {...rest}
          className={className}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        ref={ref}
        {...rest}
        className={className}
        passHref
      >
        {children}
      </Link>
    );
  }
);

export default UnstyledLink;
