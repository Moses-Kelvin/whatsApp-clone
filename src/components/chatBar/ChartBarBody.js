import React from "react";
import './ChartBarBody.css';
import { useParams } from "react-router-dom";

const ChartBarBody = () => {
   const { roomId } = useParams();

   return <section className="chartBar_body">{roomId}</section>
};

export default ChartBarBody;