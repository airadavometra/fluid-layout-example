import { Link } from "react-router-dom";
import { Heart } from "../../icons/Heart";
import WidthContainer from "../WidthContainer/WidthContainer";
import s from "./Footer.module.css";
import classNames from "classnames";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.message}>
          <span className={s.transparent}>Made with</span>
          <Heart className={classNames(s.heart, s.transparent)} />
          <span className={s.transparent}>by</span>
          <Link to="https://www.airadavometra.space/" className={s.link}>
            Daria
          </Link>
        </div>
        <span className={s.transparent}>2024</span>
      </WidthContainer>
    </footer>
  );
};
