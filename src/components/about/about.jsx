import React, { useState } from 'react'
import styles from '../about/about.module.css'
import AspirationBox from './aspirationbox';
import { Element } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const About = () => {


  return (
    <Element name='about'>
      <div className={styles.aboutWrap}>
        <div className={styles.aboutBox}>
          <div>ABOUT ME</div>
          {/* <div>
            문제 해결과 가치 있는 서비스 개발을 통해 <br />
            사용자에게 의미있는 경험을 전달하는 <br />
            개발자가 되고자 합니다.
          </div> */}
          <div>
            <ReactTyped
              strings={["문제 해결과 가치 있는 서비스 개발을 통해"]}
              typeSpeed={70} // 타이핑 속도를 느리게
              backSpeed={50} // 지우는 속도도 느리게
              backDelay={1000} // 텍스트 삭제 전 지연 시간을 길게
              loop={false}
              showCursor={false}
              className={styles.typed}
              style={{
                fontFamily: '"Do Hyeon", sans-serif',
              }}
            />
            <ReactTyped
              strings={["사용자에게 의미있는 경험을 전달하는"]}
              typeSpeed={70}
              backSpeed={50}
              startDelay={2500}
              backDelay={1000}
              loop={false}
              showCursor={false}
              className={styles.typed}
              style={{
                fontFamily: '"Do Hyeon", sans-serif',
              }}
            />
            <ReactTyped
              strings={["개발자가 되고자 합니다. "]}
              typeSpeed={70}
              backSpeed={50}
              startDelay={4500}
              loop={false}
              showCursor={false}
              className={styles.typed}
              style={{
                fontFamily: '"Do Hyeon", sans-serif',
              }}
            />
          </div>
        </div>
        <AspirationBox />
      </div>
    </Element>
  )
}

export default About
