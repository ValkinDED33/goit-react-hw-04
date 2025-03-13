import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contact}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
