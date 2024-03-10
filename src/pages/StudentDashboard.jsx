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
  let session = "even";
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
            item.semester === user.sem &&
            item.sess === session && (
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
                  <div className="p-4  flex flex-col gap-y-4  ">
                    {item.metric.map((d, i) => (
                      <div
                        className="flex gap-x-5 justify-between items-center border-2 p-2"
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
