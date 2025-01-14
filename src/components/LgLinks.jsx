import Link from 'next/link'
import { Icon } from '@/components/Icon'

export function LgLinks({ children }) {
  return (
    <div className="not-prose mt-12 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function LgLink({ title, description, href, icon, isTutorial }) {
  const badgeText = isTutorial ? 'Tutorial' : null
  const badgeColor = isTutorial ? 'blue' : null

  return (
    <div className="group relative border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px border-2 border-transparent opacity-0 [background:linear-gradient(var(--lg-links-hover-bg,theme(colors.blue.50)),var(--lg-links-hover-bg,theme(colors.blue.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.blue.400),theme(colors.blue.500))_border-box] group-hover:opacity-100 dark:[--lg-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <Icon icon={icon} className="h-12 w-12" />
        <h2 className="mt-4 font-display text-base font-semibold text-slate-900 dark:text-white">
          {badgeText ? (
            <>
              <div
                className={`mb-0.5 flow-root w-fit items-center rounded-full bg-${badgeColor}-50 px-1 py-0.5 text-xxs font-medium text-${badgeColor}-700 ring-1 ring-inset ring-${badgeColor}-600/10 dark:bg-transparent dark:text-white dark:ring-white`}
              >
                {badgeText}
              </div>
              <Link href={href}>
                <span className="absolute -inset-px rounded-xl" />
                {title}
              </Link>
            </>
          ) : (
            <Link href={href}>
              <span className="absolute -inset-px rounded-xl" />
              {title}
            </Link>
          )}
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}
