import InputText from "../../atoms/InputText";
import InputSelect from "../../atoms/InputSelect";
import Button from "../../atoms/Button";

export const FormType = {
  New: "new",
  Edit: "edit",
  View: "view",
};

const ContactForm = ({ formik, formType }) => {
  const isDisabled = formType === FormType.View;
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputText
        fieldDisplayName="First Name"
        fieldName="firstName"
        fieldType="text"
        formik={formik}
        isDisabled={isDisabled}
      />
      <InputText
        fieldDisplayName="Last Name"
        fieldName="lastName"
        fieldType="text"
        formik={formik}
        isDisabled={isDisabled}
      />
      <InputText
        fieldDisplayName="Phone"
        fieldName="phone"
        fieldType="number"
        formik={formik}
        isDisabled={isDisabled}
      />
      <InputText
        fieldDisplayName="Email"
        fieldName="email"
        fieldType="email"
        formik={formik}
        isDisabled={isDisabled}
      />
      <InputSelect
        fieldDisplayName="Status"
        fieldName="type"
        formik={formik}
        isDisabled={isDisabled}
        options={[
          { label: "Private", name: "Private" },
          { label: "Work", name: "Work" },
        ]}
      />
      {formType === FormType.New && <Button type="submit" name="Add" />}
      {formType === FormType.Edit && <Button type="submit" name="Save" />}
    </form>
  );
};

export default ContactForm;
