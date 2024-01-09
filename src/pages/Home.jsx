import Main from "@/Components/Main";
import LoggedUser from '@/Context/RegUserInfo';
import GetAllUsersProvider from "@/Context/GetAllUsers";
import React, { useContext } from "react";
import GetAddedUsersProvider from "@/Context/AddedUsers";

function Home() {


  return (
    <GetAddedUsersProvider>
      <GetAllUsersProvider>
        <LoggedUser>
          <Main />
        </LoggedUser>
      </GetAllUsersProvider>
    </GetAddedUsersProvider>
  );
}

export default Home