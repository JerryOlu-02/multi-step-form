import { useContext } from 'react';
import FormContext from '../context/formdata';

const Plans = function ({ plans }) {
  const {
    // Send Data Of current Selected Plan to Context
    getSelectedPlan,
    // Set Yearly to either True or False
    setPlanTimeFrame,
    // Boolean returns true if yearly is selected
    yearly,
    // Set Path of which Component Page to show, recieves a number between 0-4
    setPath,
    // Set isSelected to index of plan thats selected
    setCurrentSelectedPlan,
    // Index of Plan Card that's currently selected
    isSelected,
  } = useContext(FormContext);

  const goBack = () => {
    setPath(1);
  };

  const nextStep = () => {
    setPath(3);
    getSelectedPlan({ ...plans[isSelected] });
  };

  const toggleYearlyPlan = function () {
    // Toggle Plans between Monthly and yearly
    setPlanTimeFrame();
  };

  const selectPlan = function (nextIndex) {
    // Set active plan depending on which plan card was clicked
    setCurrentSelectedPlan(nextIndex);
  };

  // toggle classlist depending on if yearly plan is true or false
  const yearlyClassList = yearly ? 'btn-active' : '';

  const renderedPlans = plans.map((plan, index) => {
    // Set classlist to active card if the "isSelected" value equals clicked index
    const activePlan = isSelected === index ? 'plans-card-active' : '';

    return (
      <div
        onClick={selectPlan.bind(this, index)}
        className={`plans-card ${activePlan}`}
        key={plan.type}
      >
        <img src={plan.icon} alt={`${plan.type}__icon`} />

        <div>
          <h3>{plan.type}</h3>
          <p>{yearly ? plan.paymentYearly : plan.paymentMonthly}</p>
          {yearly && <p>2 months free</p>}
        </div>
      </div>
    );
  });

  return (
    <div className="plans">
      <div className="plans-header">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="plans-parent">
        <div className="plans-container">{renderedPlans}</div>
        <div className="toggle-plans">
          <p>Monthly</p>

          <div onClick={toggleYearlyPlan}>
            <button className={yearlyClassList}></button>
          </div>

          <p>Yearly</p>
        </div>
      </div>

      <div className="button-container">
        <p onClick={goBack}>Go Back</p>
        <button onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
};
export default Plans;
