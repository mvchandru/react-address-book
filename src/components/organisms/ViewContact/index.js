import { useSelector } from "react-redux";
import { useFormik } from "formik";
import SlideOut from "../../molecules/SlideOut";
import ContactForm, { FormType } from "../../molecules/ContactForm";
import EditIcon from "../../atoms/EditIcon";
import DeleteIcon from "../../atoms/DeleteIcon";
import CancelIcon from "../../atoms/CancelIcon";
import classes from "./styles.module.scss";

const ViewContact = ({ toggleContactForm }) => {
  const user = useSelector((state) => {
    const { users, selectedUser } = state.users;
    return users?.find((user) => user.id.value === selectedUser);
  });

  const formik = useFormik({
    initialValues: {
      firstName: user?.name.first,
      lastName: user?.name.last,
      phone: user?.phone.replace(/\D+/g, ""),
      email: user?.email,
      type: user?.type,
    },
  });

  if (!user) {
    return null;
  }

  return (
    <SlideOut toggleContactForm={toggleContactForm}>
      <div className={classes.viewContact}>
        <div className={classes.section}>
          <h2 className={classes.title}>View Contact</h2>
          <div className={classes.icons}>
            <EditIcon toggleContactForm={toggleContactForm} />
            <DeleteIcon
              userId={user.id.value}
              toggleContactForm={toggleContactForm}
            />
            <CancelIcon toggleContactForm={toggleContactForm} />
          </div>
        </div>
        <ContactForm formik={formik} formType={FormType.View} />
      </div>
    </SlideOut>
  );
};

export default ViewContact;
