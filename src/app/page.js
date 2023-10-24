import styles from './page.module.css'
import Button from './components/button'
import Banner from './components/banner'
import Heading from './components/heading'
import Paragraph from './components/paragraph'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.wrapperGrid}>
       
        <div className={styles.banner}>
            <Banner url="/banner.png"
              width={530}
              height={718}
            />
        </div>

        <div className={styles.content}>
            <Heading heading="Turn Your Website Into Your Best Sales Person"/>
            <div className={styles.contentPara}>
              <Paragraph paragraph="Triple your sales with a pixel-perfect website. At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business." />
              <div className={styles.buttonGrid}>
                <Button text="Talk to Us" />
                <Button text="See Portfolio" />
              </div>
            </div>
        </div>
      </div>

      
    </main>
  )
}
