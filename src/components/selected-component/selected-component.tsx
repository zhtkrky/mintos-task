import "./selected-component.css";
import CurrencyDataTypes from "../../types/data.type";

interface SelectedComponentProps {
  currency: CurrencyDataTypes;
  onClick: (e: any) => void;
}

const SelectedComponent = ({ currency, onClick }: SelectedComponentProps) => {
  return (
    <>
      <div className="selected">
        {currency.name}
        <div className="selected-corner">
          <button onClick={onClick}>X</button>
        </div>
      </div>
    </>
  );
};

export default SelectedComponent;
