import start from "./modules/start.js";
import getFormPerson from "./modules/formPerson.js";
import preparePlane from "./modules/preparePlane.js"
import getData from "./service/getTour.js";

const init = async (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = await getData();


    const {main, firstForm, h1} = start(app, title, data);

    firstForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const tourData = data.find(tour => tour.id === firstForm.tour.value);
        h1.textContent = tourData.tour;
        
        const forms = getFormPerson(firstForm.count.value);
        firstForm.remove();

        main.append(...forms);
        
        preparePlane(forms, main, tourData);
    });
};

init('.app' ,'Выберите тур');