import s from "./PageTile.module.css";

type PageTileProps = {
  pageTitle: string;
};

export const PageTile = ({ pageTitle }: PageTileProps) => {
  return (
    <div className={s.container}>
      <div className={s.imagePlaceholder}></div>
      <h3 className={s.pageTitle}>{pageTitle}</h3>
    </div>
  );
};
