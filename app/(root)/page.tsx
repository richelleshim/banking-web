import HeaderTemplate from "@/components/HeaderTemplate";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  // const loggedIn = {
  //   firstName: "Richelle",
  //   lastName: "Shim",
  //   email: "richelleshim@gmail.com",
  // };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderTemplate
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
