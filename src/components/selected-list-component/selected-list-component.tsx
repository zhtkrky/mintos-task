import SelectedComponent from "../selected-component/selected-component";
import CurrencyDataTypes from "../../types/data.type";
import "./selected-list-component.css";

interface SelectedListComponentProps {
  currencies: CurrencyDataTypes[];
  toggleCurrency: (e: any) => void;
}
// Define the SelectedListComponent function and pass the props as the paramete and destructure the props
const SelectedListComponent = ({ currencies, toggleCurrency }: SelectedListComponentProps) => {
  // Returns the list of currencies that are checked
  return (
    <div className="selected-list">
      {currencies.map(
        (currency) =>
          currency.checked && (
            <SelectedComponent
              key={currency.name}
              currency={currency}
              onClick={() => {
                toggleCurrency(currency.id);
              }}
            />
          ),
      )}
    </div>
  );
};

export default SelectedListComponent;
