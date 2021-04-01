import { Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

MyTable.propTypes = {};

function MyTable(props) {
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
    },
    {
      title: "Hair Color",
      key: "hair_color",
      dataIndex: "hair_color",
    },
    {
      title: "Skin Color",
      key: "skin_color",
      dataIndex: "skin_color",
    },
    {
      title: "Eye Color",
      key: "eye_color",
      dataIndex: "eye_color",
    },
    {
      title: "Birth Year",
      key: "birth_year",
      dataIndex: "birth_year",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
    },
    {
      title: "Home World",
      key: "homeworld",
      dataIndex: "birth_year",
    },
    {
      title: "Films",
      key: "films",
      dataIndex: "films",
      render: (films) => (
        <>
          {films.map((film) => {
            return <p key={film}>{film}</p>;
          })}
        </>
      ),
    },
    {
      title: "Species",
      key: "species",
      dataIndex: "species",
      render: (species) => (
        <>
          {species.map((specy) => {
            return <p key={specy}>{specy}</p>;
          })}
        </>
      ),
    },
    {
      title: "Vehicles",
      key: "vehicles",
      dataIndex: "vehicles",
      render: (vehicles) => (
        <>
          {vehicles.map((vehicle) => {
            return <p key={vehicle}>{vehicle}</p>;
          })}
        </>
      ),
    },
    {
      title: "Star Ships",
      key: "starships",
      dataIndex: "starships",
      render: (starships) => (
        <>
          {starships.map((starship) => {
            return <p key={starship}>{starship}</p>;
          })}
        </>
      ),
    },
    {
      title: "Created",
      key: "created",
      dataIndex: "created",
    },
    {
      title: "Edited",
      key: "edited",
      dataIndex: "edited",
    },
    {
      title: "URL",
      key: "url",
      dataIndex: "url",
    },
  ];
  const data = useSelector((state) => state.table[0]);
  console.log(data);
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default MyTable;
