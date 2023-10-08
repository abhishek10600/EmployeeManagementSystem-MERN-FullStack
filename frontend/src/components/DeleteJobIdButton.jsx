import React, { useEffect, useState } from "react";
import axios from "axios";

const deleteJobIdButton = ({ jobId }) => {
  const handleDeleteButtonClick = async () => {
    const res = await axios.delete(
      `http://localhost:4000/api/v1/jobs/delete/${jobId}`
    );
  };
  return (
    <button className="btn btn-primary" onClick={handleDeleteButtonClick}>
      Delete
    </button>
  );
};

export default deleteJobIdButton;
