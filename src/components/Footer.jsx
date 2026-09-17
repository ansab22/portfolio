import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}
