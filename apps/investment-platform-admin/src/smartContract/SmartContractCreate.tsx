import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SmartContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contractAddress" source="contractAddress" />
        <TextInput label="network" source="network" />
      </SimpleForm>
    </Create>
  );
};
