import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updateUser } from "../../../redux/users/action";
import ContactForm, { FormType } from "../../molecules/ContactForm";
import SlideOut from "../../molecules/SlideOut";
import DeleteIcon from "../../atoms/DeleteIcon";
import CancelIcon from "../../atoms/CancelIcon";
import { validate } from "../../../utils/validations";
import { getFormattedUserObject } from "../../../utils/helpers";
import classes from "./styles.module.scss";

const EditContact = ({ toggleContactForm, toggleContactEditForm }) => {
  const user = useSelector((state) => {
    const { users, selectedUser } = state.users;
    return users?.find((user) => user.id.value === selectedUser);
  });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: user?.name.first,
      lastName: user?.name.last,
      phone: user?.phone.replace(/\D+/g, ""),
      email: user?.email,
      type: user?.type,
    },
    validate,
    onSubmit: (values) => {
      const updatedUser = getFormattedUserObject(values, user);
      dispatch(updateUser(updatedUser, user.id.value));
      toggleContactEditForm();
      toggleContactForm();
    },
  });

  return (
    <div data-testid="edit-contact">
      {user && (
        <SlideOut toggleContactForm={toggleContactForm}>
          <div className={classes.editContact}>
            <div className={classes.section}>
              <h2 className={classes.title}>Edit Contact</h2>
              <div className={classes.icons}>
                <DeleteIcon
                  userId={user.id.value}
                  toggleContactForm={toggleContactForm}
                />
                <CancelIcon toggleContactForm={toggleContactForm} />
              </div>
            </div>
            <ContactForm formik={formik} formType={FormType.Edit} />
          </div>
        </SlideOut>
      )}
    </div>
  );
};

export default EditContact;
