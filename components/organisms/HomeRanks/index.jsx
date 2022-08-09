import { RanksList } from "../../molecules";
import { MainButton } from "../../atoms";

const HomeRanks = ({ items }) => {
  const tiers = items[4].tiers;

  const badges = [tiers[20], tiers[23], tiers[26], tiers[27]];

  return (
    <section className="ranks">
      <div className="ranks__container">
        <h2 className="sectionHeading sectionHeading--light ranks__title">
          Ranques
        </h2>
        <RanksList tiers={badges} />
        <MainButton
          className="button--outlineWhite ranks__button "
          text="Ver todos os modos"
        />
      </div>
    </section>
  );
};

export default HomeRanks;
