import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumPipelineProgressableTypeFieldUpdateOperationsInput } from '../prisma/enum-pipeline-progressable-type-field-update-operations.input';
import { PipelineStageUncheckedUpdateManyWithoutPipelineNestedInput } from '../pipeline-stage/pipeline-stage-unchecked-update-many-without-pipeline-nested.input';
import { PipelineProgressUncheckedUpdateManyWithoutPipelineNestedInput } from '../pipeline-progress/pipeline-progress-unchecked-update-many-without-pipeline-nested.input';

@InputType()
export class PipelineUncheckedUpdateWithoutWorkspaceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPipelineProgressableTypeFieldUpdateOperationsInput, {nullable:true})
    pipelineProgressableType?: EnumPipelineProgressableTypeFieldUpdateOperationsInput;

    @Field(() => PipelineStageUncheckedUpdateManyWithoutPipelineNestedInput, {nullable:true})
    pipelineStages?: PipelineStageUncheckedUpdateManyWithoutPipelineNestedInput;

    @Field(() => PipelineProgressUncheckedUpdateManyWithoutPipelineNestedInput, {nullable:true})
    pipelineProgresses?: PipelineProgressUncheckedUpdateManyWithoutPipelineNestedInput;
}
