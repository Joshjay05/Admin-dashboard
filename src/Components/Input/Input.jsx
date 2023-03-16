import "./input.css";
import search from "../images/search.png";

const Input = ({ holder }) => {
  // const user = "input"
  // const [input, setInput] = useState(user);
  // const clickHandler = () => {
  //   setInput("userInput");
  // };
  return (
    <>
      <input type="text" placeholder={holder} />
      <img className="input-img" src={search} alt="" />
    </>
  );
};

export default Input;
