import "./FooterStyles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div></div>
        <div>
          <h1>K-Travel</h1>
          <p>See The Kashmir Like Never Before</p>
        </div>
        <a href="/">
          <i class="fa-brands fa-facebook"></i>{" "}
        </a>

        <a href="/">
          <i class="fa-brands fa-square-instagram"></i>{" "}
        </a>

        <a href="/">
          <i class="fa-brands fa-twitter"></i>{" "}
        </a>

        <a href="/">
          <i class="fa-brands fa-youtube"></i>{" "}
        </a>
        <a href="/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className="bottom ">
        <div>
          <h4>Work</h4>
          <a href="/"> Sites </a>
          <a href="/"> pricing </a>
          <a href="/"> Stories </a>
          <a href="/"> Places </a>
        </div>
        <div>
          <h4>Socials</h4>
          <a href="/"> Facebook </a>
          <a href="/"> instagram </a>
          <a href="/"> Twitter </a>
          <a href="/"> Youtube </a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/"> Customer Care </a>
          <a href="/"> Chat Online </a>
          <a href="/"> SMS </a>
          <a href="/"> WhatsUp </a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/"> Terms & conditions </a>
          <a href="/"> Privacy </a>
          <a href="/"> Network </a>
          <a href="/"> Data </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
