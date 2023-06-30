import styles from './styles.module.scss';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {  AiFillStar } from 'react-icons/ai';

import GLOBAL_CONSTANTS from '@/constants/globals'

function Qual(){
  const { career } = GLOBAL_CONSTANTS;

    return (
      <main className={`${styles.container} ${styles.typography}`}>
        <section className={styles['section-qualifications']} id="qualifications">
          <div className={`${styles['myinfo']} ${styles['header-qualification']}`}>
            <div>
              <h6 className={styles['heading-secondary']}>
                Here are my journey till now
              </h6>
              <h1 className={styles['heading-primary']}>My Journey</h1>
            </div>

            <div class={styles['resume-download']}>
              <a href="##" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </div>
          </div>

          <VerticalTimeline>

          {career.timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work vertical-date vertical-date--whiteText"
              date={item.date}
              iconStyle={item.iconStyle}
              icon={item.icon}
              contentStyle={item.contentStyle}
            >
              <h3 className="vertical-timeline-element-title vertical-title">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle vertical-subtitle">
                {item.subtitle}
              </h4>
              <p className="vertical-para">{item.description}</p>
            </VerticalTimelineElement>
            ))} 

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<AiFillStar/>}
            />
          </VerticalTimeline>
        </section>
      </main>
    );
}

export default Qual;