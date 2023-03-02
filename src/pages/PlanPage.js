import Plans from '../components/Plans';
import Sidebar from '../components/Sidebar';
import ArcadeImg from '../images/icon-arcade.svg';
import AdvancedImg from '../images/icon-advanced.svg';
import ProImg from '../images/icon-pro.svg';

const PlanPage = function () {
  const plans = [
    {
      type: 'Arcade',
      paymentMonthly: '$9/mo',
      paymentYearly: '$90/yr',
      icon: ArcadeImg,
      yearlyNumber: 90,
      monthlyNumber: 9,
    },
    {
      type: 'Advanced',
      paymentMonthly: '$12/mo',
      paymentYearly: '$120/yr',
      icon: AdvancedImg,
      yearlyNumber: 120,
      monthlyNumber: 12,
    },
    {
      type: 'Pro',
      paymentMonthly: '$15/mo',
      paymentYearly: '$150/yr',
      icon: ProImg,
      yearlyNumber: 150,
      monthlyNumber: 15,
    },
  ];

  return (
    <div className="app">
      <Sidebar />
      <Plans plans={plans} />
    </div>
  );
};
export default PlanPage;
