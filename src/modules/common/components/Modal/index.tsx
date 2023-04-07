import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import CloseIcon from "@/assets/icons/close.svg";
import IconButton from "../IconButton";
import combineClassNames from "@/utils/combineClassNames";
import { CSSTransition } from "react-transition-group";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: () => void;
  hideCloseIcon?: boolean;
  preventClose?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
}

function Modal({
  isOpen,
  onClose,
  children,
  hideCloseIcon,
  preventClose,
  transparent = false,
  ...restProps
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (
      isOpen &&
      !preventClose &&
      onClose &&
      contentRef?.current &&
      !contentRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isOpen && !root.classList.contains("noScroll")) root.classList.add("noScroll");
    else if (!isOpen && root.classList.contains("noScroll")) root.classList.remove("noScroll");

    document.addEventListener("mousedown", handleClickOutside);

    () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} {...restProps}>
      <div className={styles.container}>
        <CSSTransition
          unmountOnExit
          nodeRef={contentRef}
          in={isOpen}
          timeout={300}
          classNames="fade"
        >
          <div
            ref={contentRef}
            className={combineClassNames(styles, {
              content: true,
              transparent,
            })}
          >
            {!hideCloseIcon && !preventClose && onClose ? (
              <IconButton
                size="large"
                aria-label="Close Modal"
                className={styles.closeBtn}
                onClick={onClose}
              >
                <CloseIcon className={styles.closeIcon} />
              </IconButton>
            ) : (
              ""
            )}

            {children}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Modal;
