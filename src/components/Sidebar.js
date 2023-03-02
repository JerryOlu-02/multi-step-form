import { useContext } from 'react';
import FormContext from '../context/formdata';

const Sidebar = function () {
  const { currentPath } = useContext(FormContext);

  const sidebar = [
    { number: 'STEP 1', stepText: 'YOUR INFO', path: 1 },
    { number: 'STEP 2', stepText: 'SELECT PLAN', path: 2 },
    { number: 'STEP 3', stepText: 'ADD-ONS', path: 3 },
    { number: 'STEP 4', stepText: 'SUMMARY', path: 4 },
  ];

  const renderedList = sidebar.map((step, index) => {
    const activeClass = currentPath === step.path ? 'active-sidebar' : '';

    return (
      <div className="sidebar-div" key={step.stepText}>
        <div className={`sidebar-number ${activeClass}`}>{index + 1}</div>

        <div className="sidebar-content">
          <p>{step.number}</p>
          <h4>{step.stepText}</h4>
        </div>
      </div>
    );
  });

  return <div className="sidebar">{renderedList}</div>;
};

export default Sidebar;
