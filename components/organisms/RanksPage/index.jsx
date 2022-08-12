import { RankGrid } from "../../molecules";

const RanksPage = ({ tiers }) => {
  return (
    <section className="ranksPage">
      <h1 className="sectionHeading ranksPage__title">Ranques</h1>
      <RankGrid tiers={tiers} />
    </section>
  );
};

export default RanksPage;
