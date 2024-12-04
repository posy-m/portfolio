import React from 'react'
import styles from './stack.module.css'
import { Element } from 'react-scroll';
import html from '../../stackimg/HTML.svg'
import css from '../../stackimg/CSS.svg'
import javascript from '../../stackimg/JavaScript.svg'
import typescript from '../../stackimg/TypeScript.svg'
import mysql from '../../stackimg/MySQL-Dark.svg'
import nodejs from '../../stackimg/NodeJS.svg'
import nestjs from '../../stackimg/NestJS-Dark.svg'
import react from '../../stackimg/React-Dark.svg'
import nextjs from '../../stackimg/NextJS-Light.svg'
import tailwindcss from '../../stackimg/TailwindCSS-Dark.svg'



const Stack = () => {
  return (
    <Element name="stack">
      <div className={styles.stackTop}>
        <div className={styles.stackBox}>STACK</div>
        <div>
          <div className={styles.stackLayout}>
            <div className={styles.titleWithLine}>
              <span className={styles.stackTitle}>Frontend</span>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.stackGrid}>
              <div className={styles.stackWrap}>
                <img src={html} alt="HTML" />
                <ul>
                  <li>웹 표준을 준수하며 브라우저에서 웹 콘텐츠를 표현할 수 있습니다.</li>
                </ul>
              </div>
              <div className={styles.stackWrap}>
                <img src={css} alt="css" />
                <ul>
                  <li>웹페이지의 디자인과 레이아웃을 통해 웹페이지의 시각적 표현을 할 수 있습니다.</li>
                </ul>
              </div>
              <div className={styles.stackWrap}>
                <img src={javascript} alt="javascript" />
                <ul>
                  <li>ES6 문법을 사용하여 비동기 처리를 할 수 있습니다.</li>
                </ul>
              </div>
              <div className={styles.stackWrap}>
                <img src={typescript} alt="typescript" />
                <ul>
                  <li>타입 검사를 통해 오류를 줄여 코드의 가독성을 높일 수 있습니다</li>
                </ul>
              </div>
              <div className={styles.stackWrap}>
                <img src={react} alt="react" />
                <ul>
                  <li>함수형 컴포넌트에서 상태관리와 생명주기 메서드를 사용할 수 있습니다.</li>
                </ul>
              </div>
              <div className={styles.stackWrap}>
                <img src={nextjs} alt="nextjs" />
                <ul>
                  <li>파일 기반 라우팅을 통해 페이지를 관리할 수 있습니다.</li>
                </ul>
              </div>
              <div className={styles.stackWrap}>
                <img src={tailwindcss} alt="tailwindcss" />
                <ul>
                  <li>
                    Tailwind CSS로 유틸리티 클래스를 활용해 직관적으로 스타일링하며, 반응형 디자인</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.stackLayout}>
          <div className={styles.titleWithLine}>
            <span className={styles.stackTitle}>Backend</span>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.stackGrid}>
            <div className={styles.stackWrap}>
              <img src={nodejs} alt="nodejs" />
              <ul>
                <li>의존성 주입 기능을 활용해 객체간의 의존 관계를 이해하며 사용할 수 있습니다.</li>
              </ul>
            </div>
            <div className={styles.stackWrap}>
              <img src={nestjs} alt="nestjs" />
              <ul>
                <li>데코레이터를 사용하여 의존성 주입을 통해 코드를 효율적으로 관리할 수 있습니다. </li>
              </ul>
            </div>
            <div className={styles.stackWrap}>
              <img src={mysql} alt="mysql" />
              <ul>
                <li>데이터를 효율적으로 저장하고 관리할 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </Element>
  );
};

export default Stack;
