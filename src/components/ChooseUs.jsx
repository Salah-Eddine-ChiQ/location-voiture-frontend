import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="voiture_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Pourquoi nous choisir</h4>
                <h2>Les meilleures offres que vous trouverez jamais</h2>
                <p>
                  Découvrez les meilleures offres avec nos tarifs imbattables.
                  Nous nous engageons à vous offrir le meilleur rapport qualité/prix,
                  afin que vous puissiez profiter de services et produits de qualité
                  sans vous ruiner. Nos offres sont conçues pour vous offrir une
                  expérience de location exceptionnelle. Ne ratez pas l’occasion
                  de faire des économies !
                </p>
                <a href="#home">
                  Voir les détails &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="voiture-img" />
                  <div className="text-container__right__box__text">
                    <h4>Conduite à travers le pays</h4>
                    <p>
                      Vivez une expérience de conduite inoubliable avec nos véhicules
                      haut de gamme pour vos aventures à travers le pays.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box2} alt="pièce-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tarifs tout compris</h4>
                    <p>
                      Obtenez tout ce dont vous avez besoin en un seul tarif clair
                      et pratique grâce à notre politique de prix tout compris.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box3} alt="pièce-img" />
                  <div className="text-container__right__box__text">
                    <h4>Pas de frais cachés</h4>
                    <p>
                      Roulez l esprit tranquille grâce à notre politique de
                      transparence. Aucun frais caché, tout est clair et honnête.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
