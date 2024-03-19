import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/yahya-7860")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="text-center text-3xl bg-black text-white p-5">
      Followers : {data.followers}
      <img src={data.avatar_url} className="rounded-3xl m-auto mt-5" />
    </div>
  );
}
