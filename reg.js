(function () {
// tout copier d'un coup ne fonctionne pas : pourquoi --> tenter avec fonction recursive
// ou en transformant zone() en fct asynchrone --> on la relance que quand on à copier la première
// 
    let test = () => {
        let ho = 'ho ho c est le pere noel !!!';
        let trans = `test1 ${ho}`;
        localStorage.setItem('test', `test1 ${ho}`);
        
        console.log(localStorage.getItem(`test`) + " ajout !!!");

        return false;
    }


    window.reg = {
        test: test
    }



    }
)();
