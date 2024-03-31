import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  setData: (data: any) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(5, { message: "The Description must be at least 5 characters" }),
  amount: z
    .number({ invalid_type_error: "The amount field is required" })
    .min(5, { message: "The Amount must be at least 5" }),
  category: z.string().nonempty({ message: "Category is required" }),
});
type FormData = z.infer<typeof schema>;

const Form = ({ setData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setData(data);
    reset();
  };
  console.log();
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          name="description"
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          name="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select form-select-lg"
          name="category"
          id="category"
        >
          <option value={""}></option>
          <option value={"groceries"}>Groceries</option>
          <option value={"utilities"}>Utilities</option>
          <option value={"entertainment"}>Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
