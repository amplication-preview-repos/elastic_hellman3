import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RecipeTitle } from "../recipe/RecipeTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="recipe.id" reference="Recipe" label="recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
