import { RanksItem } from "../../atoms";

const RankGrid = ({ tiers }) => {
  return (
    <ul className="ranks__grid">
      <RanksItem
        key={tiers[0].tier}
        image={tiers[0].largeIcon}
        name={tiers[0].tierName}
        className="ranks__item--red ranks__item--first"
        nameClassName="ranks__name--dark"
      />
      {tiers.map(
        (tier) =>
          tier.largeIcon &&
          tier.tier !== 0 &&
          tier.tier !== tiers.length - 1 && (
            <RanksItem
              key={tier.tier}
              image={tier.largeIcon}
              name={tier.tierName}
              className="ranks__item--red"
              nameClassName="ranks__name--dark"
            />
          )
      )}
      <RanksItem
        key={tiers[tiers.length - 1].tier}
        image={tiers[tiers.length - 1].largeIcon}
        name={tiers[tiers.length - 1].tierName}
        className="ranks__item--red"
        nameClassName="ranks__name--dark ranks__item--last"
      />
    </ul>
  );
};

export default RankGrid;
