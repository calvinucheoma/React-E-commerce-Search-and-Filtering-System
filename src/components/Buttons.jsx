const Buttons = ({ onClickHandler, value, title, active }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className={`btns ${active === value ? 'btns-active' : ''}`}
    >
      {title}
    </button>
  );
};

export default Buttons;
