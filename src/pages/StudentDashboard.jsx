import { Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const data = [
    {
      semester: "1st",
      subject: ["Physics", "ED & CG", "Maths I", "BEE"],
      teacher: ["Teacher1", "Teacher2", "Teacher3", "Teacher4"],
      metric: [
        "Statement1",
        "Statement2",
        "Statement3",
        "Statement4",
        "Statement5",
      ],
    },
    {
      semester: "2nd",
      subject: ["PPS", "Chemistry", "Maths II", "English"],
      teacher: ["Teacher1", "Teacher2", "Teacher3", "Teacher4"],
      metric: [
        "Statement1",
        "Statement2",
        "Statement3",
        "Statement4",
        "Statement5",
      ],
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="text-3xl font-medium p-4">
        {user.course.toUpperCase()} <span>{user.branch.toUpperCase()}</span>
        <span> {user.sem}</span>
      </div>
      <Divider className="bg-black" />
      <div className="p-4">
        {data.map(
          (item, index) =>
            item.semester === user.sem && (
              <form onSubmit={handleOnSubmit} key={index} className="flex-col">
                <div className="flex flex-col md:flex-row gap-x-2 gap-y-6">
                  <FormControl size="small" fullWidth>
                    <InputLabel id="branch">Subject</InputLabel>
                    <Select
                      labelId="subject"
                      id="subject"
                      name="subject"
                      size="small"
                      value={formData.subject}
                      label="Subject"
                      onChange={handleChange}
                    >
                      {item.subject.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="teacher">Teacher</InputLabel>
                    <Select
                      labelId="teacher"
                      id="teacher"
                      name="teacher"
                      size="small"
                      value={formData.teacher}
                      label="Teacher"
                      onChange={handleChange}
                    >
                      {item.teacher.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {formData.teacher && formData.subject && (
                  <div className="p-4  flex flex-col gap-y-4 ">
                    {item.metric.map((d, i) => (
                      <div
                        className="flex gap-x-5 justify-between items-center"
                        key={i}
                      >
                        <p>{d}</p>
                        <TextField
                          id={d}
                          variant="outlined"
                          onChange={handleChange}
                          value={formData.d}
                          size="small"
                          type="number"
                          name={d}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {formData.teacher && formData.subject && (
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                )}
              </form>
            )
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
