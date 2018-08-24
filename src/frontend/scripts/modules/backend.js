
(function (doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = () => {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 575) {
                docEl.style.fontSize = '16px';
            } else if (clientWidth <= 575) {
                docEl.style.fontSize = 20 * (clientWidth / 575) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
