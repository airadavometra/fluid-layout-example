import { PageTile } from "../../components/PageTile/PageTile";
import WidthContainer from "../../components/WidthContainer/WidthContainer";
import { Arrow } from "../../icons/Arrow";
import s from "./ArchivePage.module.css";

// Just to demo page tiles. On real website there should be real data object, not just one constant.
const pageCount = 13;

export const ArchivePage = () => {
  return (
    <WidthContainer className={s.widthContainer}>
      <div className={s.content}>
        <section className={s.section}>
          <h2 className={s.title}>
            <Arrow className={s.icon} />
            Issue 1 - Name of the chapter
          </h2>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={s.pages}>
            {Array.from(
              {
                length: pageCount,
              },
              (_, i) => i + 1
            ).map((page) => (
              <PageTile pageTitle={`Page ${page}`} />
            ))}
          </div>
        </section>
        <section className={s.section}>
          <h2 className={s.title}>
            <Arrow className={s.icon} />
            Issue 2 - Name of the chapter
          </h2>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={s.pages}>
            {Array.from(
              {
                length: pageCount,
              },
              (_, i) => i + 1
            ).map((page) => (
              <PageTile pageTitle={`Page ${page}`} />
            ))}
          </div>
        </section>
      </div>
      <div className={s.adsBlock}>
        <div className={s.ads} />
      </div>
    </WidthContainer>
  );
};
