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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DepositListRelationFilter } from "../../deposit/base/DepositListRelationFilter";
import { InterestListRelationFilter } from "../../interest/base/InterestListRelationFilter";
import { LockedFundsListRelationFilter } from "../../lockedFunds/base/LockedFundsListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WalletWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  balance?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DepositListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DepositListRelationFilter)
  @IsOptional()
  @Field(() => DepositListRelationFilter, {
    nullable: true,
  })
  deposits?: DepositListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InterestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InterestListRelationFilter)
  @IsOptional()
  @Field(() => InterestListRelationFilter, {
    nullable: true,
  })
  interests?: InterestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => LockedFundsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LockedFundsListRelationFilter)
  @IsOptional()
  @Field(() => LockedFundsListRelationFilter, {
    nullable: true,
  })
  lockedFundsItems?: LockedFundsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { WalletWhereInput as WalletWhereInput };
