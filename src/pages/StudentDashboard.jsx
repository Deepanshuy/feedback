import { Button, Divider, TextField } from "@mui/material";
import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DoneIcon from "@mui/icons-material/Done";
const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldPrice = e.target.value;

    const existingFieldIndex = formData.findIndex(
      (item) => item.name === fieldName
    );

    if (existingFieldIndex !== -1) {
      setFormData((prevData) => [
        ...prevData.slice(0, existingFieldIndex),
        {
          name: fieldName,
          score: fieldPrice,
        },
        ...prevData.slice(existingFieldIndex + 1),
      ]);
    } else {
      setFormData((prevData) => [
        ...prevData,
        {
          name: fieldName,
          score: fieldPrice,
        },
      ]);
    }
    console.log(teacher, subject);
    console.log(formData);
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
              <form
                onSubmit={handleOnSubmit}
                key={index}
                className="flex-col justify-center items-center"
              >
                <div className="flex flex-col md:flex-row gap-x-2 gap-y-6">
                  <FormControl size="small" fullWidth>
                    <InputLabel id="branch">Subject</InputLabel>
                    <Select
                      labelId="subject"
                      id="subject"
                      name="subject"
                      size="small"
                      value={subject}
                      label="Subject"
                      onChange={(e) => setSubject(e.target.value)}
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
                      value={teacher}
                      label="Teacher"
                      onChange={(e) => setTeacher(e.target.value)}
                    >
                      {item.teacher.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {teacher && subject && (
                  <div className="p-4  flex flex-col gap-y-4 ">
                    {item.metric.map((d, i) => (
                      <div key={i} className="flex justify-center items-center">
                        <div
                          className="flex gap-x-5 justify-between flex-1 items-center"
                          key={i}
                        >
                          <p>{d}</p>
                          <TextField
                            id={d}
                            variant="outlined"
                            onChange={handleChange}
                            size="small"
                            type="number"
                            name={d}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {teacher && subject && (
                  <div className="flex justify-center items-center">
                    <Button
                      startIcon={<DoneIcon />}
                      variant="contained"
                      type="submit"
                      className=" !w-full"
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </form>
            )
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
