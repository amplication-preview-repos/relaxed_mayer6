import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const SecurityVerificationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isVerified" source="isVerified" />
        <DateTimeInput label="verificationDate" source="verificationDate" />
      </SimpleForm>
    </Edit>
  );
};
