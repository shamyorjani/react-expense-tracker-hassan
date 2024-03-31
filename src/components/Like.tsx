import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const toggle = () => {
    setHeartToggle(!heartToggle);
  };
  const [heartToggle, setHeartToggle] = useState(false);

  if (!heartToggle) {
    return (
      <CiHeart
        onClick={() => {
          toggle();
          onClick();
        }}
        color="red"
      />
    );
  }
  return (
    <FaHeart
      onClick={() => {
        toggle();
        onClick();
      }}
      color="red"
    />
  );
};

export default Like;
