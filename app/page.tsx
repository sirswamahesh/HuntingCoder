import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const Home = async () => {

  const {isAuthenticated} = getKindeServerSession();
  if(await isAuthenticated()){

    redirect('/dashboard')
  }
  return (
    <div className="flex items-center justify-center mt-[50px]">
      <h1 className="text-4xl">Home</h1>
    </div>
  );
};

export default Home;
