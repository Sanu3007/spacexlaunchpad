import React, { useState, useEffect, useContext } from "react";
const url = "https://api.spacexdata.com/v4/launchpads";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [launchpads, setLaunchPads] = useState([]);

  // FetchLaunchPad Function
  const fetchLaunchPads = async () => {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (!data) {
      setLaunchPads([]);
    } else {
      const modified_launchpads = data.map((launchpad) => {
        const { name, details, status, launches, id } = launchpad;

        return {
          name,
          details,
          status,
          launches,
          id,
        };
      });
      console.log(modified_launchpads);
      setLaunchPads(modified_launchpads);
    }
    setLoading(false);
  };

  // UseEffect for fetching launchpads
  useEffect(() => {
    fetchLaunchPads();
  }, []);

  return (
    <AppContext.Provider value={{ launchpads, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
