import airplane from "./airplane.js";

const preparePlane = (forms, main, tourData) => {
    const data = [];

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            for (const element of form.elements) {
                element.disabled = true;
            }

            data.push({
                name: form.name,
                ticket: form.ticket.value,
            });

            console.log(data);

            if (forms.length === data.length) {
                forms.forEach(form => form.remove());
                airplane(main, data, tourData);
            }
        })
    });
};

export default preparePlane;