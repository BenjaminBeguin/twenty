import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkspaceMemberUpdateOneWithoutUserNestedInput } from '../workspace-member/workspace-member-update-one-without-user-nested.input';
import { RefreshTokenUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input';

@InputType()
export class UserUpdateWithoutCompaniesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disabled?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    displayName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatarUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    passwordHash?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @HideField()
    workspaceMember?: WorkspaceMemberUpdateOneWithoutUserNestedInput;

    @HideField()
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
}
