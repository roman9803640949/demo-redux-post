import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <div>
      <span>Posted: </span>
      <span title={timeStamp}>
        &nbsp; <i> {timeAgo} </i>
      </span>
    </div>
  );
};

export default TimeAgo;
