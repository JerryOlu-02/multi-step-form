import { useContext } from 'react';
import FormContext from '../context/formdata';

const AddOns = function ({ addons }) {
  const {
    yearly,

    // Send Selected AddOn data to context
    getSelectedAddOn,

    // Set Path of which Component Page to show, recieves a number between 0-4
    setPath,

    // Current Selected AddOns
    activeAddOn,

    // Set Selected AddOns
    setCurrentActiveAddon,
  } = useContext(FormContext);

  const goBack = () => {
    setPath(2);
  };

  const nextStep = () => {
    setPath(4);

    const addOnArray = activeAddOn.map((addonIndex) => {
      return addons[addonIndex];
    });

    getSelectedAddOn(addOnArray);
  };

  // console.log(activeAddOn);

  const selectAddOn = function (nextIndex) {
    setCurrentActiveAddon(nextIndex);
  };

  const renderdAddons = addons.map((addon, index) => {
    const isAddOnSelected = activeAddOn.includes(index);

    const activeAddOnClasslist = isAddOnSelected && 'addons-show-active';

    const activeCheck = isAddOnSelected && 'addons-check-active';

    return (
      <div
        onClick={selectAddOn.bind(this, index)}
        key={addon.name}
        className={`addons-show ${activeAddOnClasslist}`}
      >
        <div>
          <div className={`addons-check ${activeCheck}`}></div>

          <div className="addons-show-content">
            <h3>{addon.name}</h3>
            <p>{addon.plan}</p>
          </div>
        </div>

        <p className="addons-price">
          {yearly ? addon.priceYearly : addon.priceMonthly}
        </p>
      </div>
    );
  });

  return (
    <div className="addons">
      <div className="addons-header">
        <h2>Pick add-ons</h2>
        <p>Add-ons help improve your gaming experience.</p>
      </div>

      <div className="addons-list">{renderdAddons}</div>

      <div className="addons-button-container">
        <p onClick={goBack}>Go Back</p>
        <button onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default AddOns;
