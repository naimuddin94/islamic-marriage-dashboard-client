import Card from '../components/shared/Card';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Card title="Total Users" value={1170} />
      <Card title="Total Packages" value={3} />
      <Card title="Pending BookRestaurant" value={31} />
      <Card title="Pending BookKaziOffice" value={4} />
      <Card title="Pending Order" value={2} />
      <Card title="Confirm Order" value={0} />
      <Card title="Deliverd Order" value={10} />
      <Card title="Return Order" value={1} />
      <Card title="Approve Subscription" value={1} />
      <Card title="Pending Subscription" value={0} />
    </div>
  );
};

export default Home;
