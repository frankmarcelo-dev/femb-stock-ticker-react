import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { AlertCircle } from 'lucide-react'
import { Button, Input } from '@ds/components'
import styles from './LoginPage.module.css'

const DEMO_TICKERS = [
  { symbol: 'AAPL', price: '227.84', change: '+1.89%', up: true },
  { symbol: 'NVDA', price: '875.39', change: '+2.19%', up: true },
  { symbol: 'TSLA', price: '248.42', change: '-2.97%', up: false },
  { symbol: 'MSFT', price: '415.32', change: '+0.53%', up: true },
]

const FEATURES = [
  'Real-time portfolio tracking across all positions',
  'Custom price alerts with instant notifications',
  'Interactive charts with technical indicators',
  'Secure Auth0-powered authentication',
]

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }

    setLoading(true)

    // Simulate Auth0 login flow — replace with real Auth0 SDK call
    await new Promise((r) => setTimeout(r, 1200))

    // Demo: any credentials work
    setLoading(false)
    navigate('/dashboard')
  }

  const handleAuth0Login = async () => {
    setLoading(true)
    // Replace with: await auth0Client.loginWithRedirect()
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div className={styles.page}>
      {/* Left visual panel */}
      <div className={styles.visual}>
        <div className={styles.visualContent}>
          <div className={styles.logoArea}>
            <div className={styles.logoMark}>FT</div>
            <span className={styles.logoText}>FEMB Ticker</span>
          </div>

          <h2 className={styles.tagline}>
            Your portfolio,
            <span className={styles.taglineAccent}>always in focus.</span>
          </h2>

          <p className={styles.description}>
            Professional-grade stock tracking for individual investors.
            Monitor your watchlist, analyze performance, and never miss a move.
          </p>

          <div className={styles.features}>
            {FEATURES.map((feat) => (
              <div key={feat} className={styles.feature}>
                <span className={styles.featureDot} />
                {feat}
              </div>
            ))}
          </div>

          {/* Decorative ticker pills */}
          <div className={styles.tickerStrip}>
            {DEMO_TICKERS.map((t) => (
              <div key={t.symbol} className={styles.tickerPill}>
                <span className={styles.tickerSymbol}>{t.symbol}</span>
                <span className={styles.tickerPrice}>{t.price}</span>
                <span className={clsx(t.up ? styles.tickerUp : styles.tickerDown)}>
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className={styles.formPanel}>
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h1 className={styles.formTitle}>Sign in</h1>
            <p className={styles.formSubtitle}>
              Access your trading dashboard
            </p>
          </div>

          {/* Auth0 SSO button */}
          <button
            className={styles.auth0Button}
            onClick={handleAuth0Login}
            disabled={loading}
            type="button"
          >
            <span className={styles.auth0Icon}>A</span>
            Continue with Auth0
          </button>

          {/* Divider */}
          <div className={styles.dividerRow}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>or sign in with email</span>
            <div className={styles.dividerLine} />
          </div>

          {/* Email/password form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && (
              <div className={styles.errorMsg}>
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            <Input
              label="Email"
              type="email"
              placeholder="trader@firm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
            >
              Sign In
            </Button>
          </form>

          <p className={styles.terms}>
            By signing in you agree to our{' '}
            <span className={styles.link}>Terms of Service</span> and{' '}
            <span className={styles.link}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}
