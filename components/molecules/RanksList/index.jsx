import { RanksItem } from "../../atoms";

const RanksList = ({ tiers }) => {
  return (
    <ul className="ranks__list">
      {tiers.map((tier) => (
        <RanksItem
          key={tier.tier}
          image={tier.largeIcon}
          name={tier.divisionName}
        />
      ))}
    </ul>
  );
};

export default RanksList;
