import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../workspace-member/workspace-member-unchecked-update-many-without-workspace-nested.input';
import { CompanyUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../company/company-unchecked-update-many-without-workspace-nested.input';
import { PersonUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../person/person-unchecked-update-many-without-workspace-nested.input';
import { CommentThreadUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../comment-thread/comment-thread-unchecked-update-many-without-workspace-nested.input';
import { CommentUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../comment/comment-unchecked-update-many-without-workspace-nested.input';
import { PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../pipeline/pipeline-unchecked-update-many-without-workspace-nested.input';
import { PipelineProgressUncheckedUpdateManyWithoutWorkspaceNestedInput } from '../pipeline-progress/pipeline-progress-unchecked-update-many-without-workspace-nested.input';

@InputType()
export class WorkspaceUncheckedUpdateWithoutPipelineStagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    domainName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    displayName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    logo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    workspaceMember?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput;

    @Field(() => CompanyUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    companies?: CompanyUncheckedUpdateManyWithoutWorkspaceNestedInput;

    @Field(() => PersonUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    people?: PersonUncheckedUpdateManyWithoutWorkspaceNestedInput;

    @Field(() => CommentThreadUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    commentThreads?: CommentThreadUncheckedUpdateManyWithoutWorkspaceNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutWorkspaceNestedInput;

    @Field(() => PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput;

    @Field(() => PipelineProgressUncheckedUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    pipelineProgresses?: PipelineProgressUncheckedUpdateManyWithoutWorkspaceNestedInput;
}
