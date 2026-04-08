import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Badge.module.css'

export type BadgeVariant = 'up' | 'down' | 'flat' | 'info' | 'neutral' | 'amber'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
}

export function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(styles.badge, styles[variant], styles[size], className)}
      {...props}
    >
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  )
}
