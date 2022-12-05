import styles from "./Switch.module.scss";
import { memo } from "react";
import combineClassNames from "@/utils/combineClassNames";

interface ISwitchIcons {
  checked?: any;
  unchecked?: any;
}

interface ISwitchProps {
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  onChange?: (val: boolean) => void;
  size?: "sm" | "lg"; // default 'sm'
  icons?: ISwitchIcons;
}

function Switch({
  disabled,
  checked,
  className,
  onChange,
  size = "sm",
  icons,
}: ISwitchProps) {
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
      <div
        className={combineClassNames(styles, {
          slider: true,
          [size]: Boolean(size),
        })}
        aria-hidden="true"
      >
        <div className={styles.thumb}>
          {checked && icons?.checked ? (
            icons.checked
          ) : icons?.unchecked ? (
            icons.unchecked
          ) : (
            <div />
          )}
        </div>
      </div>
    </label>
  );
}

export default memo(Switch);
