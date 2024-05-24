import type ISVGICon from "./global.type";
import type { IMenu } from "./menu.type";

export default interface IProfile{
    name: string;
    items: IMenu[];
    icons: ISVGICon[];
}

