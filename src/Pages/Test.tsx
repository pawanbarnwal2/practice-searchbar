import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// code for select option countries and cities
// const data = [
//   {
//     name: "India",
//     cities: [
//       { name: "delhi", id: "DLH" },
//       { name: "mumbai", id: "MUM" },
//       { name: "bangalore", id: "BLRU" },
//     ],
//     id: "IND",
//   },
//   {
//     name: "Germany",
//     cities: [
//       { name: "tariw", id: "TAR" },
//       { name: "careen", id: "CAR" },
//     ],
//     id: "GER",
//   },
//   {
//     name: "Austarlia",
//     cities: [
//       { name: "sydney", id: "SYD" },
//       { name: "peril", id: "PRL" },
//     ],
//     id: "AUS",
//   },
// ];

// function Test() {
//   const [item, setItem] = useState();
//   const [country, setCountry] = useState();
//   const handleChange = (e) => {
//     console.log(e?.target.value);
//     const selectedCountry = e?.target.value;
//     setCountry(selectedCountry);
//     const selectedItem = data.filter((i) => i.id === selectedCountry);
//     setItem(...selectedItem);
//   };
//   console.log(item, "item");
//   return (
//     <div>
//       <select value={country ? country : data[1].id} onChange={handleChange}>
//         {data.map((i) => {
//           return (
//             <option key={i.id} value={i.id}>
//               {i.name}
//             </option>
//           );
//         })}
//       </select>

//       <div>
//         <select onChange={() => {}}>
//           {item &&
//             item.cities.map((i, index) => {
//               return (
//                 <>
//                   <option key={i.id} value={i.id}>
//                     {i.name}
//                   </option>
//                 </>
//               );
//             })}
//         </select>
//       </div>
//     </div>
//   );
// }

// handle
// pagination
// custom

function Test() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;

  const totalPages = Math.ceil(data.length / dataPerPage);
  const pagesSpan = [...Array(totalPages + 1).keys()].slice(1);
  const lastIndexofLastData = currentPage * dataPerPage;
  const firstDataIndex = lastIndexofLastData - dataPerPage;

  console.log(pagesSpan);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const jsonData = await response.json();
        setData([...jsonData]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handlePrevious = () => {
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage != pagesSpan.length) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {data.length > 0 &&
        data.slice(firstDataIndex, lastIndexofLastData).map((i) => {
          return (
            <div key={i.id}>
              <h3>{i.title}</h3>
            </div>
          );
        })}
      <div>
        <span onClick={handlePrevious}>Previous</span>
        {pagesSpan.map((i) => {
          return <span>{` ${i} | `}</span>;
        })}
        <span onClick={handleNext}>Next</span>
        <Outlet />
      </div>
    </>
  );
}
export default Test;
