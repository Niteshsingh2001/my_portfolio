const API_URL = 'https://niteshsingh2001.github.io/portfolio/api/data.json';
let work = document.getElementById("my_work")

axios.get(API_URL)
    .then(response => {
        data = response.data
        let html = `<div>`;

        for (let i = 0; i <= 1; i++) {

            html += `
                <div class=" work_Card">
                <h3 class="work_name">${data[i].name}</h3>
                <p>${data[i].description}</p>
                <div class="work_links ">
                `

            for (let j = 0; j < data[i].links.length; j++) {

                html += `
                        <a href="${data[i].links[j].url}" class="work_link" target="_blank">${data[i].links[j].name}</a >
                        `

            }
            html += "</div ></div>\n"
        }
        work.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });