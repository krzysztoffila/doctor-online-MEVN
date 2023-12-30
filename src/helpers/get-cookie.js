import Cookies from 'js-cookie';

export default function getCookie(cname) {
    return Cookies.get(cname);
}
