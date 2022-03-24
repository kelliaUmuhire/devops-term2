import React, { useState } from "react";
import axios from "axios";

export default function CheckToken() {
  const [token, setToken] = useState(0);
  const [days, setDays] = useState("waiting...");
  const [remaining, setRemaining] = useState(0);

  const checkToken = () => {
    let stoken = token.toString();
    if (stoken.length === 8) {
      axios
        .get(`http://localhost:3050/api/token/${stoken}`)
        .then((res) => {
          setDays(res.data.token.days);
          // setRemaining()
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h1>Check token</h1>
      <div>
        <input
          type="number"
          name="token"
          value={token}
          onClick={(e) => setToken(e.target.value)}
          placeholder="Enter token"
          required={true}
        />
        <button onClick={checkToken}>Check Your Token</button>
      </div>
      {days && (
        <div>
          <div>Token Days: {days}</div>
          <div>Created at: {days}</div>
        </div>
      )}
    </div>
  );
}
