document.getElementById('week').addEventListener('change', function(e) {
    let cl = document.getElementById('schedule').classList

    cl.remove('top-only')
    cl.remove('bottom-only')
    cl.add(e.target.value);
});

function getTimes() {
    let clock = document.querySelector('.clock');

    let date = new Date();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    let s = date.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    clock.textContent = h + ":" + m + ":" + s;
}
getTimes();
setInterval(getTimes,1000);

document.addEventListener("DOMContentLoaded", function() {
    function preloader() {
        setInterval(() => {
            let p = document.querySelector('.preloader');
            p.style.opacity = 0;

            setInterval(
                () => p.remove(),
                parseInt(p.style.duratio) * 1000
            );

        }, 2000);
      
    }
    preloader();
} );

