import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/users/action";
import SlideOut from "../../molecules/SlideOut";
import ContactForm, { FormType } from "../../molecules/ContactForm";
import CancelIcon from "../../atoms/CancelIcon";
import { validate } from "../../../utils/validations";
import { getFormattedUserObject } from "../../../utils/helpers";
import classes from "./styles.module.scss";

const NewContact = ({ toggleContactForm }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      type: "Private",
    },
    validate,
    onSubmit: (values) => {
      const newUser = getFormattedUserObject(values);
      dispatch(addUser(newUser));
      toggleContactForm();
    },
  });

  return (
    <SlideOut toggleContactForm={toggleContactForm}>
      <div className={classes.newContact}>
        <div className={classes.section}>
          <h2 className={classes.title}>New Contact</h2>
          <CancelIcon toggleContactForm={toggleContactForm} />
        </div>
        <ContactForm formik={formik} formType={FormType.New} />
      </div>
    </SlideOut>
  );
};

export default NewContact;
