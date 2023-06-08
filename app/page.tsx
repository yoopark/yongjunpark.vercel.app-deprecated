import { GithubLink } from './components/GithubLink';
import { Typed } from './components/Typed';
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
          <div>
            <Typed
              strings={[
                '정보사회에 태어난 것에 감사하는',
                '창의적인 생각에 특히 반응하는',
                '깔끔한 걸 좋아하는',
                '같은 유형에 두번 당하지 않는',
                '대부분의 시간을 몰입해 있는',
              ]}
            />
            <span>&nbsp;개발자</span>
          </div>
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
          <h2>소개</h2>
          <div className={styles.about__container}>
            <p>
              외국어고등학교를 다니면서도 『C언어의 정석』을 취미로 읽을 정도로
              항상 컴퓨터를 다루는 걸 좋아했지만, 개발자를 직업으로 삼을 수
              있다는 생각을 대학교 와서야 했습니다. 그저 놀 생각으로 간
              42서울에서 리눅스 명령어를 입력하던 순간 평생 좋아할 수 있는 일을
              찾았다는 안도감이 들었습니다.
            </p>
            <p>
              대부분의 시간을 코딩으로 보내지만, 심심할 땐 종종 피아노를 칩니다.
              철학이나 국제정치, 미래학을 주제로 한 책을 즐겨 읽습니다.
              정보사회라서 벌어지는 일들을 충실히 이해하고, 새롭게 등장하는
              기술을 즐기며 살아가고 싶습니다.
            </p>
          </div>
        </section>
        <section id={styles.projects}>
          <h2>프로젝트</h2>
          <div className={styles.projects__container}>
            <div className={styles.project}>
              <p className={styles.project__duration}>2023.02 — 현재</p>
              <div className={styles.project__main}>
                <div className={styles.project__title}>
                  <h3>42Stat</h3>
                  <p>4인 팀 · 프론트엔드 개발</p>
                  <GithubLink to="https://github.com/42Statistics/42Stat-Frontend" />
                </div>
                <p className={styles.project__highlight}>
                  42서울 교육생의 통계를 보여주는 대시보드형 웹서비스
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
                  <h3>Cerebri Class</h3>
                  <p>1인 개발</p>
                  <GithubLink to="https://github.com/storyboard-lab/cerebri-class" />
                </div>
                <p className={styles.project__highlight}>
                  영단어를 입력하면 문제를 생성하여 Word 학습지를 제작해주는
                  서비스
                </p>
                <p className={styles.project__highlight}>
                  스타트업으로부터 MVP 제작 요청을 받아 간단히 개발
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
                  <h3>LastPong</h3>
                  <p>4인 팀 · 프론트엔드 개발</p>
                  <GithubLink to="https://github.com/lev-Zero/lastpong" />
                </div>
                <p className={styles.project__highlight}>
                  Socket.io를 이용하여 게임, 채팅, DM을 구현한 SPA 웹서비스
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
                  <h3>밀리루틴</h3>
                  <p>5인 팀 · 팀장</p>
                  <GithubLink to="https://github.com/osamhack2022-v2/WEB_AI_MILIROUTINE_MILIROUTINE" />
                </div>
                <p className={styles.project__highlight}>
                  군인의 특성을 고려한 루틴 참여 및 추천 웹서비스
                </p>
                <p className={styles.project__highlight}>
                  2022 OSAM 군장병 해커톤 공군참모총장상 수상
                </p>
                <a
                  href="https://yoopark.github.io/miliroutine-retrospect"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  2022 OSAM 군장병 해커톤 후기
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
          <h2>교육</h2>
          <div className={styles.educations__container}>
            <div className={styles.education}>
              <p className={styles.education__duration}>2019.03 — 현재</p>
              <div className={styles.education__main}>
                <div className={styles.education__title}>
                  <h3>고려대학교</h3>
                  <p>3학년 재학 중</p>
                </div>
                <p className={styles.education__highlight}>정치외교학 전공</p>
                <p className={styles.education__highlight}>통계학 복수전공</p>
              </div>
            </div>
            <div className={styles.education}>
              <p className={styles.education__duration}>2020.02 — 현재</p>
              <div className={styles.education__main}>
                <div className={styles.education__title}>
                  <h3>42서울</h3>
                  <p>심화과정 진행 중</p>
                </div>
                <p className={styles.education__highlight}>
                  공통과정 수료 (2023.01)
                </p>
                <a
                  href="https://yoopark.github.io/42-interview"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  제주도에서 온 비전공 청년의 개발자 도전기
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <p>감사합니다.</p>
          <p>© 2023. yongjun park</p>
          <p>Next.js 13과 CSS Module로 작성하여 Vercel로 배포함. </p>
        </footer>
      </main>
    </div>
  );
}
