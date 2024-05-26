export default interface IExperience{
    title: string
    business: IBusiness[];
}

interface IBusiness{
    name: string;
    position: string;
    date: string;
    done: boolean;
}