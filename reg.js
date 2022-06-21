(function () {
// tout copier d'un coup ne fonctionne pas : pourquoi --> tenter avec fonction recursive
// ou en transformant zone() en fct asynchrone --> on la relance que quand on à copier la première
// 
let storages = Object.entries(localStorage);
// pourquoi si je ne met pas  || item[0] == '0' je n'ai pas l'item 0 ?
let zones = storages.filter(item => Number(item[0]) || item[0] == '0').map(item => parseInt(item[0])).sort();
    let test = () => {
        let ho = 'ho ho c est le pere noel !!!';
        let trans = `test1 ${ho}`;
        localStorage.setItem('test', `test1 ${ho}`);
        
        console.log(localStorage.getItem(`test`) + " ajout !!!");

        return false;
    };
    let upGrade = (rank, onSession = true) => {

        //for (let i = zones.length - 1; i > rank; zones) 
        console.log(zones)
    }
    let zone = rank => {
        upGrade(rank, false);
        localStorage.setItem(rank, document.getElementsByClassName(`t${rank}`)[0].value);
    }
    let getZone = rank => localStorage.getItem(rank);

    window.reg = {
        test: test,
        zone: zone,
        getZone: getZone
    }



    }
)();
