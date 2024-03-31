import { useState } from "react";

interface Props {
  children: string;
  MaxChars?: number;
}

const ExpandableText = ({ children, MaxChars = 50 }: Props) => {
  const [moreOrLess, setMoreOrLess] = useState(false);
  const textLength = () => {
    return moreOrLess ? children.length : MaxChars;
  };
  if (children.length <= MaxChars) {
    return <p>{children}</p>;
  }
  return (
    <div>
      <p>
        {children.substring(0, textLength())}...
        <button onClick={() => setMoreOrLess(!moreOrLess)}>
          {moreOrLess ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
