import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumCommentableTypeFieldUpdateOperationsInput } from '../prisma/enum-commentable-type-field-update-operations.input';
import { CommentThreadUpdateOneRequiredWithoutCommentThreadTargetsNestedInput } from '../comment-thread/comment-thread-update-one-required-without-comment-thread-targets-nested.input';

@InputType()
export class CommentThreadTargetUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumCommentableTypeFieldUpdateOperationsInput, {nullable:true})
    commentableType?: EnumCommentableTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    commentableId?: StringFieldUpdateOperationsInput;

    @Field(() => CommentThreadUpdateOneRequiredWithoutCommentThreadTargetsNestedInput, {nullable:true})
    commentThread?: CommentThreadUpdateOneRequiredWithoutCommentThreadTargetsNestedInput;
}
