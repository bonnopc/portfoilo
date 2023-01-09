import styles from "./Container.module.scss";

export default function Container({ children, className }: { children: any; className?: string }) {
  return <div className={`${styles.root} ${className ? className : ""}`}>{children}</div>;
}
