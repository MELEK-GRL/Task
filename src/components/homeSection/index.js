import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import Tables from "../table";
import Search from "../search";
import Card from "../card";

function Section() {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          "http://hapi.fhir.org/baseR4/metadata?_pretty=true"
        );

        setFetchedData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex w-full justify-between min-h-[610px] p-2 flex-col gap-4">
      <div className="flex w-full gap-6 flex-col">
        <Search setSearch={setSearch} />
        <Tables fetchedData={fetchedData} search={search} />
        <Card fetchedData={fetchedData} search={search} />
      </div>
    </div>
  );
}

export default Section;
