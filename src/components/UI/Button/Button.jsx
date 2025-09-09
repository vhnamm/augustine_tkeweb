import clsx from "clsx";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.scss";

function Button({
  children,
  href,
  primary,
  rounded,
  outlined,
  loading = false,
  disabled = false,
  className,
  size,
  ...props
}) {
  const Component = href ? "a" : "button";
  const classes = clsx(styles.btn, className, styles[size], {
    [styles.primary]: primary,
    [styles.rounded]: rounded,
    [styles.outlined]: outlined,
    [styles.disabled]: disabled,
    [styles.loading]: loading,
  });

  if (disabled || loading) {
    delete props.onClick;
  }
  return (
    <Component {...props} href={href} className={classes}>
      <span className={styles.btn_content}>{children}</span>
      {loading && (
        <span className={styles.spinner}>
          <FontAwesomeIcon icon={faSpinner} />
        </span>
      )}
    </Component>
  );
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   href: PropTypes.string,
//   primary: PropTypes.bool,
//   rounded: PropTypes.bool,
//   outlined: PropTypes.bool,
//   disabled: PropTypes.bool,
//   loading: PropTypes.bool,
//   className: PropTypes.string,
// };
export default Button;
