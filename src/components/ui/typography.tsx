import React from 'react';

import cn from '@/lib/cn';

const Display = ({
  size,
  weight,
  children,
}: {
  size: 'sm' | 'md' | 'lg';
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <>
      {size === 'lg' && (
        <h1
          className={cn(
            weight === 'medium'
              ? 'display-heading-large-md'
              : 'display-heading-large'
          )}
        >
          {children}
        </h1>
      )}
      {size === 'md' && (
        <h2
          className={cn(
            weight === 'medium'
              ? 'display-heading-medium-md'
              : 'display-heading-medium'
          )}
        >
          {children}
        </h2>
      )}
      {size === 'sm' && (
        <h3
          className={cn(
            weight === 'medium'
              ? 'display-heading-small-md'
              : 'display-heading-small'
          )}
        >
          {children}
        </h3>
      )}
    </>
  );
};

const H1 = ({
  weight,
  children,
}: {
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <h1 className={cn(weight === 'medium' ? 'heading-one-md' : 'heading-one')}>
      {children}
    </h1>
  );
};

const H2 = ({
  weight,
  children,
}: {
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn(weight === 'medium' ? 'heading-two-md' : 'heading-two')}>
      {children}
    </h2>
  );
};

const H3 = ({
  weight,
  children,
}: {
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(weight === 'medium' ? 'heading-three-md' : 'heading-three')}
    >
      {children}
    </h3>
  );
};

const H4 = ({
  weight,
  children,
}: {
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(weight === 'medium' ? 'heading-four-md' : 'heading-four')}
    >
      {children}
    </h4>
  );
};

const H5 = ({
  weight,
  children,
}: {
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <h5
      className={cn(weight === 'medium' ? 'heading-five-md' : 'heading-five')}
    >
      {children}
    </h5>
  );
};

const H6 = ({
  weight,
  children,
}: {
  weight: 'normal' | 'medium';
  children: React.ReactNode;
}) => {
  return (
    <h6 className={cn(weight === 'medium' ? 'heading-six-md' : 'heading-six')}>
      {children}
    </h6>
  );
};

const P = ({
  size,
  children,
}: {
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn({
        'body-small': size === 'sm',
        'body-medium': size === 'md',
        'body-large': size === 'lg',
      })}
    >
      {children}
    </p>
  );
};

const Label = ({
  size,
  children,
}: {
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}) => {
  return (
    <label
      className={cn({
        'label-small': size === 'sm',
        'label-medium': size === 'md',
        'label-large': size === 'lg',
      })}
    >
      {children}
    </label>
  );
};

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return <blockquote className={cn('blockquote')}>{children}</blockquote>;
};

export { Blockquote, Display, H1, H2, H3, H4, H5, H6, Label, P };
