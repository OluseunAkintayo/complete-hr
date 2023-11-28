/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from "react";
import Profile from "./Profile";
import Topbar from "./TopBar";
import UserTabs from "./Tabs";

const Dashboard = () => {

  return (
    <Fragment>
      <Topbar />
      <section className="max-w-[1280px] mx-auto py-6 px-4">
        <Profile />
				<div className="h-6" />
				<UserTabs />
      </section>
    </Fragment>
  );
};

export default Dashboard;
