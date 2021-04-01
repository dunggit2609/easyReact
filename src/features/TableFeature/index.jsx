import { unwrapResult } from "@reduxjs/toolkit";
import "antd/dist/antd.css";
import React from "react";
import { useDispatch } from "react-redux";
import MyTable from "./components/Table";
import { fetchData } from "./tableSlice";

TableFeature.propTypes = {};

function TableFeature(props) {
  const dispatch = useDispatch();
  const action = fetchData();
  const resultAction = dispatch(action);
  const data = unwrapResult(resultAction);

  return (
    <div>
      <MyTable />
    </div>
  );
}

export default TableFeature;
