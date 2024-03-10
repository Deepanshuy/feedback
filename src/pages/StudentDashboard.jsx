import { Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../src/App.css";

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
  };

  const data = [
    {
      course: "btech",
      branch: "cse",
      semester: "1st",
      sess: "odd",
      subject: ["Physics", "ED & CG", "Maths I", "BEE"],
      teacher: ["1Teacher1", "1Teacher2", "1Teacher3", "1Teacher4"],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "2nd",
      sess: "even",
      subject: ["PPS", "Chemistry", "Maths II", "English"],
      teacher: ["2Teacher1", "2Teacher2", "2Teacher3", "2Teacher4"],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "3rd",
      sess: "odd",
      subject: ["OOPS", "DSA", "Maths III", "FCH", "Digital Electronics"],
      teacher: ["3Teacher1", "3Teacher2", "3Teacher3", "3Teacher4"],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "4th",
      sess: "even",
      subject: [
        "DM",
        "DAA",
        "UHV",
        "COA",
        "EVS",
        "OS",
        "DAA Lab",
        "COA Lab",
        "OS Lab",
      ],
      teacher: [
        "Ms.Pooja Sonik",
        "Ms.Pooja Rana",
        "Er.Silky Khurana",
        "Dr.Nancy Gupta",
        "Er.Jasmine Kaur",
        "Er.Rakesh Gagneja",
        "Er. Taranpreet Kaur( G1) Er. Neha (G2)",
        "Dr.Nancy Gupta",
        "Er. Rakesh Gagneja",
      ],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "5th",
      sess: "odd",
      subject: ["PPS", "Chemistry", "Maths II", "English"],
      teacher: ["5Teacher1", "5Teacher2", "5Teacher3", "5Teacher4"],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "6th",
      sess: "even",
      subject: [
        "AI",
        "ML",
        "CD",
        "WCN",
        "Cloud Computing",
        "AI Lab",
        "ML LAb",
        "CD Lab",
        "CC Lab",
      ],
      teacher: [
        "Dr. Pooja Dhand",
        "Er. Rajni Bedi",
        "Dr. Sucharu",
        "Er. Lovdeep",
        "Dr. Rameshwar",
        "Er. Varun Sharma",
        "Er. Rajni Bedi",
        "Dr. Sucharu",
        "Dr. Rameshwar",
      ],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "7th",
      sess: "odd",
      subject: ["PPS", "Chemistry", "Maths II", "English"],
      teacher: ["7Teacher1", "7Teacher2", "7Teacher3", "7Teacher4"],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
      ],
    },
    {
      course: "btech",
      branch: "cse",
      semester: "8th",
      sess: "even",
      subject: ["PPS", "Chemistry", "Maths II", "English"],
      teacher: ["8Teacher1", "8Teacher2", "8Teacher3", "8Teacher4"],
      metric: [
        "Has the Teacher covered entire Syllabus as prescribed by University/ College/Board?",
        "Has the Teacher covered relevant topics beyond syllabus",
        "Effectiveness of Teacher  in terms of: (a)Technical content/course content  (b)Communication skills  (c)Use of teaching aids",
        "Pace on which content were covered",
        "Motivation and inspiration for students to learn",
        "Support for the development of students ‘ skill: (i)Practical demonstration (ii)Hands on training",
        "Clarity of expectations of students",
        "Feedback provided on students progress",
        "Willingness to offer help and advice to students",
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
      <div className="p-5">
        {data.map(
          (item, index) =>
            item.semester === user.sem &&
            item.branch === user.branch &&
            item.course === user.course && (
              <form onSubmit={handleOnSubmit} key={index} className="flex-col">
                <div className="flex flex-col md:flex-row gap-x-2 gap-y-6 ">
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
                  <div className="p-4  flex flex-col gap-y-4 border-2 custom-border m-3  rounded-lg bg-[#40afbf]">
                    {item.metric.map((d, i) => (
                      <div
                        className="flex justify-between items-center border rounded-lg p-2 custom-border bg-white "
                        key={i}
                      >
                        <p>{d}</p>
                        <div className=" w-[5rem]">
                          <TextField
                            id={d}
                            variant="outlined"
                            onChange={handleChange}
                            value={formData.d}
                            size="small"
                            type="number"
                            name={d}
                            inputProps={{
                              min: 0,
                              max: 5,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className=" w-[100%]  p-1 flex items-center justify-between">
                      <div className="  w-[50%] p-3">
                        <h2 className="p-1 font-semibold">
                          Suggestions if any:
                        </h2>
                        <TextField
                          className="w-full bg-white rounded-lg textfield-style"
                          id="suggestion"
                          variant="outlined"
                          onChange={handleChange}
                          value={formData.suggestion}
                          size="medium"
                          type="text"
                          name="suggestion"
                          multiline
                          rows={5}
                          cols={100}
                        />
                      </div>
                      <div className="w-[40%]">
                        <h1 className="p-1 font-semibold">
                          Give Rating on a Scale of 1 to 5:
                        </h1>
                        <ul className="bg-white rounded-lg list-disc pl-6 p-2">
                          <li>5-Excellent</li>
                          <li>4-Very Good</li>
                          <li>3-Good</li>
                          <li>2-Poor</li>
                          <li>1-Very Poor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {teacher && subject && (
                  <Button
                    variant="contained"
                    type="submit"
                    className="w-full !bg-blue-500"
                  >
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
