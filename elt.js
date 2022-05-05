(function () {
    let newDiv = (cls = [], id = '') => {
      const newDiv = document.createElement('div');
      if (cls.length > 0) for (cl of cls) newDiv.classList.add(cl);
      if (id.length != "") newDiv.setAttribute('id', id);

      return newDiv;
    };
    let newMenu = (rank, x, y) => {
      let newMenu = newDiv(['ctrl-menu'], 'ctrl-menu');
      for (let ctrl of [['esc-btn', 'esc'],['ad','+++'],['suppr','---'],['reg', 'Enregister'],['fct', 'Fonctions']]) {
      let newCtrl = newDiv([ctrl[0]], ctrl[0]);
      newCtrl.innerHTML = ctrl[1];
      newMenu.appendChild(newCtrl);
    }

      return newMenu;
    };

    let newCpZone = (fatherSRank, brotherSRank) => {

      const newArticle = document.createElement('article');
        const newTextArea = document.createElement('textarea');
        const fatherSection = document.getElementsByTagName('section')[fatherSRank];
        const newCtrlButton = document.createElement('div');
        const newDivCtrl = document.createElement('div');
        
        
        
       
        newCtrlButton.classList.add('ctrl-btn');
        newCtrlButton.innerHTML = "Contrôle"
        newDivCtrl.classList.add('ctrl');
        newDivCtrl.style.color = "red";
        
        newDivCtrl.appendChild(newCtrlButton);
        
        
        newArticle.appendChild(newTextArea);
        newArticle.appendChild(newDivCtrl);
        fatherSection.insertBefore(newArticle, document.getElementsByTagName('article')[brotherSRank + 1]);

    };



    window.elt = {
        newMenu: newMenu,
        newCpZone: newCpZone
    }



    }
)();
