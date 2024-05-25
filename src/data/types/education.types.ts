export default interface IEducation{
    title: string;
    institutions: IIntitution[];
}

export interface IIntitution{
    name: string;
    degree: string;
    start: string;
    end: string;
    done: boolean;
}