(function () {
    let newDiv = (cls = [], id = '') => {
      const newDiv = document.createElement('div');
      if (cls.length > 0) for (cl of cls) newDiv.classList.add(cl);
      if (id.length != "") newDiv.setAttribute('id', id);

      return newDiv;
    };
    let upGrade = (rank, upOrDown) => {
      let j = upOrDown;

      let ctrls = document.getElementsByClassName("ctrl");
      let ctrlBtns = document.getElementsByClassName("ctrl__btn");
      let ts = document.getElementsByClassName("t");
      let as = document.getElementsByClassName("a");
      let cp__btns = document.getElementsByClassName("cp__btn");
      //let reg__btns = document.getElementsByClassName("reg__btn");

      for (let i = parseInt(rank); i < ctrlBtns.length; i++) {
        ctrlBtns[i].classList.remove(`ctrl__btn${i}`);
        ctrlBtns[i].classList.add(`ctrl__btn${i + j}`);

        ctrls[i].classList.remove(`ctrl${i}`);
        ctrls[i].classList.add(`ctrl${i + j}`);

        ts[i].classList.remove(`t${i}`);
        ts[i].classList.add(`t${i + j}`);

        as[i].classList.remove(`a${i}`);
        as[i].classList.add(`a${i + j}`);

        cp__btns[i].classList.remove(`cp__btn${i}`);
        cp__btns[i].classList.add(`cp__btn${i + j}`);

        //reg__btns[i].classList.remove(`reg__btn${i}`);
        //reg__btns[i].classList.add(`reg__btn${i + j}`);


      }
    };
   
    let newMenu = () => {
      let newMenu = newDiv(['ctrl__menu'], 'ctrl__menu');
      for (let ctrl of [['esc__btn', 'esc'],['ad__btn','+++'],['suppr__btn','---'],['reg__btn', 'Enregister'],['fct__btn', 'Fonctions']]) {
        let newCtrl = newDiv(['ctrl__menu__choice', ctrl[0]], ctrl[0]);
        newCtrl.innerHTML = ctrl[1];
        newMenu.appendChild(newCtrl);
      }

      return newMenu;
    };

    let newCpZone = (brotherSRank, fatherSRank = 0) => {
      // le father rank sera utilisé quand on s'attaquera à l'ajout de section
      const newRank = parseInt(brotherSRank) + 1;

      upGrade(newRank, 1);

      const newArticle = document.createElement('article');

        const newTextArea = document.createElement('textarea');
        const fatherSection = document.getElementsByTagName('section')[fatherSRank];
        const newCpButton = document.createElement('div');
        //const newRegButton = document.createElement('div');
        const newCtrlButton = document.createElement('div');
        const newDivCtrl = document.createElement('div');


        newArticle.classList.add(`a`);
        newArticle.classList.add(`a${newRank}`);
        newTextArea.classList.add(`t`);
        newTextArea.classList.add(`t${newRank}`);
        newCpButton.classList.add('cp__btn');
        newCpButton.classList.add(`cp__btn${newRank}`);
        //newRegButton.classList.add('reg__btn');
        //newRegButton.classList.add(`reg__btn${newRank}`);
        newCtrlButton.classList.add('ctrl__btn');
        newCtrlButton.classList.add(`ctrl__btn${newRank}`);
        newCpButton.innerHTML = "Copier";
        //newRegButton.innerHTML = "REG";
        newCtrlButton.innerHTML = "Contrôle"
        newDivCtrl.classList.add('ctrl');
        newDivCtrl.classList.add(`ctrl${newRank}`);
        newDivCtrl.style.color = "red";

        newDivCtrl.appendChild(newCtrlButton);


        newArticle.appendChild(newTextArea);
        newArticle.appendChild(newCpButton);
        //newArticle.appendChild(newRegButton);
        newArticle.appendChild(newDivCtrl);
        fatherSection.insertBefore(newArticle, document.getElementsByTagName('article')[newRank]);


    };



    window.elt = {
        newMenu: newMenu,
        newCpZone: newCpZone,
        upGrade: upGrade
    }



    }
)();
