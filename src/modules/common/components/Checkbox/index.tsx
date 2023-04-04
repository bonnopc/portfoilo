import styles from "./Checkbox.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function Checkbox({ label, helperText, id, ...rest }: Props) {
  // id needs to be passed to the input and the label,
  // so we can use the label to toggle the checkbox
  // if no id is passed, we generate one from the label
  if (!id) {
    id = label.replace(/\s/g, "-").toLowerCase();
  }

  return (
    <div className={styles.wrapper}>
      <input id={id} {...rest} type="checkbox" />
      <label htmlFor={id}>
        <span>{label}</span>
        {helperText && <span className={styles.muted}>{helperText}</span>}
      </label>
    </div>
  );
}
