import React, { useState } from "react";
import axios from "axios";

export default function CheckToken() {
  const [token, setToken] = useState(0);
  const [days, setDays] = useState(null);
  const [remaining, setRemaining] = useState(0);
  const [err, setErr] = useState(false);

  const datediff = (date) => {
    return Math.round((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
  };

  const checkToken = () => {
    let stoken = token.toString();
    if (stoken.length === 8) {
      axios
        .get(`http://localhost:3050/api/token/${token}`)
        .then((res) => {
          let rem = datediff(res.data.created_at);
          if (rem === 0) setRemaining(res.data.days);
          else setRemaining(res.data.days - rem);
          setDays(res.data.days);
          // console.log("DSYA::",res.data.);
          // setRemaining()
        })
        .catch((err) => setErr(true));
    } else {
      setErr(true);
    }
  };
  return (
    <div>
      <h1>Check token</h1>
      <div style={{ display: "block" }}>
        <input
          type="number"
          name="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter token"
          required={true}
        />
        <button onClick={() => checkToken()}>Check Your Token</button>
      </div>
      {days && (
        <div>
          <div style={{ fontWeight: "bold" }}>Token Days: {days}</div>
          <div style={{ fontWeight: "bold" }}>Remaining Days: {remaining}</div>
        </div>
      )}
      {err && (
        <div style={{ fontWeight: "bold", color: "#fc635d" }}>
          Invalid Token
        </div>
      )}
    </div>
  );
}
