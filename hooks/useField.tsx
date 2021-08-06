import { useState, InputHTMLAttributes } from "react";

export const useField = (inputProps: InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState("");

  const onChange = ({ target }: any) => {
    setValue(target.value);
  };

  return { ...inputProps, value, onChange } as IField;
};
