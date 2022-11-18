import CurrencyInput from "../checkbox-component/checkbox-component";
import CurrencyDataTypes from "../../types/data.type";
import "./currency-list-component.css";

// 1. The component accepts two props. The currencies prop is an array of objects that will be mapped through and the toggleCurrency prop will be called when the user clicks on the checkbox.
// 2. The component then maps through the currencies prop and returns a CurrencyInput component for each currency.
// 3. The CurrencyInput component is a simple checkbox component that accepts some props, including the checked prop, which will be used to determine if the checkbox is checked or not.
// 4. The onChange prop will be called when the user clicks on the checkbox. It calls the toggleCurrency function which will be explained in the next section.

interface CurrencyListProps {
  currencies: CurrencyDataTypes[];
  toggleCurrency: (e: any) => void;
}
const CurrencyListComponent = ({ currencies, toggleCurrency }: CurrencyListProps) => {
  return (
    <div className="currency-list">
      {currencies &&
        currencies.map((currency) => (
          <CurrencyInput
            key={currency.name}
            name={currency.name}
            label={currency.name}
            checked={currency.checked}
            onChange={() => {
              toggleCurrency(currency.id);
            }}
          />
        ))}
    </div>
  );
};

export default CurrencyListComponent;
