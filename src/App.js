import InfoPage from './pages/InfoPage';
import PlanPage from './pages/PlanPage';
import AddOnPage from './pages/AddOnPage';
import SummaryPage from './pages/SummaryPage';
import { useContext } from 'react';
import FormContext from './context/formdata';
import SuccessPage from './pages/SuccessPage';

const App = function () {
  const { currentPath } = useContext(FormContext);

  if (currentPath === 1) {
    return <InfoPage />;
  } else if (currentPath === 2) {
    return <PlanPage />;
  } else if (currentPath === 3) {
    return <AddOnPage />;
  } else if (currentPath === 4) {
    return <SummaryPage />;
  } else if (currentPath === 5) {
    return <SuccessPage />;
  }
};

export default App;
