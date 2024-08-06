/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { RecipeCreateNestedManyWithoutUsersInput } from "./RecipeCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => RecipeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RecipeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RecipeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  recipes?: RecipeCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserProfileCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProfileCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProfileCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
