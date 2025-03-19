import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, image, onRequestClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className={styles.overlay} onClick={onRequestClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onRequestClose}>
          ✖
        </button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </div>
  );
};

export default ImageModal;
