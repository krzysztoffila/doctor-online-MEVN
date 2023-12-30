import Cookies from 'js-cookie';

export default function setCookie(cname, cvalue, exdays) {
    Cookies.set(cname, cvalue, {
        expires: exdays
    });
}
