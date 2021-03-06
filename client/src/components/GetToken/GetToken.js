import React, { useState } from "react";
import axios from "axios";

export default function GetToken() {
  const [meter, setMeter] = useState(0);
  const [money, setMoney] = useState(0);
  const [token, setToken] = useState("waiting...");

  const getToken = () => {
    let smeter = meter.toString();
    console.log(smeter);
    if (smeter.length === 6) {
      axios
        .post("http://localhost:3050/api/token", { meter, money })
        .then((res) => setToken(res.data.token))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h1>Get A Token</h1>
      <div>
        <input
          type="number"
          name="meter"
          value={meter}
          onChange={(e) => setMeter(e.target.value)}
          placeholder="Enter meter"
          maxLength={6}
          required={true}
        />
      </div>
      <div>
        <input
          type="number"
          name="money"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          placeholder="Enter money"
          required={true}
        />
      </div>
      <button onClick={() => getToken()}>Get token</button>
      <div>
        <div style={{ fontWeight: "bold" }}>
          Token: <span style={{ color: "#93f99e" }}>{token}</span>
        </div>
      </div>
    </div>
  );
}
