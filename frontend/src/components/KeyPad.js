import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SingleNumber from "./SingleNumber";
import values from "../data/data";

const KeyPad = () => {
  const [password, setPassword] = useState("");
  const [locked, setLocked] = useState(true);

  const sendPassword = async () => {
    const { data } = await axios.post("/api/auth", { password });
    if (data.success === false) return toast.error(data.message);
    toast.success(data.message);
    setLocked(false);
  };

  useEffect(() => {
    if (locked && password?.length === 4) {
      sendPassword();
      setPassword("");
    }
  }, [password]);

  const clickHandler = (value) => {
    if (!locked) return toast("Olet jo kirjautunut");
    if (value === "lock") return;
    if (value === "remove") {
      return setPassword(password.slice(0, -1));
    }
    setPassword(password.concat(value.toString()));
  };

  return (
    <div
      className="keypad-container"
    >
      <div className="password">
        {password?.split("").map((p, index) => (
          <span key={index}></span>
        ))}
      </div>
      <div className="keys">
        {values?.map((number) => (
          <SingleNumber
            key={number.id}
            number={number}
            clickHandler={clickHandler}
            locked={locked}
          />
        ))}
      </div>
      <div className="footer">
        <span>Salasana: 3723</span>
        {!locked && (
          <span className="logout" onClick={() => setLocked(true) }>Kirjaudu ulos</span>
        )}
      </div>
    </div>
  );
};

export default KeyPad;
