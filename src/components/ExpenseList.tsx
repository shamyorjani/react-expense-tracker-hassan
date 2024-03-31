import { useEffect, useState } from "react";

interface dataItems {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  data: dataItems[];
  onDelete: (index: number) => void;
}

const ExpenseList = ({ data, onDelete }: Props) => {
  function capitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [selectCategory, setSelectCategory] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectCategory(event.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <div className="my-3">
          <select
            className="form-select form-select-lg"
            name="selectCategory"
            id="selectCategory"
            onChange={handleCategoryChange}
          >
            <option selected value={""}>
              All Categories
            </option>
            <option value={"groceries"}>Groceries</option>
            <option value={"utilities"}>Utilities</option>
            <option value={"entertainment"}>Entertainment</option>
          </select>
        </div>
        <div className="table-responsive table-bordered">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col" colSpan={2}>
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {selectCategory !== ""
                ? data
                    .filter((item) => item.category === selectCategory)
                    .map((item, index) => (
                      <tr className="" key={index}>
                        <td>{item.description}</td>
                        <td>${item.amount}.00</td>
                        <td>{capitalizeString(item.category)}</td>
                        <td>
                          <button
                            onClick={() => onDelete(index)}
                            className="btn btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                : data
                    .filter((item) => item.category !== "")
                    .map((item, index) => (
                      <tr className="" key={item.id}>
                        <td>{item.description}</td>
                        <td>${item.amount}.00</td>
                        <td>{capitalizeString(item.category)}</td>
                        <td>
                          <button
                            onClick={() => onDelete(item.id)}
                            className="btn btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}

              <tr>
                <td>Total</td>
                <td>
                  $
                  {data.reduce((acc, singleData) => singleData.amount + acc, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
