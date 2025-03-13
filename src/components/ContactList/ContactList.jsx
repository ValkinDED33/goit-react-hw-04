import PropTypes from "prop-types";
import { FaPhoneAlt, FaUserCircle, FaTrash } from "react-icons/fa";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact}>
          <div className={css.contactInfo}>
            <span className={css.name}>
              <FaUserCircle className={css.icon} /> {name}
            </span>
            <span className={css.number}>
              <FaPhoneAlt className={css.icon} /> {number}
            </span>
          </div>
          <button className={css.button} onClick={() => onDelete(id)}>
            <FaTrash className={css.icon} /> Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
