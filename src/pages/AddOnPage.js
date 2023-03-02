import AddOns from '../components/AddOns';
import Sidebar from '../components/Sidebar';

const AddOnPage = function () {
  const addons = [
    {
      name: 'Online service',
      plan: 'Access to multiplayer games',
      priceYearly: '$10/yr',
      priceMonthly: '$1/mo',
      yearlyNumber: 10,
      monthlyNumber: 1,
    },
    {
      name: 'Larger storage',
      plan: 'Extra 1TB of cloud save',
      priceYearly: '$20/yr',
      priceMonthly: '$2/mo',
      yearlyNumber: 20,
      monthlyNumber: 2,
    },
    {
      name: 'Customizable Profile',
      plan: 'Custom theme on your profile',
      priceYearly: '$20/yr',
      priceMonthly: '$2/mo',
      yearlyNumber: 20,
      monthlyNumber: 2,
    },
  ];

  return (
    <div className="app">
      <Sidebar />
      <AddOns addons={addons} />
    </div>
  );
};
export default AddOnPage;
