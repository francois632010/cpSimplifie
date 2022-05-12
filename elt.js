(function () {
    let newDiv = (cls = [], id = '') => {
      const newDiv = document.createElement('div');
      if (cls.length > 0) for (cl of cls) newDiv.classList.add(cl);
      if (id.length != "") newDiv.setAttribute('id', id);

      return newDiv;
    };
    let upGrade = rank => {
      let ctrls = document.getElementsByClassName("ctrl");
      let ctrlBtns = document.getElementsByClassName("ctrl__btn");
      let ts = document.getElementsByClassName("t");
      let as = document.getElementsByClassName("a");
      let cp__btns = document.getElementsByClassName("cp__btn");
      for (let i = parseInt(rank); i < ctrlBtns.length; i++) {
        ctrlBtns[i].classList.remove(`c__b${i}`);
        ctrlBtns[i].classList.add(`c__b${i + 1}`);

        ctrls[i].classList.remove(`c${i}`);
        ctrls[i].classList.add(`c${i + 1}`);

        ts[i].classList.remove(`t${i}`);
        ts[i].classList.add(`t${i + 1}`);

        as[i].classList.remove(`a${i}`);
        as[i].classList.add(`a${i + 1}`);

        cp__btns[i].classList.remove(`cp__btn${i}`);
        cp__btns[i].classList.add(`cp__btn${i + 1}`);


      }
    }
    let newMenu = () => {
      let newMenu = newDiv(['ctrl__menu'], 'ctrl__menu');
      for (let ctrl of [['esc-btn', 'esc'],['ad','+++'],['suppr','---'],['reg', 'Enregister'],['fct', 'Fonctions']]) {
        let newCtrl = newDiv([ctrl[0]], ctrl[0]);
        newCtrl.innerHTML = ctrl[1];
        newMenu.appendChild(newCtrl);
      }

      return newMenu;
    };

    let newCpZone = (fatherSRank, brotherSRank) => {
console.log('newCpZone au rang ' + brotherSRank)
      const newRank = parseInt(brotherSRank) + 1;


      upGrade(newRank);

      const newArticle = document.createElement('article');

        const newTextArea = document.createElement('textarea');
        const fatherSection = document.getElementsByTagName('section')[fatherSRank];
        const newCpButton = document.createElement('div');
        const newCtrlButton = document.createElement('div');
        const newDivCtrl = document.createElement('div');


        newArticle.classList.add(`a`);
        newArticle.classList.add(`a${newRank}`);
        newTextArea.classList.add(`t`);
        newTextArea.classList.add(`t${newRank}`);
        newCpButton.classList.add('cp__btn');
        newCpButton.classList.add(`cp__btn${newRank}`);
        newCtrlButton.classList.add('ctrl__btn');
        newCtrlButton.classList.add(`c__b${newRank}`);
        newCpButton.innerHTML = "Copier";
        newCtrlButton.innerHTML = "Contrôle"
        newDivCtrl.classList.add('ctrl');
        newDivCtrl.classList.add(`c${newRank}`);
        newDivCtrl.style.color = "red";

        newDivCtrl.appendChild(newCtrlButton);


        newArticle.appendChild(newTextArea);
        newArticle.appendChild(newCpButton);
        newArticle.appendChild(newDivCtrl);
        fatherSection.insertBefore(newArticle, document.getElementsByTagName('article')[newRank]);


    };



    window.elt = {
        newMenu: newMenu,
        newCpZone: newCpZone
    }



    }
)();
