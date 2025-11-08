import React from 'react';
import '../../index.scss';
import './Home.scss';
import { SiNetlify } from 'react-icons/si';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__text">
          {/* Tarjima qilingan matnlar */}
          <h2 className='subtitle'>{t("hero.subtitle")} 👋</h2>
          
          {/* Agar matnda HTML teglar bo‘lsa (masalan <span>) dangerouslySetInnerHTML ishlatamiz */}
          <h1 
            className='title'
            dangerouslySetInnerHTML={{ __html: t("hero.title") }}
          />
          
          <p className='subtitle'>{t("hero.description")}</p>
          
          <div className="buttons">
            <button className="button-active">{t("hero.contactBtn")}</button>
            <button className="button">{t("hero.downloadBtn")}</button>
          </div>

          {/* 🔗 Ijtimoiy tarmoqlar */}
          <div className="social">
            <a
              className="social-btn"
              href="https://github.com/numonof?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="social-btn"
              href="https://app.netlify.com/teams/numonof/sites"
              target="_blank"
              rel="noreferrer"
            >
              <SiNetlify size={30} />
            </a>
            <a
              className="social-btn"
              href="https://www.linkedin.com/in/islomjon-no-monov-2a49a420a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
