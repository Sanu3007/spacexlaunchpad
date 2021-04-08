import React from "react";
import Loading from "../components/Loading";
import LaunchPad from "../components/LaunchPad";
import { useGlobalContext } from "../context";

const Home = () => {
  const { loading, launchpads } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  console.log(launchpads[1]);
  return (
    <>
      <section className="section">
        <h2 className="section-title">launchPads</h2>
        <div className="launchpad-center">
          {launchpads.map((launchpad) => {
            return <LaunchPad key={launchpad.id} {...launchpad} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
