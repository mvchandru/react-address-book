import classes from "./styles.module.scss";

const InputSelect = ({
  fieldType,
  fieldDisplayName,
  fieldName,
  formik,
  isDisabled,
  options,
}) => {
  return (
    <div className={classes.fieldControl}>
      <label htmlFor={fieldName}>{fieldDisplayName}</label>
      <select
        type={fieldType}
        id={fieldName}
        disabled={isDisabled}
        {...formik.getFieldProps(fieldName)}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.label}
          </option>
        ))}
      </select>
      {formik.errors[fieldName] && (
        <div className={classes.validation}>{formik.errors[fieldName]}</div>
      )}
    </div>
  );
};

export default InputSelect;
