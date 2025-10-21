import "./Form.css";
import FieldText from "../TextFiled";
import { DropDownList } from "../DropDownList";
import { Button } from "../Button";

export const Form = () => {
  const Guild = [
    "The Silver Vanguard",
    "Ebonblade Order",
    "Crimson Covenant",
    "The Iron Oath",
  ];

  return (
    <section className="form">
      <form>
        <h2>Register your character</h2>
        <FieldText label="Name" placeholder="Insert your name" />
        <FieldText label="Race" placeholder="Insert your race" />
        <FieldText label="Class" placeholder="Insert your class" />
        <DropDownList itens={Guild} label="Guild" />
        <Button>Register</Button>
      </form>
    </section>
  );
};
