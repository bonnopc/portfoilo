import styles from "./Switch.module.scss";
import { memo } from "react";

interface ISwitchProps {
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  onChange?: (val: boolean) => void;
}

function Switch({ disabled, checked, className, onChange }: ISwitchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.checked);
  };

  return (
    <label className={`${styles.switch} ${className ? className : ""}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      <div className={styles.slider} aria-hidden="true">
        <div className={styles.thumb} />
      </div>
    </label>
  );
}

export default memo(Switch);
