import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const [teacher, setTeacher] = useState();
  const [totalTeacher, setTotalTeacher] = useState();
  const [data, setData] = useState();
  const [score, setScore] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.accountType !== "Admin") {
      navigate("/login");
    }
  }, []);

  const handleChange = async (e) => {
    setTeacher(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/getFeedback`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              teacher: teacher,
            }),
          }
        );

        const res = await response.json();
        setData(res.feedback);
        console.log(res.feedback);
        let total = 0;
        res.feedback.forEach((item) => (total += item.marks));
        total = total / res.feedback.length;
        setScore(total);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/getTeachers`
        );

        const res = await response.json();
        setTotalTeacher(res.teachers);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
      <div className="flex md:flex-row flex-col gap-y-4 gap-x-4 ">
        <FormControl size="small" className="md:!w-[50%] w-full">
          <InputLabel id="teacher">Teacher</InputLabel>
          <Select
            labelId="teacher"
            id="teacher"
            name="teacher"
            size="small"
            value={teacher}
            label="Teacher"
            onChange={handleChange}
          >
            {totalTeacher &&
              totalTeacher.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item.toUpperCase()}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Search
        </Button>
      </div>
      <div className=" flex flex-col gap-y-6 w-full  overflow-x-auto">
        <div className="w-[60rem] flex flex-col gap-y-5 ">
          {data && (
            <div className="flex justify-between font-medium">
              <p className="basis-[25%]">Teacher's Name</p>
              <p className="basis-[25%]">Subject</p>
              <p className="basis-[25%]">Course</p>
              <p className="basis-[25%]">Branch</p>
              <p className="basis-[25%]">Rating</p>
            </div>
          )}
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <p className="basis-[25%]">{item.teacher}</p>
                  <p className="basis-[25%]">{item.subject.toUpperCase()}</p>
                  <p className="basis-[25%]">{item.course.toUpperCase()}</p>
                  <p className="basis-[25%]">{item.branch.toUpperCase()}</p>
                  <p className="basis-[25%]">{item.marks}</p>
                </div>
              );
            })}
          {data && (
            <div className="font-bold flex justify-between items-center w-[82%] text-xl mt-6 md:mt-8">
              <p>Average Rating</p>
              <p>{score}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default AdminDashboard;
