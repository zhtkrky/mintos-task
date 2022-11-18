import classNames from "classnames";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import "./checkbox-component.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  children?: ReactNode;
}

// Props passed to the component are coming from the interface InputProps. Props are destructured to get the label, checked, onChange, children and the rest of the props.
const CurrencyInput: FC<InputProps> = ({ label, checked, onChange, children, ...props }) => {
  // A function called classNames is imported from the classNames library. The function classNames is used to add the class name input-wrapper-checked to the label element in case the checked prop is true.
  const className = classNames("input-wrapper", {
    "input-wrapper-checked": checked,
  });

  return (
    <>
      {label && (
        <label className={className}>
          {label}
          <input {...props} type={"checkbox"} checked={checked} onChange={onChange} />
          <span className="checkmark" />
        </label>
      )}
    </>
  );
};

export default CurrencyInput;
