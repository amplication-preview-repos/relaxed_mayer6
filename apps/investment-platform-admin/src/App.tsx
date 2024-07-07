import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SecurityVerificationList } from "./securityVerification/SecurityVerificationList";
import { SecurityVerificationCreate } from "./securityVerification/SecurityVerificationCreate";
import { SecurityVerificationEdit } from "./securityVerification/SecurityVerificationEdit";
import { SecurityVerificationShow } from "./securityVerification/SecurityVerificationShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { InvestmentList } from "./investment/InvestmentList";
import { InvestmentCreate } from "./investment/InvestmentCreate";
import { InvestmentEdit } from "./investment/InvestmentEdit";
import { InvestmentShow } from "./investment/InvestmentShow";
import { SmartContractList } from "./smartContract/SmartContractList";
import { SmartContractCreate } from "./smartContract/SmartContractCreate";
import { SmartContractEdit } from "./smartContract/SmartContractEdit";
import { SmartContractShow } from "./smartContract/SmartContractShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InvestmentPlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SecurityVerification"
          list={SecurityVerificationList}
          edit={SecurityVerificationEdit}
          create={SecurityVerificationCreate}
          show={SecurityVerificationShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Investment"
          list={InvestmentList}
          edit={InvestmentEdit}
          create={InvestmentCreate}
          show={InvestmentShow}
        />
        <Resource
          name="SmartContract"
          list={SmartContractList}
          edit={SmartContractEdit}
          create={SmartContractCreate}
          show={SmartContractShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
