import { ReactNode } from "react";
import s from "./Layout.module.css";
import classNames from "classnames";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div id="layout" className={s.layout}>
        <header className={classNames(s.header, s.helperColor)}>Header</header>
        <main className={classNames(s.main, s.helperColor)}>{children}</main>
        <footer className={classNames(s.footer, s.helperColor)}>Footer</footer>
      </div>
    </>
  );
};
