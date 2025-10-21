import "./Form.css";
import FieldText from "../TextFiled";

export const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Register your character</h2>
        <FieldText label="Name" placeholder="Insert your name" />
        <FieldText label="Race" placeholder="Insert your race" />
        <FieldText label="Class" placeholder="Insert your class" />
      </form>
    </section>
  );
};
