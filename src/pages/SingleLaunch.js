import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
const url = "https://api.spacexdata.com/v4/launches/";

const SingleLaunch = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [launchInfo, setLaunchInfo] = useState([]);

  const fetchLaunchInfo = async () => {
    setLoading(true);
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    console.log(data);
    if (!data) {
      setLaunchInfo([]);
    } else {
      const { name, details, date_local } = data;
      const img = data.links.patch.large;
      const info = { name, details, date_local, img };
      console.log(info);
      setLaunchInfo(info);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLaunchInfo();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  const { name, details, date_local, img } = launchInfo;
  return (
    <section className="section launch-section">
      <h2 className="section-title">{name}</h2>
      <div className="launch">
        <img src={img} alt={name} />
        <div className="launch-info">
          <p>
            <span className="launch-data">Name :</span>
            {name}
          </p>
          <p>
            <span className="launch-data">Details:</span>
            {`${details ? details : "N/A"}`}
          </p>
          <p>
            <span className="launch-data">Date:</span>
            {date_local}
          </p>
        </div>
      </div>
      <button className="btn primary-btn">
        <Link to="/">Back</Link>
      </button>
    </section>
  );
};

export default SingleLaunch;
