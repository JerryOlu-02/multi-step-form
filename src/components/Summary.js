import { useContext } from 'react';
import FormContext from '../context/formdata';

const Summary = function () {
  const { yearly, selectedPlan, selectedAddOn, setPath } =
    useContext(FormContext);

  const changePlan = function () {
    setPath(2);
  };

  const goBack = () => {
    setPath(3);
  };

  const nextStep = () => {
    setPath(5);
  };

  const renderAddOns = selectedAddOn.map((addon) => {
    return (
      <div key={addon.name}>
        <p>{addon.name}</p>
        <p>+{yearly ? addon?.priceYearly : addon?.priceMonthly}</p>
      </div>
    );
  });

  const totalAddonPrice = selectedAddOn.reduce((total, addon) => {
    return yearly ? total + addon.yearlyNumber : total + addon.monthlyNumber;
  }, 0);

  return (
    <div className="summary">
      <div className="summary-header">
        <h2>Pick add-ons</h2>
        <p>Add-ons help improve your gaming experience.</p>
      </div>

      <div className="summary-container">
        <div className="selected-plan-container">
          <div>
            <h3>
              {`${selectedPlan?.type} (${yearly ? 'Yearly' : 'Monthly'})`}
            </h3>

            <p onClick={changePlan}>Change</p>
          </div>

          <p>
            {yearly
              ? selectedPlan?.paymentYearly
              : selectedPlan?.paymentMonthly}
          </p>
        </div>

        <div className="addon-container">{renderAddOns}</div>
      </div>

      <div className="total-price-container">
        <p>Total(per {`${yearly ? 'year' : 'month'}`})</p>

        <h3>
          +$
          {yearly
            ? selectedPlan.yearlyNumber + totalAddonPrice
            : selectedPlan.monthlyNumber + totalAddonPrice}
          /{yearly ? 'yr' : 'mo'}
        </h3>
      </div>

      <div className="summary-button-container">
        <p onClick={goBack}>Go Back</p>
        <button onClick={nextStep}>Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
