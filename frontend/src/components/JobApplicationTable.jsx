import { useEffect, useState } from "react";
import axios from "axios";
import DeleteJobIdButton from "./DeleteJobIdButton";

const JobApplicationTable = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/jobs/all");
      setMyData(res.data.jobs);
    };
    getData();
  }, [myData]);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>JobId</th>
            <th>Description</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((d) => (
            <tr key={d._id}>
              <td>{d.jobId}</td>
              <td>{d.jobDescription}</td>
              <td>{d.minimumExperience}</td>
              <td>{d.location}</td>
              <td>{d.status}</td>
              <td>
                <DeleteJobIdButton jobId={d.jobId} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationTable;
