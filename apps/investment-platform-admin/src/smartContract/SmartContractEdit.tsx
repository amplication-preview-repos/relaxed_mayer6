import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SmartContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contractAddress" source="contractAddress" />
        <TextInput label="network" source="network" />
      </SimpleForm>
    </Edit>
  );
};
