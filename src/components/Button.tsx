interface Props {
  children: any;
  BtnColor: "primary" | "secondary" | "warning";
  Btnsize?: string;
  handleClick: () => void;
}

const Button = ({
  children,
  BtnColor = "primary",
  Btnsize,
  handleClick,
}: Props) => {
  return (
    <a
      href="#"
      className={"btn btn-" + BtnColor + " btn-" + Btnsize}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Button;
