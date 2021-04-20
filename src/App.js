import * as React from "react";
import styles from "./App.module.css";
import { Cards, Charts, Countries } from "./components/index";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = React.useState([]);
  const [country, setCountry] = React.useState("");

  React.useEffect(() => {
    const result = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    result();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setCountry(country);
    setData(fetchedData);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Countries handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
};

export default App;
