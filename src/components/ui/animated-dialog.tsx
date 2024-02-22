/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import type { ClassValue } from 'clsx';
import React, { Fragment } from 'react';

import cn from '@/lib/cn';
import { useThemeColor } from '@/hooks/use-theme-color';

import { IconButton } from '@/components/ui/icon-button';
import Typography, { TypographyProps } from '@/components/ui/typography';

// const Dialog = Dialog;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Transition.Child>,
  {
    className?: ClassValue;
  }
>(({ className }, ref) => (
  <Transition.Child
    ref={ref}
    as={Fragment}
    enter='ease-out duration-300'
    enterFrom='opacity-0'
    enterTo='opacity-100'
    leave='ease-in duration-200'
    leaveFrom='opacity-100'
    leaveTo='opacity-0'
  >
    <div
      className={cn(
        'fixed inset-0 bg-gray-900/30 dark:bg-gray-900/70',
        className as ClassValue
      )}
    />
  </Transition.Child>
));

const DialogPortal = React.forwardRef<
  React.ElementRef<typeof Dialog.Panel>,
  {
    className?: ClassValue;
    children?: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4 text-center',
      className
    )}
    {...props}
  >
    <Transition.Child
      as={Fragment}
      enter='duration-300 ease-out'
      enterFrom='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
      enterTo='opacity-100 translate-y-0 sm:translate-x-0'
      leave='duration-200 ease-in'
      leaveFrom='opacity-100 translate-y-0 sm:translate-x-0'
      leaveTo='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
    >
      {/* <div
        ref={ref}
        className={cn(
          // "fixed bottom-0 right-0 z-50 flex h-4/5 w-full flex-col gap-4 overflow-y-auto border bg-gray-50 px-3 py-2 pb-20 shadow-lg duration-200 dark:bg-gray-900 sm:top-0 sm:h-full sm:rounded-l-lg md:w-full md:px-6 xl:max-w-md",
          "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
          className
        )}
        {...props}
      > */}
      {children}
      {/* <DialogPrimitive.Close className="absolute right-2 top-2 rounded-sm ">
        <Button size="icon" variant="outline" className="h-7 w-7">
          <Cross2Icon className="h-5 w-5" />
        </Button>
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close> */}
      {/* </div> */}
    </Transition.Child>
  </div>
));

DialogPortal.displayName = 'DialogPortal';

DialogOverlay.displayName = 'DialogOverlay';

// const DialogTitle = React.forwardRef<
//   React.ElementRef<typeof Dialog.Title>,
//   React.ComponentPropsWithoutRef<typeof Dialog.Title>
// >(({ className, children, as = "h3", ...props }, ref) => (
//   <Dialog.Title
//     as={as}
//     ref={ref}
//     className="text-lg font-medium leading-6 text-gray-900"
//     {...props}
//   />
// ));

// DialogTitle.displayName = "DialogTitle";

type DialogTitleProps = {
  className?: ClassValue;
  as?: TypographyProps['as'];
  children?: React.ReactNode;
};

const DialogTitle: React.FC<DialogTitleProps> = ({
  className,
  as = 'h3',
  ...props
}) => (
  <Typography
    as={as}
    variant='display-xs/medium'
    className={cn(className)}
    {...props}
  />
);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Panel>,
  {
    className?: ClassValue;
    children?: React.ReactNode;
    fullScreen?: boolean;
  }
>(({ className, children, fullScreen, ...props }, ref) => (
  // React.ElementRef<typeof DialogPrimitive.Content>,
  // React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
  <Dialog.Panel
    ref={ref}
    className={cn(
      'w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all',
      {
        'absolute right-0 left-0 max-w-full bottom-0 h-[70%] w-full overflow-y-scroll rounded-b-none rounded-t-md pt-5 shadow-xl dark:text-gray-200 sm:left-auto sm:top-0 sm:right-0 sm:rounded-r-none sm:min-h-screen sm:max-w-sm sm:rounded-md md:max-w-md lg:max-w-lg':
          fullScreen,
      },
      className
    )}
    {...props}
  >
    {children}
  </Dialog.Panel>
));

DialogContent.displayName = 'DialogContent';

const DialogRoot = React.forwardRef<
  React.ElementRef<typeof Dialog>,
  // React.ComponentPropsWithoutRef<typeof Dialog>
  {
    open: boolean;
    className?: ClassValue;
    children?: React.ReactNode;
    onClose: () => void;
  }
  // React.ComponentPropsWithoutRef<typeof Dialog>
>(({ className, children, open, onClose, ...props }, ref) => {
  const [themeColor] = useThemeColor();

  const theme = `theme-${themeColor.colorName || 'default'}`;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as='div'
        ref={ref}
        className={cn('relative z-10', theme, className)}
        onClose={onClose}
        {...props}
      >
        <DialogOverlay />

        {children}
        {/* <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Payment successful
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Your payment has been successfully submitted. We’ve sent you an email
          with all of the details of your order.
        </p>
      </div>
  
      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Got it, thanks!
        </button>
      </div> */}
      </Dialog>
    </Transition>
  );
});

DialogRoot.displayName = 'DialogRoot';

type CustomDialogProps = {
  children?: React.ReactNode;
  triggerButton: React.ReactNode;
  title?: string;
  description?: string;
  className?: ClassValue;
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
};

export default function CustomDialog({
  open,
  onClose,
  triggerButton,
  title,
  description,
  className,
  children,
  fullScreen,
}: CustomDialogProps) {
  return (
    <>
      <>{triggerButton}</>

      <DialogRoot open={open} onClose={onClose}>
        <DialogPortal>
          <DialogContent className={cn('', className)} fullScreen={fullScreen}>
            {/* Dialog Header */}
            <div className='mr-8'>
              <DialogTitle as='h4' className='truncate'>
                {title}
              </DialogTitle>
            </div>
            {description && (
              <p className='body-sm inline text-gray-600'>{description}</p>
            )}

            <div className='mt-2'>{children}</div>

            {/* close button */}
            <IconButton
              className='absolute top-4 right-3'
              variant='outline'
              size='xs'
              onClick={onClose}
            >
              <XMarkIcon className='w-6' aria-hidden='true' />
            </IconButton>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    </>
  );
}

export { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle };
