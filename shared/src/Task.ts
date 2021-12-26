import { Entity, Field, UuidField, Validators } from "remult";
@Entity('tasks', {
    allowApiCrud: true
})
export class Task {
    @UuidField()
    id: string = '';
    @Field()
    title: string = '';
    @Field()
    completed: boolean = false;
}