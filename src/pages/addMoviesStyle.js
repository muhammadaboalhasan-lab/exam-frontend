export const addMoviesStyles = {
  header: 'mb-6',
  title: 'text-2xl font-bold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500',
  card: 'relative max-w-2xl rounded-xl border border-neutral-200 bg-white p-6 shadow-sm',
  overlay:
    'absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/70 backdrop-blur-sm',
  spinnerWrap: 'flex flex-col items-center justify-center gap-2',
  submitDisabled: 'cursor-not-allowed opacity-60',
  field: 'mb-4 flex flex-col gap-1.5',
  label: 'text-sm font-medium text-neutral-700',
  labelRow: 'flex items-center justify-between gap-3',
  aiBtn:
    'inline-flex items-center gap-1.5 rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60',
  aiError: 'mt-1 text-xs font-medium text-red-600',
  preview:
    'mt-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm leading-relaxed text-neutral-700',
  previewLabel: 'mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400',
  prose:
    'prose prose-sm prose-neutral max-w-none [&_p]:my-1 [&_strong]:text-neutral-900',
  input:
    'rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30',
  textarea:
    'min-h-24 resize-y rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30',
  submit:
    'mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800',
};
