import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutPeopleInput } from '../company/company-create-nested-one-without-people.input';
import { WorkspaceCreateNestedOneWithoutPeopleInput } from '../workspace/workspace-create-nested-one-without-people.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PersonCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    firstname!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => CompanyCreateNestedOneWithoutPeopleInput, {nullable:true})
    company?: CompanyCreateNestedOneWithoutPeopleInput;

    @HideField()
    workspace!: WorkspaceCreateNestedOneWithoutPeopleInput;
}
