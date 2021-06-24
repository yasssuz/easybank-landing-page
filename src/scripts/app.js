import { handleToggler } from "./handleToggler";
import { getQuery } from "./utils";

const toggler = getQuery('.header__mobile-toggler')

toggler.addEventListener('click', () => handleToggler(toggler))