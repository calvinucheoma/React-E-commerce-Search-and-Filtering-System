import Input from '../../../components/Input';
import './Category.css';

const Category = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value=""
            onChange={handleRadioChange}
            name="test"
          />
          <span className="checkmark"></span>All
        </label>

        <Input
          value="sneakers"
          title="Sneakers"
          name="test"
          handleRadioChange={handleRadioChange}
        />
        <Input
          value="flats"
          title="Flats"
          name="test"
          handleRadioChange={handleRadioChange}
        />
        <Input
          value="sandals"
          title="Sandals"
          name="test"
          handleRadioChange={handleRadioChange}
        />
        <Input
          value="heels"
          title="Heels"
          name="test"
          handleRadioChange={handleRadioChange}
        />
      </div>
    </div>
  );
};

export default Category;
