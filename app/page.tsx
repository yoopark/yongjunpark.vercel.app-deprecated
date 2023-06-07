import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.introduction}>
          <h1>
            <a href="/">박용준</a>
          </h1>
          <h2>프론트엔드 개발자</h2>
          <div className={styles.contact}>
            <p>yopark.dev@gmail.com</p>
            <p>010-2533-6357</p>
          </div>
          <nav>
            <ul>
              <li>소개</li>
              <li>프로젝트</li>
              <li>교육</li>
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
        </div>
      </header>
      <main className={styles.main}>
        <section id={styles.about}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aliquam debitis nostrum tempora quis accusamus, expedita, facilis
            ipsa odio nemo vel maxime corporis nam praesentium ducimus, deleniti
            temporibus sequi consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aliquam debitis nostrum tempora quis accusamus, expedita, facilis
            ipsa odio nemo vel maxime corporis nam praesentium ducimus, deleniti
            temporibus sequi consequatur.
          </p>
        </section>
        <section id={styles.projects}>
          <div className={styles.project}>
            <p className={styles.project__duration}>2023.02 — &nbsp;현재</p>
            <div className={styles.project__main}>
              <div className={styles.project__title}>
                <h3>42Stat</h3>
                <p>4인 팀 · 프론트엔드 개발</p>
              </div>
              <p className={styles.project__description}>
                42서울 교육생의 통계를 보여주는 대시보드형 웹서비스
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aliquam debitis nostrum tempora quis accusamus, expedita,
                facilis ipsa odio nemo vel maxime corporis nam praesentium
                ducimus, deleniti temporibus sequi consequatur.
              </p>
            </div>
          </div>
          <div className={styles.project}>
            <p className={styles.project__duration}>2023.04 </p>
            <div className={styles.project__main}>
              <div className={styles.project__title}>
                <h3>Cerebri Class</h3>
                <p>1인 개발</p>
              </div>
              <p className={styles.project__description}>
                영단어를 입력하면 문제를 생성하여 Word 학습지를 제작해주는
                서비스
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aliquam debitis nostrum tempora quis accusamus, expedita,
                facilis ipsa odio nemo vel maxime corporis nam praesentium
                ducimus, deleniti temporibus sequi consequatur.
              </p>
            </div>
          </div>
          <div className={styles.project}>
            <p className={styles.project__duration}>2022.12 — 2023.01</p>
            <div className={styles.project__main}>
              <div className={styles.project__title}>
                <h3>LastPong</h3>
                <p>4인 팀 · 프론트엔드 개발</p>
              </div>
              <p className={styles.project__description}>
                Socket.io를 이용하여 게임, 채팅, DM을 구현한 SPA 웹서비스
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aliquam debitis nostrum tempora quis accusamus, expedita,
                facilis ipsa odio nemo vel maxime corporis nam praesentium
                ducimus, deleniti temporibus sequi consequatur.
              </p>
            </div>
          </div>
          <div className={styles.project}>
            <p className={styles.project__duration}>2022.09 — 2022.12</p>
            <div className={styles.project__main}>
              <div className={styles.project__title}>
                <h3>밀리루틴</h3>
                <p>5인 팀 · 팀장</p>
              </div>
              <p className={styles.project__description}>
                군인의 특성을 고려한 루틴 참여 및 추천 웹서비스
              </p>
              <p className={styles.project__description}>
                2022 OSAM 군장병 해커톤 공군참모총장상 수상
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aliquam debitis nostrum tempora quis accusamus, expedita,
                facilis ipsa odio nemo vel maxime corporis nam praesentium
                ducimus, deleniti temporibus sequi consequatur.
              </p>
            </div>
          </div>
        </section>
        <section id={styles.educations}>
          <div className={styles.education}>
            <p className={styles.education__duration}>2019.03 — &nbsp;현재</p>
            <div className={styles.education__main}>
              <div className={styles.education__title}>
                <h3>고려대학교</h3>
                <p>3학년 재학 중</p>
              </div>
              <p className={styles.education__description}>정치외교학 전공</p>
              <p className={styles.education__description}>통계학 복수전공</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aliquam debitis nostrum tempora quis accusamus, expedita,
                facilis ipsa odio nemo vel maxime corporis nam praesentium
                ducimus, deleniti temporibus sequi consequatur.
              </p>
            </div>
          </div>
          <div className={styles.education}>
            <p className={styles.education__duration}>2020.02 — &nbsp;현재</p>
            <div className={styles.education__main}>
              <div className={styles.education__title}>
                <h3>42서울</h3>
                <p>심화과정 진행 중</p>
              </div>
              <p className={styles.education__description}>
                공통과정 수료 (2023.01)
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aliquam debitis nostrum tempora quis accusamus, expedita,
                facilis ipsa odio nemo vel maxime corporis nam praesentium
                ducimus, deleniti temporibus sequi consequatur.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
