import SideBar from "@/components/Navbar/SideBar";
import TopNavbar from "@/components/Navbar/TopNavbar";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-row ">
        <SideBar />
        <div className="w-full flex flex-col ">
          <TopNavbar />
          <div className="flex-grow  mt-[50px] ml-[288px] p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
