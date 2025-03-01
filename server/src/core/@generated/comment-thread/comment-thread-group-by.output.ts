import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CommentThreadCountAggregate } from './comment-thread-count-aggregate.output';
import { CommentThreadMinAggregate } from './comment-thread-min-aggregate.output';
import { CommentThreadMaxAggregate } from './comment-thread-max-aggregate.output';

@ObjectType()
export class CommentThreadGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    workspaceId!: string;

    @Field(() => CommentThreadCountAggregate, {nullable:true})
    _count?: CommentThreadCountAggregate;

    @Field(() => CommentThreadMinAggregate, {nullable:true})
    _min?: CommentThreadMinAggregate;

    @Field(() => CommentThreadMaxAggregate, {nullable:true})
    _max?: CommentThreadMaxAggregate;
}
