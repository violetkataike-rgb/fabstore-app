import './Footer.css'

function Footer(){
    return(
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()}. FabStore. All right reserved.</p>
  </aside>
</footer>
    )
}

export default Footer;