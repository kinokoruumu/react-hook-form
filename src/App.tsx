import * as React from "react";
import useForm from "react-hook-form";

interface Data {
  demand_id: string;
  [key: string]: string;
}
const App: React.FunctionComponent = () => {
  const { watch, register, handleSubmit, errors } = useForm<Data>();
  const onSubmit = (data: Data) => {
    console.log(data);
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name="demand_id" ref={register({ required: true })}>
          <option value="">選択してください</option>
          <option value="1">adx</option>
          <option value="2">hogex</option>
        </select>
        {watch("demand_id") === "1" && (
          <p>
            <label htmlFor="">adxの設定</label>
            <input name="id" ref={register({ required: true })} />
            {errors.id && "必須項目です"}
          </p>
        )}
        {watch("demand_id") === "2" && (
          <p>
            <label htmlFor="">hogexの設定</label>
            <input name="secret" ref={register({ required: true })} />
            {errors.secret && "必須項目です"}
          </p>
        )}
        <input type="submit" />
      </form>
    </Modal>
  );
};
export default App;

const Modal: React.FunctionComponent = ({ children }) => <div>{children}</div>;
