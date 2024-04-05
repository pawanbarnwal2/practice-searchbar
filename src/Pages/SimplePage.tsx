import React, { useEffect, useState } from "react";
import "./style.css";

function SimplePage() {
  const [data, setData] = useState<Array<any>>([]);
  const [searchedItem, setSearchedItem] = useState<string>();
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchedItem}`
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setData([...jsonData.products]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [searchedItem]);

  const handleClick = (item) => {
    setSelected([...selected, item.title]);
    setData([]);
  };
  const handleRemove = (item) => {
    const ret = selected.filter((i) => i !== item);
    setSelected([...ret]);
  };
  return (
    <div>
      <div className="textbox-container">
        <div className="box-container">
          <div></div>
          {selected.map((i) => (
            <div
              style={{
                background: "#90D26D",
                padding: "5px 10px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <p> {i}</p>
              <div onClick={() => handleRemove(i)}>x</div>
            </div>
          ))}
          <div>
            <input
              type="text"
              value={searchedItem}
              onChange={(e) => setSearchedItem(e.target.value)}
            ></input>
            <div className="li-container">
              {searchedItem &&
                data.map((i) => {
                  return !selected.includes(i.title) ? (
                    <div>
                      <ol onClick={() => handleClick(i)}>
                        <img src={i.images} alt={i.title} />
                        <li>{i.category}</li>
                      </ol>
                    </div>
                  ) : (
                    <></>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimplePage;
