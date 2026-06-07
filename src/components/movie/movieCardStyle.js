export const movieCardStyles = {
  card: 'relative flex flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm',
  overlay:
    'absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/70 backdrop-blur-sm',
  spinnerWrap: 'flex flex-col items-center justify-center gap-2',
  deleteBtnDisabled: 'cursor-not-allowed opacity-60',
  header: 'mb-3 flex items-start justify-between gap-3',
  title: 'text-base font-semibold leading-snug text-neutral-900',
  badge:
    'shrink-0 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600',
  desc: 'mb-5 flex-1 text-sm leading-relaxed text-neutral-500',
  deleteBtn:
    'flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700',
};
