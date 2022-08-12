import { RanksItem } from "../../atoms";

const RankGrid = ({ tiers }) => {
  return (
    <ul className="ranksPage__grid">
      {tiers.map(
        (tier) =>
          tier.largeIcon && (
            <RanksItem
              key={tier.tier}
              image={tier.largeIcon}
              name={tier.tierName}
            />
          )
      )}
    </ul>
  );
};

export default RankGrid;
