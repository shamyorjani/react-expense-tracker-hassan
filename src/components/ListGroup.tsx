import { useState } from "react";

interface Props {
  name: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ name, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {name.length === 0 && <p>nothing found</p>}
      <ul className="list-group">
        {name.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
