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
      for (let i = parseInt(rank); i < ctrlBtns.length; i++) {
        ctrlBtns[i].classList.remove(`c__b${i}`);
        ctrlBtns[i].classList.add(`c__b${i + 1}`);

        ctrls[i].classList.remove(`c${i}`);
        ctrls[i].classList.add(`c${i + 1}`);
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

      const newRank = parseInt(brotherSRank) + 1;


      upGrade(newRank);

      const newArticle = document.createElement('article');
        const newTextArea = document.createElement('textarea');
        const fatherSection = document.getElementsByTagName('section')[fatherSRank];
        const newCtrlButton = document.createElement('div');
        const newDivCtrl = document.createElement('div');



        newArticle.classList.add(`c${newRank}`);
        newCtrlButton.classList.add('ctrl__btn');
        newCtrlButton.classList.add(`c__b${newRank}`);
        newCtrlButton.innerHTML = "Contrôle"
        newDivCtrl.classList.add('ctrl');
        newDivCtrl.style.color = "red";

        newDivCtrl.appendChild(newCtrlButton);


        newArticle.appendChild(newTextArea);
        newArticle.appendChild(newDivCtrl);
        fatherSection.insertBefore(newArticle, document.getElementsByTagName('article')[newRank]);

    };



    window.elt = {
        newMenu: newMenu,
        newCpZone: newCpZone
    }



    }
)();
