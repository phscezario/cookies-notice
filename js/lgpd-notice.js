window.onload = function () {

    const cookieDesc = "Nós utilizamos cookies para melhorar a sua experiência no site. Ao continuar navegando, você concorda com as nossas";
    const cookieLink = './politica-de-privacidade/';
    const cookieLinkText = 'Políticas de Privacidade'; 
    const cookieButton = 'Concordo';

    const showCookieWarning = () => {   
        const cookieContainer = document.createElement('div');
        cookieContainer.setAttribute('id', 'lgpd-box');
        cookieContainer.innerHTML +=
                `<div id="lgpd-container">
                    <div>
                        <span>
                            ${cookieDesc} <a href="${cookieLink}" target="_blank">${cookieLinkText}</a>.
                        </span>
                    </div>
                    <div>
                        <a id="lgpd-button">${cookieButton}</a>
                    </div>
                </div>`;

        document.body.appendChild(cookieContainer);

        
        const acceptCookies = () => {
            cookieContainer.remove();
            setCookie("acceptCookies", "1", 7)
        };

        const button = document.querySelector("#lgpd-button");

        button.addEventListener('click', acceptCookies);
    };

    function setCookie(e, o, i) {
        let t = "";
        if (i) {
            const n = new Date();
            n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), (t = "; expires=" + n.toUTCString());
        }
        document.cookie = e + "=" + (o || "") + t + "; path=/";
    }
    
    function getCookie(e) {
        for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
            for (var n = i[t]; " " == n.charAt(0); ) n = n.substring(1, n.length);
            if (0 == n.indexOf(o)) return n.substring(o.length, n.length);
        }
        return null;
    }
    
    if (getCookie('acceptCookies') === null) showCookieWarning();
};