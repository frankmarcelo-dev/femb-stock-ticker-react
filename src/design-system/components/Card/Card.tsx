import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Card.module.css'

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'
export type CardAccent = 'none' | 'cyan' | 'green' | 'red'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding
  elevated?: boolean
  interactive?: boolean
  accent?: CardAccent
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = 'md',
      elevated = false,
      interactive = false,
      accent = 'none',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          styles.card,
          styles[padding],
          elevated && styles.elevated,
          interactive && styles.interactive,
          accent !== 'none' && styles[`accent${accent.charAt(0).toUpperCase() + accent.slice(1)}`],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'
