import { createContext, useContext, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface TableProps {
  children: ReactNode;
  columns: string;
}

interface TableHeaderProps {
  titles: string[];
}

interface TableRowProps {
  children: ReactNode;
  onClick?: () => void;
}

const commonStyle =
  "grid py-2.5 bg-bg-main items-center border-b border-tertiary/40 min-w-fit text-sm transition-all";

const TableContext = createContext({ columns: "" });

const Table = ({ children, columns }: TableProps) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="overflow-x-auto shadow-md h-fit rounded-md grid">
        {children}
      </div>
    </TableContext.Provider>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col bg-bg-main">{children}</div>;
};

const Header = ({ titles }: TableHeaderProps) => {
  const { t } = useTranslation();
  const { columns } = useContext(TableContext);

  return (
    <header className={`${commonStyle} ${columns} 2xl:text-base rounded-t-md`}>
      {titles.map((title, index) => (
        <h5
          key={index}
          className="mx-3 font-semibold text-primary-500 uppercase text-nowrap"
        >
          {t(title)}
        </h5>
      ))}
    </header>
  );
};

const Row = ({ children, onClick }: TableRowProps) => {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`${commonStyle} ${columns} bg-transparent relative 2xl:text-base last:border-none hover:bg-bg-secondary/80 dark:hover:bg-bg-secondary/40 hover:rounded-sm hover:shadow-md`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <footer className="py-2 px-4 bg-bg-main border-t border-tertiary [&:not(:has(*))]:hidden">
      {children}
    </footer>
  );
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
