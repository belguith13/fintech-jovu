/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Deposit } from "../../deposit/base/Deposit";
import { Interest } from "../../interest/base/Interest";
import { LockedFunds } from "../../lockedFunds/base/LockedFunds";
import { User } from "../../user/base/User";

@ObjectType()
class Wallet {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Deposit],
  })
  @ValidateNested()
  @Type(() => Deposit)
  @IsOptional()
  deposits?: Array<Deposit>;

  @ApiProperty({
    required: false,
    type: () => [Interest],
  })
  @ValidateNested()
  @Type(() => Interest)
  @IsOptional()
  interests?: Array<Interest>;

  @ApiProperty({
    required: false,
    type: () => [LockedFunds],
  })
  @ValidateNested()
  @Type(() => LockedFunds)
  @IsOptional()
  lockedFundsItems?: Array<LockedFunds>;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Wallet as Wallet };
