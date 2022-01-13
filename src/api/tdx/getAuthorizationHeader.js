import jsSHA from 'jssha';

function getAuthorizationHeader() {
    const AppID = process.env.REACT_APP_TDX_API_ID || 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
    const AppKey = process.env.REACT_APP_TDX_API_KEY || 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';

    const GMTString = new Date().toGMTString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

    return {
        Authorization: Authorization,
        'X-Date': GMTString
    };
}

export default getAuthorizationHeader;