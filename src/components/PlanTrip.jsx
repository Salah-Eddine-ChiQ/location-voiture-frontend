import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Planifiez votre voyage maintenant</h3>
              <h2>Location de voiture rapide et facile</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Sélectionnez une voiture</h3>
                <p>
                  Nous proposons une large gamme de véhicules pour tous vos
                  besoins de conduite. Nous avons la voiture parfaite pour
                  répondre à vos besoins.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contactez un opérateur</h3>
                <p>
                  Nos opérateurs expérimentés et amicaux sont toujours prêts à
                  répondre à vos questions ou préoccupations.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Conduisons</h3>
                <p>
                  Que vous preniez la route, nous avons ce qu'il vous faut avec
                  notre large gamme de voitures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
