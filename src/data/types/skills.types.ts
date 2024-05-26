export default interface ISkills{
    title: string;
    skills: ISkill[];
}

interface ISkill{
    name: string;
    cuantitative: string;
    cualitative: string;
    date?: string;
    main?: boolean;
    icon: any;
}