import styles from '../styles/Home.module.css'
import Footer from '../src/component/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Footer />
      </main>
    </div>
  )
}