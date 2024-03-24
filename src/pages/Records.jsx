import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import generatePDF from "react-to-pdf";

const Records = () => {
  let period;
  let date = new Date();
  let currentyear = date.getFullYear();
  const month = date.getMonth();
  if (month >= 0 && month <= 5) {
    period = "Jan to June";
  } else {
    period = "July to Dec";
  }

  const user = JSON.parse(localStorage.getItem("user")) ?? null;

  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.accountType !== "Admin") {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/getAllFeedback`
        );
        const res = await response.json();
        console.log(res.data);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  const options = {
    filename: `Teachers_Record ${period}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    page: {
      margin: 20,
    },
  };
  const getTargetElement = () => document.querySelector(".container");

  const downloadPdf = () => generatePDF(getTargetElement, options);

  return (
    <>
      {data && (
        <div className="mx-auto flex">
          <Button
            variant="contained"
            className="!bg-[#1e4a5b] !ml-auto"
            onClick={downloadPdf}
            endIcon={<Download />}
          >
            Download
          </Button>
        </div>
      )}
      <div className="container">
        <div className="p-2 my-4">
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <div className="font-semibold text-3xl">
              Lyallpur Khalsa College Technical Campus, Jalandhar
            </div>
            <div className="font-medium text-xl">
              Faculty Feedback Evaluation Report
            </div>
            <div className="font-medium text-xl">
              Session:{period} {currentyear}
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col gap-y-4">
          <div className=" flex flex-col gap-y-6 w-full  overflow-x-auto">
            <div className="w-[62.5rem] flex flex-col gap-y-8 ">
              {data &&
                data.map((item, index) => {
                  let total = 0;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col p-3 border-2 gap-y-1   border-black shadow-md`}
                    >
                      <div className="font-bold py-1 border-b-2 w-full border-black">
                        Faculty Name : {item.teacher}
                      </div>
                      <div>
                        <div className="flex justify-between font-bold">
                          <p className="basis-[10%]">S.No</p>
                          <p className="basis-[25%]  ">Name of Subject</p>
                          <p className="basis-[20%]">Class/Sem</p>
                          <p className="basis-[25%] ">No.of Students Filled</p>
                          <p className="basis-[30%]">Average Feedback Marks</p>
                          <p className="w-[7rem]">Remarks</p>
                        </div>
                      </div>
                      {item.subjectAvg.map((subject, index) => {
                        total += subject.average;
                        return (
                          <div key={index} className="flex justify-between ">
                            <p className="basis-[10%] ">{index + 1}</p>
                            <p className="basis-[25%]">{subject.subject}</p>
                            <p className="basis-[20%] ">
                              {subject["branch-sem"].toUpperCase()}
                            </p>
                            <p className="basis-[25%] ">{subject.count}</p>
                            <p className="basis-[30%]">{subject.average}</p>
                            <p className="w-[7rem]">
                              
                            </p>
                          </div>
                        );
                      })}
                      <div className="flex gap-x-3 mt-4 items-center  text-l font-bold">
                        <p>Final Average:</p>
                        <p>{total / item.subjectAvg.length}</p>
                      </div>
                      <div className="flex gap-x-3  items-center text-l font-bold">
                        <p>Final Percentage:</p>
                        <p>{((total / item.subjectAvg.length / 45) * 100).toFixed(2)}%</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Records;
