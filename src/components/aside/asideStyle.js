export const asideStyles = {
  aside:
    'flex w-full flex-col bg-neutral-950 px-4 py-4 text-neutral-100 md:h-screen md:w-64 md:shrink-0 md:py-6 md:sticky md:top-0',
  top: 'flex items-center justify-between md:mb-8',
  brand: 'flex items-center gap-3 px-2',
  brandIcon:
    'flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white',
  brandText: 'text-lg font-semibold tracking-tight',
  toggle:
    'flex h-9 w-9 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/10 md:hidden',
  nav: 'flex-col gap-1 pt-3 md:flex md:pt-0',
  navOpen: 'flex',
  navClosed: 'hidden',
  link: 'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/5 hover:text-white',
  linkActive: 'bg-white/10 text-white',
  footer: 'mt-auto hidden px-3 pt-8 text-xs text-neutral-600 md:block',
};
