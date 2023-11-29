import Input from '../../../components/Input';
import './Colors.css';

const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          type="radio"
          value=""
          onChange={handleRadioChange}
          name="test3"
        />
        <span className="checkmark all"></span>All
      </label>

      <Input
        value="black"
        title="Black"
        color="black"
        name="test3"
        handleRadioChange={handleRadioChange}
      />
      <Input
        value="blue"
        title="Blue"
        color="blue"
        name="test3"
        handleRadioChange={handleRadioChange}
      />
      <Input
        value="red"
        title="Red"
        color="red"
        name="test3"
        handleRadioChange={handleRadioChange}
      />
      <Input
        value="green"
        title="Green"
        color="green"
        name="test3"
        handleRadioChange={handleRadioChange}
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          value="white"
          onChange={handleRadioChange}
          name="test3"
        />
        <span
          className="checkmark"
          style={{ background: 'white', border: '2px solid black' }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
