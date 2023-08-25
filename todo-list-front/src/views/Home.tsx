import TaskCard from "@/components/task/TaskCard.tsx";
import React from "react";

const Home: React.FC = () => {

  return (
      <div className={"mx-12 mt-12"}>
        <TaskCard task={{id: 1,title: "Test", description: "Test", completed: false}}/>
      </div>
  )
}

export default Home;
