export default interface IAbout{
    title: string;
    sections: IAboutSection[];
}

export interface IAboutSection{
    title: string;
    subtitle: string;
    content: IContent[];
}

interface IContent{
    data: string;
    list?: string[];
}