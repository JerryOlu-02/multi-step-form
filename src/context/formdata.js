import { createContext } from 'react';
import { useState, useCallback } from 'react';

const FormContext = createContext();

const Provider = function ({ children }) {
  const [currentPath, setCurrentPath] = useState(1);

  // Selected Plan Data
  const [selectedPlan, setSelectedPlan] = useState({});

  // Selected Addons Data
  const [selectedAddOn, setSelectedAddOn] = useState([]);

  const [yearly, setYearly] = useState(false);

  // Active Plan
  const [isSelected, setIsSelected] = useState(0);

  // Active Addon
  const [activeAddOn, setActiveAddOn] = useState([0, 1]);

  // Set Plan to path index it recieves from the component it's called in
  const setPath = function (path) {
    setCurrentPath(path);
  };

  // Set Active Plan to index it recieves from Plans Component
  const setCurrentSelectedPlan = function (index) {
    setIsSelected(index);
  };

  // Set Active Addons to index it recieves from AddOns Component
  const setCurrentActiveAddon = function (nextAddon) {
    const removeSelectedIndex = activeAddOn.filter((addon) => {
      return addon !== nextAddon;
    });

    const addSelectedIndex = activeAddOn.filter((addon) => {
      return addon !== nextAddon;
    });

    setActiveAddOn((currentSelectedAddOnIndex) => {
      return currentSelectedAddOnIndex.includes(nextAddon)
        ? [...removeSelectedIndex]
        : [...addSelectedIndex, nextAddon];
    });
  };

  // console.log(selectedPlan);
  // console.log(selectedAddOn);

  const getSelectedPlan = useCallback((plan) => {
    setSelectedPlan({ ...plan });
  }, []);

  const getSelectedAddOn = function (addon) {
    setSelectedAddOn([...addon]);
  };

  const setPlanTimeFrame = function () {
    setYearly(!yearly);
  };

  const formValues = {
    setPath,
    getSelectedPlan,
    getSelectedAddOn,
    setPlanTimeFrame,
    setCurrentSelectedPlan,
    setCurrentActiveAddon,
    yearly,
    selectedPlan,
    selectedAddOn,
    currentPath,
    isSelected,
    activeAddOn,
  };

  return (
    <FormContext.Provider value={formValues}>{children}</FormContext.Provider>
  );
};

export { Provider };
export default FormContext;
