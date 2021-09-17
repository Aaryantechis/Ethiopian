import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="row">
        <div class="logo">
          <img src="images/EVlogo.png" alt="" />
        </div>
        <div>
          <p class="copyright">© 2021 TripAdvisor LLC All rights reserved.</p>
          <ul class="footermenus">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="footertext">
        This is the version of our website addressed to speakers of English in
        India. If you are a resident of another country <br />
        or region, please select the appropriate versio of Tripadvisor for your
        country or region in the drop-down menu. more
      </p>
    </footer>
  );
}
