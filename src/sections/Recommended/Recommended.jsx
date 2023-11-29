import Buttons from '../../components/Buttons';
import './Recommended.css';

const Recommended = ({ handleButtonClick, active }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
          <Buttons
            onClickHandler={handleButtonClick}
            value=""
            title="All"
            active={active}
          />

          <Buttons
            onClickHandler={handleButtonClick}
            value="Nike"
            title="Nike"
            active={active}
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Adidas"
            title="Adidas"
            active={active}
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Puma"
            title="Puma"
            active={active}
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Vans"
            title="Vans"
            active={active}
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
