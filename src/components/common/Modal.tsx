import {
  cloneElement,
  createContext,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../../hooks/useOutsideClick";

type ModalContextValue = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

type ModalProps = {
  children: ReactNode;
};

type OpenProps = {
  children: ReactElement<{
    onClick?: (event: MouseEvent<HTMLElement>) => void;
  }>;
  opens: string;
};

type WindowProps = {
  children: ReactElement<{
    onCloseModal?: () => void;
  }>;
  name: string;
};

type CloseProps = {
  children?: ReactElement<{
    onClick?: (event: MouseEvent<HTMLElement>) => void;
  }>;
};

const ModalContext = createContext<ModalContextValue | null>(null);

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside a <Modal /> component.");
  }

  return context;
};

const Modal = ({ children }: ModalProps) => {
  const [openName, setOpenName] = useState<string>("");

  const open = (name: string) => {
    setOpenName(name);
  };

  const close = () => {
    setOpenName("");
  };

  return (
    <ModalContext.Provider
      value={{
        openName,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens }: OpenProps) => {
  const { open } = useModal();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);
    open(opens);
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
};

const Window = ({ children, name }: WindowProps) => {
  const { openName, close } = useModal();

  const ref = useOutsideClick<HTMLDivElement>(close);

  useEffect(() => {
    if (openName !== name) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openName, name, close]);

  useEffect(() => {
    if (openName !== name) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [openName, name]);

  if (name !== openName) return null;

  return createPortal(
    <div
      className=" fixed inset-0 z-1000 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-all duration-500"
        onClick={close}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="relative z-1001 w-full max-w-2xl rounded-xl bg-bg-main p-10 shadow-2xl transition-all duration-500"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close modal"
          className="absolute inset-e-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent text-text-secondary transition-colors duration-200 hover:bg-bg-secondary hover:text-tertiarys focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-1"
        >
          <HiXMark className="h-6 w-6" aria-hidden="true" />
        </button>

        {cloneElement(children, {
          onCloseModal: close,
        })}
      </div>
    </div>,
    document.body,
  );
};

const Close = ({ children }: CloseProps) => {
  const { close } = useModal();

  if (!children) {
    return (
      <button
        type="button"
        onClick={close}
        className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      >
        Close
      </button>
    );
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    children?.props.onClick?.(event);
    close();
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
};

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal;
