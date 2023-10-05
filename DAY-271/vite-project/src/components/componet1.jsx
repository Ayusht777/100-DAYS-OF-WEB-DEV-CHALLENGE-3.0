import { useState, useContext } from "react";
import {AppHooks} from "../App";

const Component1 = () => {
  const { Name, setName } = useContext(AppHooks);
  const [newvalue, setnewvalue] = useState("");

  return (
    <div>
      old:{Name}
      - new: {newvalue}
      <div>
        <input type="text" onChange={(e) => setnewvalue(e.target.value)} />
        <button onClick={() => setName(newvalue)}>Update Name</button>
      </div>
    </div>
  );
};

export default Component1;
