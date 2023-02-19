import { createElement } from "react";
import styles from "./List.module.scss";

interface IListItem {
  label: string;
  className?: string;
  onClick?: () => void;
}

interface IListProps {
  items: IListItem[];
  type?: "ol" | "ul"; // default is "ul"
}

function ListItem({ label, className, onClick }: IListItem) {
  return <li className={className}>{label}</li>;
}

export default function List({ items, type = "ul" }: IListProps) {
  const itemElems = items.map((item, i) => <ListItem {...item} key={i} />);

  return createElement(
    type,
    {
      className: styles.root,
    },
    itemElems
  );
}
