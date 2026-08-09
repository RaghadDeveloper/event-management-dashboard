import {
  createContext,
  useContext,
  useState,
  type ReactElement,
  type ReactNode,
  type MouseEvent,
} from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import useOutsideClick from "../../hooks/useOutsideClick";

type MenuId = number;

type Position = {
  x: number;
  y: number;
};

type MenusContextValue = {
  openId: MenuId | "";
  open: (id: MenuId) => void;
  close: () => void;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

type MenusProps = {
  children: ReactNode;
};

type ToggleProps = {
  id: MenuId;
  children?: ReactNode;
};

type ListProps = {
  id: MenuId;
  children: ReactNode;
};

type ButtonProps = {
  children: ReactNode;
  icon?: ReactElement;
  onClick?: () => void;
};

const MenusContext = createContext<MenusContextValue | null>(null);

const Menus = ({ children }: MenusProps) => {
  const [openId, setOpenId] = useState<MenuId | "">("");
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const close = () => setOpenId("");
  const open = (id: MenuId) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      <div className="relative">{children}</div>
    </MenusContext.Provider>
  );
};

const useMenusContext = () => {
  const context = useContext(MenusContext);

  if (!context) {
    throw new Error("Menus components must be used within <Menus />");
  }

  return context;
};

const Toggle = ({ id }: ToggleProps) => {
  const { openId, open, close, setPosition } = useMenusContext();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    if (openId === "" || openId !== id) open(id);
    else close();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md border-none bg-transparent p-1.5 cursor-pointer transition-all duration-200 me-4 hover:bg-bg-main"
      aria-label="Open menu"
    >
      <HiEllipsisVertical className="h-6 w-6" />
    </button>
  );
};

const List = ({ children, id }: ListProps) => {
  const { openId, close } = useMenusContext();

  const ref = useOutsideClick<HTMLUListElement>(close, false);
  if (openId !== id) return null;

  return (
    <ul
      ref={ref}
      className="absolute inset-e-10 top-10 z-50 rounded-md bg-bg-main shadow-md border border-tertiary"
    >
      {children}
    </ul>
  );
};

const Button = ({ children, icon, onClick }: ButtonProps) => {
  const { close } = useMenusContext();

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 border-none bg-transparent px-4 py-2 text-left transition-all duration-200 rounded-md hover:bg-bg-secondary"
      >
        {icon && (
          <span className="flex items-center justify-center [&>svg]:text-gray-400 [&>svg]:transition-all [&>svg]:duration-300">
            {icon}
          </span>
        )}

        <span className="text-nowrap first-letter:capitalize">{children}</span>
      </button>
    </li>
  );
};

const Menu = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center justify-end">{children}</div>;
};

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
Menus.Menu = Menu;

export default Menus;
