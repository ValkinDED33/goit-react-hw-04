import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange, total }) => {
  return (
    <div className={css.searchBox}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Search in ${total} contacts`}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
