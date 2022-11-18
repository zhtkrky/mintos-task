import { useState } from "react";
import Data from "./data/currency-data";
import Container from "./components/container-component/container-component";
import CurrencyListComponent from "./components/currency-list-component/currency-list-component";
import SelectedListComponent from "./components/selected-list-component/selected-list-component";

function App() {
  // We imported the Data from the "./data/currency-data" file. The useState is a react hook to set the state and the Data is passed as a parameter.
  const [currencies, setCurrencies] = useState(Data);

  // Passing in the id of the currency we want to toggle.
  function toggleCurrency(id: number) {
    // Mapping over the currencies array and returning a new array with the updated currency.
    const updatedCurrencies = currencies.map((currency) => {
      // Checking if the id of the currency matches the id we passed in.
      if (currency.id === id) {
        // If it does, we are toggling the checked property.
        currency.checked = !currency.checked;
      }
      // If it doesn't, we are returning the currency as is.
      return currency;
    });
    // Setting the currencies state to the updatedCurrencies array.
    setCurrencies(updatedCurrencies);
  }

  // 1. Passing the currencies array and the toggleCurrency function as props to the SelectedList and CurrencyList components.
  // 2. The SelectedList component will display a list of all currencies that are toggled on / selected.
  // 3. The CurrencyList component will display a list of all currencies that are toggled on/off.
  return (
    <Container>
      <SelectedListComponent currencies={currencies} toggleCurrency={toggleCurrency} />
      <CurrencyListComponent currencies={currencies} toggleCurrency={toggleCurrency} />
    </Container>
  );
}

export default App;
