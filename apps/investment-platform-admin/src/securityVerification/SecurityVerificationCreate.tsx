import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const SecurityVerificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isVerified" source="isVerified" />
        <DateTimeInput label="verificationDate" source="verificationDate" />
      </SimpleForm>
    </Create>
  );
};
