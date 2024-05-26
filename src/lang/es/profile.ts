import type IProfile from "../../data/types/profile.type";
import github from "../../assets/svg/profile/github.astro";
import linkedin from "../../assets/svg/profile/linkedin.astro";
import twitter from "../../assets/svg/profile/twitter.astro";
import gitlab from "../../assets/svg/profile/gitlab.astro";
import mail from "../../assets/svg/profile/mail.astro";
import whatsapp from "../../assets/svg/profile/whatsapp.astro";
import instagram from "../../assets/svg/profile/instagram.astro";


const profile: IProfile = {
    name: "Juan Zuñiga",
    items:[
        {label: "Inicio", href: "/"},
        {label: "Sobre Mi", href: "/about"},
        {label: "Projectos", href: "/projects"},
        {label: "Blog", href: "https://www.rustedcor.com"},
    ],
    icons:[
        {label: github, href: "https://github.com/JuanZuniga7"},
        {label: linkedin, href: "https://www.linkedin.com/in/zunigajuan7"},
        {label: twitter, href: "https://x.com/rusted_cor"},
        {label: gitlab, href: "https://gitlab.com/rusted.cor79"},
        {label: mail, href: "/contact"},
        {label: whatsapp, href: "https://wa.me/573054725724"},
        {label: instagram, href: "https://www.instagram.com/rusted.cor79/"},
    ]
} as IProfile;

export default profile;