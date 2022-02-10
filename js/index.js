import start from "./modules/start.js";
import getFormPerson from "./modules/formPerson.js";
import preparePlane from "./modules/preparePlane.js"

const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {main, firstForm} = start(app, title);

    firstForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        const forms = getFormPerson(firstForm.count.value);
        firstForm.remove();

        main.append(...forms);
        
        preparePlane(forms, main);
    });
};

init('.app' ,'Выберите тур');