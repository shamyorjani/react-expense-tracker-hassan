interface Props {
  toggleAlert: string;
  closeToggle: () => void;
}

const Alert = ({ toggleAlert, closeToggle }: Props) => {
  return (
    <div
      className={"alert alert-warning fade show " + toggleAlert}
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        onClick={closeToggle}
      ></button>
    </div>
  );
};

export default Alert;
