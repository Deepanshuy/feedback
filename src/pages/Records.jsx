import React from "react";
const Records = () => {
  let period;
  let date = new Date();
  let currentyear = date.getFullYear();
  const month = date.getMonth();
  if (month >= 0 && month <= 5) {
    period = "jan to june";
  } else {
    period = "july to dec";
  }
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">
            Lyallpur Khalsa College Technical Campus, Jalandhar
          </div>
          <div className="">Faculty Feedback Evaluation Report</div>
          <div className="">
            session:{period} {currentyear}
          </div>
        </div>
      </div>

      <div className="border-2 m-2 p-2">this is the record of feedback</div>
    </>
  );
};

export default Records;
