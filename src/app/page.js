import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from "../components/component/navbar.js";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to WYCO!</h1>
        <p>
          WYCO is a software solution that helps you manage your interns and employees better. With WCO, you can automate the hiring process, onboard new employees, and track their performance.
        </p>
        <a href="/start-free-trial">Start Free Trial</a>
      </main>
    </div>
  )
}
