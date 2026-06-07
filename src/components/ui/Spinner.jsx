import { spinnerStyles as s } from './spinnerStyle';

function Spinner({ label = 'Loading…', className }) {
  return (
    <div className={className ?? s.wrap} role="status" aria-live="polite">
      <span className={s.circle} />
      {label && <span className={s.label}>{label}</span>}
    </div>
  );
}

export default Spinner;
