/**
 * Created by Marcel on 25-8-2016.
 */
function get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(M[1])) {
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
    }
    if (M[1]==='Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/i);
        if (tem != null) return {name : tem[1] === 'OPR' ? 'Opera' : tem[1], version : tem[2]};
    }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
        name: M[0],
        version: M[1]
    };
}

function check_browser() {
    try {
        if (localStorage.getItem('browserChecked') === 'false' || localStorage.getItem('browserChecked') == null) {
            var browser = get_browser();
            switch (browser.name) {
                case 'Firefox':
                    if (parseInt(browser.version) < 40)
                        unsupported(browser);
                    break;

                case 'Chrome':
                    if (parseInt(browser.version) < 40)
                        unsupported(browser);
                    break;

                case 'Edge':
                    if (parseInt(browser.version) < 25)
                        unsupported(browser);
                    break;

                case 'IE':
                    unsupported(browser);
                    break;

                case 'Opera':
                    if (parseInt(browser.version) < 15)
                        unsupported(browser);
                    break;

                case 'Safari':
                    if (parseInt(browser.version) < 7)
                        unsupported(browser);
                    break;

                default:
                    unsupported(browser);
                    break;
            }
            localStorage.setItem('browserChecked', 'true');
        }
    } catch (err) {
        var browser = get_browser();
        unsupported(browser);
    }
}

function unsupported(browser) {
    alert('Your browser, ' + browser.name + ' ' + browser.version + ', is not supported by this website. Therefore any performance may differ from expectations.');
}

check_browser();