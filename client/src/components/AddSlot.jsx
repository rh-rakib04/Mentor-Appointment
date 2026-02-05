import { useState } from "react";
import useAxios from "../hooks/useAxios";
const AddSlot = ({ mentorId }) => {
  const [date, setDate] = useState("");
  const axios = useAxios();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddSlot = async () => {
    await axios.post("/slots", {
      mentorId,
      date,
      startTime,
      endTime,
    });

    alert("Slot added");
  };

  return (
    <div>
      <h2>Add Slot</h2>

      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setStartTime(e.target.value)} />
      <input type="time" onChange={(e) => setEndTime(e.target.value)} />

      <button onClick={handleAddSlot}>Add Slot</button>
    </div>
  );
};

export default AddSlot;
