import Sidebar from '../components/Sidebar';
import SuccessIcon from '../images/icon-thank-you.svg';

const SuccessPage = function () {
  return (
    <div className="app">
      <Sidebar />

      <div className="success-container">
        <img src={SuccessIcon} alt="thank_you_img" />

        <h2>Thank You!</h2>

        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
