import { RankGrid } from "../../molecules";

const RanksPage = ({ tiers }) => {
  console.log(tiers);
  let tiersAux = "";

  const returnTiers = tiers.map((tier) => {
    if (tiersAux === "") {
      console.log("tierAux vazio");
      tiersAux = tier.divisionName;
      return (
        <li className="ranks__tierItem" key={tier.tier}>
          {tier.divisionName}
        </li>
      );
    }
    if (
      tiersAux !== tier.divisionName &&
      tier.divisionName !== "Unused1" &&
      tier.divisionName !== "Unused2"
    ) {
      console.log(tiersAux);
      console.log("tierAux");
      tiersAux = tier.divisionName;
      return (
        <li className="ranks__tierItem" key={tier.tier}>
          {tier.divisionName}
        </li>
      );
    }
  });

  return (
    <section className="ranks ranks--light">
      <h1 className="sectionHeading ranks__title">Ranques</h1>
      <div className="ranks__content">
        <div className="ranks__container ranks__container--small">
          <ul className="ranks__tiers">{returnTiers}</ul>
        </div>
        <div className="ranks__container ranks__container--medium">
          <RankGrid tiers={tiers} />
        </div>
      </div>
    </section>
  );
};

export default RanksPage;
