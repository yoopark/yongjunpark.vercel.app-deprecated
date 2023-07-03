import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { GithubLink } from '../components/GithubLink';
import { TeamLabel } from '../components/TeamLabel';
import { Typed } from '../components/Typed';
import styles from './page.module.css';

export default function Home() {
  const t = useTranslations('Index');
  const locale = useLocale();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.introduction}>
          <h1>
            <Link href="/">{t('name')}</Link>
          </h1>
          <h2>{t('job')}</h2>
          <div>
            {locale === 'en' && <span>A developer&nbsp;</span>}
            <Typed
              strings={[
                'modifiers.one-percent',
                'modifiers.ui-ux-stat',
                'modifiers.readable-code',
                'modifiers.information-society',
                'modifiers.immerse',
              ].map((key) => t(key))}
            />
            {locale === 'ko' && <span>&nbsp;개발자</span>}
          </div>
          <div className={styles.contact}>
            <p>yopark.dev@gmail.com</p>
            <p>{t('phone')}</p>
          </div>
          <nav>
            <ul>
              <li>{t('About.title')}</li>
              <li>{t('Projects.title')}</li>
              <li>{t('Educations.title')}</li>
            </ul>
          </nav>
        </div>
        <div className={styles.social}>
          <a
            href="https://github.com/yoopark"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
          <a
            href="https://yoopark.github.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blog
          </a>
          {locale === 'ko' ? (
            <Link href="/en" locale="en">
              English
            </Link>
          ) : (
            <Link href="/ko" locale="ko">
              한국어
            </Link>
          )}
        </div>
      </header>
      <main className={styles.main}>
        <section id={styles.about}>
          <h2>{t('About.title')}</h2>
          <div className={styles.about__container}>
            <p>{t('About.p1')}</p>
            <p>{t('About.p2')}</p>
          </div>
        </section>
        <section id={styles.projects}>
          <h2>{t('Projects.title')}</h2>
          <div className={styles.projects__container}>
            <div className={styles.project}>
              <p className={styles.project__duration}>
                2023.02 — {t('present')}
              </p>
              <div className={styles.project__main}>
                <div className={styles.project__title}>
                  <h3>{t('Projects.42Stat.title')}</h3>
                  <div className={styles.project__info}>
                    <TeamLabel count={4} />
                    <p>{t('Projects.42Stat.role')}</p>
                    <GithubLink to="https://github.com/42Statistics/42Stat-Frontend" />
                  </div>
                </div>
                <p className={styles.project__highlight}>
                  {t('Projects.42Stat.description')}
                </p>
                <ul className={styles.project__stack}>
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>TypeScript</li>
                  <li>Styled Component</li>
                  <li>Docker Compose</li>
                </ul>
              </div>
            </div>
            <div className={styles.project}>
              <p className={styles.project__duration}>2023.04 </p>
              <div className={styles.project__main}>
                <div className={styles.project__title}>
                  <h3>{t('Projects.CerebriClass.title')}</h3>
                  <div className={styles.project__info}>
                    <TeamLabel count={1} />
                    <GithubLink to="https://github.com/storyboard-lab/cerebri-class" />
                  </div>
                </div>
                <p className={styles.project__highlight}>
                  {t('Projects.CerebriClass.description')}
                </p>
                <p className={styles.project__highlight}>
                  {t('Projects.CerebriClass.startup-mvp')}
                </p>
                <ul className={styles.project__stack}>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Styled Component</li>
                  <li>FastAPI</li>
                  <li>Python-docx</li>
                  <li>ChatGPT</li>
                  <li>Docker Compose</li>
                </ul>
              </div>
            </div>
            <div className={styles.project}>
              <p className={styles.project__duration}>2022.12 — 2023.01</p>
              <div className={styles.project__main}>
                <div className={styles.project__title}>
                  <h3>{t('Projects.LastPong.title')}</h3>
                  <div className={styles.project__info}>
                    <TeamLabel count={4} />
                    <p>{t('Projects.LastPong.role')}</p>
                    <GithubLink to="https://github.com/lev-Zero/lastpong" />
                  </div>
                </div>
                <p className={styles.project__highlight}>
                  {t('Projects.LastPong.description')}
                </p>
                <ul className={styles.project__stack}>
                  <li>Nextjs</li>
                  <li>Socket.io</li>
                  <li>TypeScript</li>
                  <li>Chakra UI</li>
                  <li>Zustand</li>
                  <li>Docker Compose</li>
                </ul>
              </div>
            </div>
            <div className={styles.project}>
              <p className={styles.project__duration}>2022.09 — 2022.12</p>
              <div className={styles.project__main}>
                <div className={styles.project__title}>
                  <h3>{t('Projects.Miliroutine.title')}</h3>
                  <div className={styles.project__info}>
                    <TeamLabel count={5} />
                    <p>{t('Projects.Miliroutine.role')}</p>
                    <GithubLink to="https://github.com/osamhack2022-v2/WEB_AI_MILIROUTINE_MILIROUTINE" />
                  </div>
                </div>
                <p className={styles.project__highlight}>
                  {t('Projects.Miliroutine.description')}
                </p>
                <p className={styles.project__highlight}>
                  {t('Projects.Miliroutine.awards-winner')}
                </p>
                <a
                  href="https://yoopark.github.io/miliroutine-retrospect"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t('Projects.Miliroutine.article-review')}
                </a>
                <ul className={styles.project__stack}>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Docker Compose</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.educations}>
          <h2>{t('Educations.title')}</h2>
          <div className={styles.educations__container}>
            <div className={styles.education}>
              <p className={styles.education__duration}>
                2019.03 — {t('present')}
              </p>
              <div className={styles.education__main}>
                <div className={styles.education__title}>
                  <h3>{t('Educations.KoreaUniv.title')}</h3>
                  <p>{t('Educations.KoreaUniv.status')}</p>
                </div>
                <p className={styles.education__highlight}>
                  {t('Educations.KoreaUniv.major')}
                </p>
                <p className={styles.education__highlight}>
                  {t('Educations.KoreaUniv.double-major')}
                </p>
              </div>
            </div>
            <div className={styles.education}>
              <p className={styles.education__duration}>
                2020.02 — {t('present')}
              </p>
              <div className={styles.education__main}>
                <div className={styles.education__title}>
                  <h3>{t('Educations.42Seoul.title')}</h3>
                  <p>{t('Educations.42Seoul.status')}</p>
                </div>
                <p className={styles.education__highlight}>
                  {t('Educations.42Seoul.common-course')}
                </p>
                <a
                  href="https://yoopark.github.io/42-interview"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t('Educations.42Seoul.article-non-major')}
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <p>{t('Footer.thank-you')}</p>
          <p>© 2023. yongjun park</p>
          <p>{t('Footer.built-with')}</p>
        </footer>
      </main>
    </div>
  );
}
