import * as React from "react";
import styles from "./App.module.css";
import { Cards, Charts, Countries } from "./components/index";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const result = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    result();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      {/* <Countries /> */}
      <Charts data={data}/>
    </div>
  );
};

export default App;
