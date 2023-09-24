import { useState ,useEffect} from "react";

const TypeX = ({UserText}) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(UserText);
  const [index, setIndex] = useState(0);
  console.log({setFullText})
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 125);
      return () => clearTimeout(timer);
    }
  }, [index, fullText, text]);

  return text;
};

export default TypeX;