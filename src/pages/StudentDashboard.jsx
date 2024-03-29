import { Button, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../src/App.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [formData, setFormData] = useState([]);
  const [allowFeedback, setAllowFeedback] = useState(false);
  const navigate = useNavigate();
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
    // btech:

    {
      course: "btech",
      branch: "cse",
      semester: "2nd",
      sess: "even",
      subject: ["PPS", "Chemistry", "Maths II", "English"],
      teacher: [
        "Er.Rakesh gagneja",
        "Ms.Harbinder kaur",
        "dr. Pawan preet kaur",
        "teacher",
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
      semester: "6th",
      sess: "even",
      subject: [
        "AI",
        "ML",
        "CD",
        "WCN",
        "Cloud Computing",
        "AI Lab",
        "ML Lab",
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
    // bsc:
    {
      course: "bsc",
      branch: "gwd",
      semester: "2nd",
      sess: "even",
      subject: [
        "Statistics",
        "Web Designing",
        "C++",
        "EVS",
        "Statistics Lab",
        "C++ Lab",
        "Digital Image Editing",
      ],
      teacher: [
        "Ms. Pooja Sonik",
        "Er. Neha",
        "Er. Taranpreet Kaur",
        "Ms. Harpreet(Pharmacy)",
        "Er. Narpat",
        "Er. Taranpreet Kaur",
        "Ms. Reetika",
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
      course: "bsc",
      branch: "gwd",
      semester: "4th",
      sess: "even",
      subject: [
        "Python",
        "Animation Art",
        "Computer Graphics",
        "Video Editing",
        "Python Lab",
        "Animation Art Lab",
        "Image Editing",
        "Computer Graphics Lab",
      ],
      teacher: [
        "Ms. Simranjit",
        "Ms. Reetika",
        "Er. Shaina",
        "Ms. Reetika",
        "Ms. Simranjit",
        "Ms. Reetika",
        "Er. Shaina",
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
    // diploma:
    {
      course: "diploma",
      branch: "cse",
      semester: "4th",
      sess: "even",
      subject: [
        "OOPs with java",
        "DBMS",
        "Data Structure",
        "Computer Network Security",
        "Computer Architecture",
        "Generic skills",
        "OOPs with java Lab",
        "DBMS Lab",
        "Data Structure Lab",
        "Computer Network Security Lab",
        "SCA",
      ],
      teacher: [
        "Er. Narpat Singh",
        "Er. Kirandeep Kaur",
        "Er. Simranjeet Kaur",
        "Er. Simranjeet Kaur",
        "Er. Anjana Sharma",
        "Er. Simranjeet Kaur",
        "Er. Narpat Singh",
        "Er. Kirandeep Kaur",
        "Er. Simranjeet Kaur",
        "Er. Simranjeet Kaur",
        "Er. Puneet Kaur",
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
      course: "diploma",
      branch: "cse",
      semester: "6th",
      sess: "even",
      subject: [
        "Digital Marketing",
        "ADA",
        "Application Dev.using Web Framework",
        "Cloud Computing",
        "Digital Marketing Lab",
        "ADA Lab",
        "Application Dev.using Web Framework Lab",
        "Cloud Computing Lab",
        "Project Lab",
        "SCA Lab",
      ],
      teacher: [
        "Er. Karameet Kaur",
        "Er. Kiran Kumari",
        "Er. Kiran Kumari",
        "Er. Kulwant",
        "Er. Karamjeet Kaur",
        "Er. Kiran Kumari",
        "Er. Kiran Kumari",
        "Er. Kulwant",
        "Er. Simranjeet Kaur",
        "Er. Kulwant, Er. Kirandeep Kaur",
        "Er. Puneet Kaur",
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
    // B.voc sd:
    {
      course: "bvoc",
      branch: "sd",
      semester: "2nd",
      sess: "even",
      subject: [
        "Data Structure",
        "Data Mining",
        "Multimedia",
        "OOPs with java",
        "Java Lab",
        "Data Structure Lab",
      ],
      teacher: [],
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
      course: "bvoc",
      branch: "sd",
      semester: "4th",
      sess: "even",
      subject: [
        "Software Testing and Project Management",
        "Window Configuration and Server Adminstration",
        "Android Application Development",
        "Management Information Systems",
        "Android Application Development Lab",
        "MIS Lab",
      ],
      teacher: [],
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
      course: "bvoc",
      branch: "sd",
      semester: "6th",
      sess: "even",
      subject: [
        "AI",
        "E-commerce",
        "Biometrics",
        "Computer Network Security",
        "CNS Lab",
        "AI Lab",
      ],
      teacher: [],
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

    // btech ds:
    {
      course: "btech",
      branch: "ds",
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
        "Mr. Arvind Nanda",
        "Er. Pooja Rana",
        "Er. Jasmine",
        "Er. Pallavi",
        "Ms. Pooja Sonik",
        "Er. Silky Khurana",
        "Ms. Pooja Rana",
        "Er. Pallavi",
        "Er. Kamaljeet",
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
      branch: "ds",
      semester: "6th",
      sess: "even",
      subject: [
        "Data mining and Data Warehousing",
        "Data Analysis",
        "Big Data Analytics",
        "Machine Learning",
        "Wireless Communication",
        "Data mining and Data Warehousing Lab",
        "Data Analysis Lab",
        "Big Data Analytics Lab",
        "Machine Learning Lab",
      ],
      teacher: [
        "Er. Ashima Aggarwal",
        "Er. Ashima Aggarwal",
        "Dr. Sucharu",
        "Er. Rajni Bedi",
        "Er. Lovedeep Singh",
        "Er. Ashima Aggarwal",
        "Er. Ashima Aggarwal",
        "Dr. Sucharu",
        "Er. Rajni Bedi",
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
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/createFeedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacher: teacher,
            subject: subject,
            sem: user.sem,
            course: user.course,
            branch: user.branch,
            session: currentSession,
          }),
        }
      );

      const res = await response.json();
      console.log(res);
    } catch (e) {
      console.log(e);
      toast.error("Create Feedback Error Error");
    }
    formData.forEach(async (data) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/createScore`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              teacher: teacher,
              subject: subject,
              name: data.name,
              score: data.score,
            }),
          }
        );

        const res = await response.json();

        console.log(res);
      } catch (e) {
        console.log(e);
        toast.error("Create Feedback Error Error");
      }
    });
    toast.success("Your Feedback Has been created successfully");
    navigate("/");
  };
  useEffect(() => {
    if (user.accountType !== "Student") {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/getAllowFeedback`
        );

        const res = await response.json();

        console.log(res);
        setAllowFeedback(res.allow.allowFeedback);
      } catch (e) {
        console.log(e);
        toast.error("Allow Feedback Error");
      }
    })();
  }, []);
  let session;
  const current = new Date();
  const month = current.getMonth();
  const year = current.getFullYear();
  if (month >= 0 && month <= 5) {
    session = "even";
  } else {
    session = "odd";
  }
  let currentSession = session + year;
  return (
    <div className="flex flex-col justify-between">
      <div className="text-xl font-medium p-4 bg-gradient-to-r from-[#0a1f3c]  to-[#275c69] text-white w-fit mx-auto mb-4 rounded-md">
        {user.course.toUpperCase()} <span>{user.branch.toUpperCase()}</span>
        <span>-{user.sem}</span>
      </div>
      <Divider className="bg-black" />
      {allowFeedback ? (
        <div className="p-5">
          {data.map(
            (item, index) =>
              item.semester === user.sem &&
              item.branch === user.branch &&
              item.course === user.course && (
                <form
                  onSubmit={handleOnSubmit}
                  key={index}
                  className=" flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col md:flex-row gap-x-2 gap-y-6 w-full ">
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
                    <div className="p-4  flex flex-col gap-y-4 border-2 custom-border m-3  rounded-lg  bg-[#275c69]">
                      {item.metric.map((d, i) => (
                        <div
                          className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-2 custom-border bg-white "
                          key={i}
                        >
                          <p>{d}</p>
                          <div className=" md:w-[5rem] w-full">
                            <TextField
                              id={d}
                              variant="outlined"
                              onChange={handleChange}
                              value={formData.d}
                              size="small"
                              className="w-full"
                              type="number"
                              name={d}
                              inputProps={{
                                min: 0,
                                max: 5,
                              }}
                              required
                            />
                          </div>
                        </div>
                      ))}
                      <div className=" w-[100%]   p-1 flex md:flex-row flex-col items-center justify-between">
                        <div className="  md:w-[50%] p-3">
                          <h2 className="p-1 font-semibold text-white">
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
                        <div className="md:w-[40%]">
                          <h1 className="p-1 font-semibold text-white">
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
                      className="w-[20%]  !bg-gradient-to-r from-[#0a1f3c]  to-[#275c69] text-white"
                    >
                      Submit
                    </Button>
                  )}
                </form>
              )
          )}
        </div>
      ) : (
        <div className="text-3xl flex justify-center items-center h-[15rem] text-center">
          You are not Allowed to give feedback
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
