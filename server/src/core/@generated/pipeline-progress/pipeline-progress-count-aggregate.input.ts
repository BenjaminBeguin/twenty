import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PipelineProgressCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    pipelineId?: true;

    @Field(() => Boolean, {nullable:true})
    pipelineStageId?: true;

    @Field(() => Boolean, {nullable:true})
    progressableType?: true;

    @Field(() => Boolean, {nullable:true})
    progressableId?: true;

    @HideField()
    workspaceId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
