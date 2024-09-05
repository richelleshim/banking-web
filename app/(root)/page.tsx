import HeaderTemplate from "@/components/HeaderTemplate";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Richelle",
    lastName: "Shim",
    email: "richelleshim@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderTemplate
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
        
      </div>
    </section>
  );
};

export default Home;
