import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Questions Fréquemment Posées</h2>
              <p>
                Questions fréquentes sur le processus de réservation de voitures
                de location sur notre site : réponses aux préoccupations et
                interrogations courantes.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Pourquoi comparer les offres de location de voitures ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Comparer les offres de location est essentiel pour trouver celle
                  qui correspond à votre budget et vos besoins. Cela vous permet
                  d’obtenir le meilleur rapport qualité-prix, que ce soit en
                  termes de services, de prix, ou de modèle de véhicule.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Comment trouver des offres de location de voitures ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Vous pouvez rechercher des offres sur Internet via des sites
                  comme Kayak, Expedia ou encore Google. Pensez aussi à vous
                  inscrire aux newsletters ou à suivre les agences sur les
                  réseaux sociaux pour ne rater aucune promotion.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Comment obtenir des prix de location si bas ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Réservez à l'avance : cela permet souvent d’avoir des tarifs plus
                  intéressants. Comparez les agences : utilisez des comparateurs en
                  ligne. Cherchez des codes promos ou réductions. Enfin, louer en
                  dehors des aéroports peut parfois être plus économique.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
