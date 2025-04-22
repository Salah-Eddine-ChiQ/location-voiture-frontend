function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>LOCATION</span> Voiture
              </li>
              <li>
                Nous proposons une large gamme de véhicules pour tous vos besoins de conduite. Nous avons la voiture parfaite pour vous.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (212)6-42899982
                </a>
              </li>

              <li>
                <a href="mailto:carrental@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; chiquiri2003@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://devrahuls.vercel.app/"
                >
                  Design par ❤️ Salah Eddine
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Entreprise</li>
              <li>
                <a href="#home">Galerie</a>
              </li>
              <li>
                <a href="#home">Carrières</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Notre fonctionnement</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Horaires</li>
              <li>Lun - Ven : 9h00 - 21h00</li>
              <li>Samedi : 9h00 - 19h00</li>
              <li>Dimanche : Fermé</li>
            </ul>

            <ul className="footer-content__2">
              <li>Abonnement</li>
              <li>
                <p>Abonnez-vous pour recevoir les dernières nouvelles et mises à jour.</p>
              </li>
              <li>
                <input type="email" placeholder="Entrez votre adresse email" />
              </li>
              <li>
                <button className="submit-email">Envoyer</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
