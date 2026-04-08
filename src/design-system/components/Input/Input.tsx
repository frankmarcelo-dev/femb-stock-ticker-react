import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  mono?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      mono = false,
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? `input-${Math.random().toString(36).slice(2, 9)}`

    return (
      <div
        className={clsx(
          styles.wrapper,
          styles[size],
          mono && styles.mono,
          error && styles.error,
          leftIcon && styles.hasLeft,
          rightIcon && styles.hasRight,
          className,
        )}
      >
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
          <input ref={ref} id={inputId} className={styles.input} {...props} />
          {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
        </div>
        {error && <span className={styles.errorText}>{error}</span>}
        {!error && hint && <span className={styles.hint}>{hint}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
