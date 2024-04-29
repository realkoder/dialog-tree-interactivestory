import { ChoiceType } from "./ChoiceType";


export type StoryType = {
    id: number;
    header: string;
    description: string
    choices?: ChoiceType[];
};