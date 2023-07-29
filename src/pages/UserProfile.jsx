import TabProfile from "../components/Tab/TabProfile";
import avatar from "../assets/img/avatar.jpg";
import useLogout from "../Hooks/useLogout";
import Bmi from "../components/BMI/Bmi";
import BookingHistory from "../components/Booking/BookingHistory";
import UserProfileSection from "../components/UserProSection/UserProfileSection";
import Chat from "../components/Chat/Chat";

const UserProfile = () => {
  //custom hooks for =>>>>>>>>>>>>>>>>>handleLogout
  const UserData = [
    {
      label: "BMI Calculator",
      value: "bmi",
      desc: (
      <Bmi/>
      ),
    },
    {
      label: "Plans",
      value: "react",
      desc: (
        <BookingHistory/>
      ),
    },

    {
      label: "Chat",
      value: "vue",
      desc: <Chat/>,
    },
  ];
 const{handleLogout}=useLogout();

  return (
    //flex-grow
    <section className="flex ">
      <UserProfileSection src={avatar} onClick={handleLogout}/>
      <div className=" w-full">
        <TabProfile data={UserData}/>
      </div>
    </section>
  );
};
export default UserProfile;
