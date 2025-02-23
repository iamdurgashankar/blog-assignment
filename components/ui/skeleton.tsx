import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const skeletonVariants = cva('animate-pulse rounded-md bg-muted', {
  variants: {
    variant: {
      default: 'bg-gray-200',
    },
    size: {
      default: 'h-4 w-full',
      sm: 'h-2 w-20',
      lg: 'h-6 w-32',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(skeletonVariants({ variant, size, className }))}
      {...props}
    />
  )
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };