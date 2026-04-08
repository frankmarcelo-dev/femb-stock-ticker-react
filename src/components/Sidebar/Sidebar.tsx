import { NavLink, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import {
  LayoutDashboard,
  TrendingUp,
  Star,
  BarChart3,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react'
import styles from './Sidebar.module.css'

const NAV_ITEMS = [
  {
    section: 'Overview',
    items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/watchlist', icon: Star, label: 'Watchlist' },
    ],
  },
  {
    section: 'Analysis',
    items: [
      { to: '/portfolio', icon: BarChart3, label: 'Portfolio' },
      { to: '/markets', icon: TrendingUp, label: 'Markets' },
    ],
  },
  {
    section: 'Account',
    items: [
      { to: '/alerts', icon: Bell, label: 'Alerts' },
      { to: '/settings', icon: Settings, label: 'Settings' },
    ],
  },
]

interface SidebarProps {
  userName?: string
}

export function Sidebar({ userName = 'Trader' }: SidebarProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  const initials = userName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logoArea}>
        <div className={styles.logoMark}>FT</div>
        <span className={styles.logoText}>FEMB Ticker</span>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ section, items }) => (
          <div key={section} className={styles.navSection}>
            <p className={styles.navSectionLabel}>{section}</p>
            {items.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx(styles.navItem, isActive && styles.active)
                }
              >
                <span className={styles.navIcon}>
                  <Icon size={14} strokeWidth={1.75} />
                </span>
                {label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className={styles.userArea}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.userRole}>Trader</p>
        </div>
        <button
          className={styles.logoutBtn}
          onClick={handleLogout}
          aria-label="Sign out"
          title="Sign out"
        >
          <LogOut size={14} />
        </button>
      </div>
    </aside>
  )
}
