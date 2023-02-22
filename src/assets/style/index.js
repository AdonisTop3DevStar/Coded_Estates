import { THEME_TYPE, Theme } from "../../configs/Constants";

export const Style = (theme) => `
body {
    background-color : ${Theme[theme].background};
    color : ${Theme[theme].text};
}

select, 
input {
    background-color : ${Theme[theme].background} !important;
    color : ${Theme[theme].text} !important;
}

select:active,
select:focus,
select:focus-visible,
input:active,
input:focus,
input:focus-visible  {
    box-shadow : none !important;
    outline : none;
}

.border {
    border-color : ${Theme[theme].border} !important;
}

.nav-link,
.nav-link:hover,
.nav-link:active,
.nav-link.show,
.nav-link:focus {
    color : ${Theme[theme].text};
}

.Header {
    border-bottom : 1px solid ${Theme[theme].border};
}

.NormalCard {
    background-color : ${Theme[theme].background} !important;
    color : ${Theme[theme].text};
    border : 1px solid ${Theme[theme].border};
}

.SecondPrimaryBtn {
    background : ${Theme[theme].secondPrimaryBtnBG} !important;
    color : ${Theme[theme].secondPrimaryBtnText} !important;
    border : 1px solid ${Theme[theme].secondPrimaryBtnBorder} !important;
    font-weight : 500;
}

button.secondPrimaryFillBtn {
    background-color : ${Theme[theme].secondPrimaryFillBtnBG} !important;
    color : ${Theme[theme].secondPrimaryFillBtnText};
}

.Sidebar {
    border-color : ${Theme[theme].border};
}

`;