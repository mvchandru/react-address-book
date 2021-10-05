import classes from "./styles.module.scss";

const InputText = ({
  fieldType,
  fieldDisplayName,
  fieldName,
  formik,
  isDisabled,
}) => {
  return (
    <div className={classes.fieldControl}>
      <label htmlFor={fieldName}>{fieldDisplayName}</label>
      <input
        type={fieldType}
        id={fieldName}
        disabled={isDisabled}
        {...formik.getFieldProps(fieldName)}
      />
      {formik.errors[fieldName] && (
        <div className={classes.validation}>{formik.errors[fieldName]}</div>
      )}
    </div>
  );
};

export default InputText;
