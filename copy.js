(function () {

    let zone = rank => {
        document.getElementsByClassName(`t${rank}`)[0].select();
        document.execCommand('copy');
        return false;
    }


    window.copy = {
        zone: zone
    }



    }
)();
