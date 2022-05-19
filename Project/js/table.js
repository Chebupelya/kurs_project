const Token = "https://run.mocky.io/v3/c9af82ea-e63f-4673-af73-ed80b9ae8630";
fetch(Token)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const container = document.getElementById("tbody");
        data.map((val, index) => {
            console.log(val);
            let string = `<tr>
                                    <td>${val["train"]}</td>
                                    <td>${val["arriving"]}</td>
                                    <td>${val["leaving"]}</td>
                                    <td>${val["path"]}</td>
                                    <td>${val["platform"]}</td>
                                    <td>${val["numbering"]}</td>
                                    <td>${val["lating"]}</td>
                                </tr>`;
            container.insertAdjacentHTML("beforeend", string);
        });
    });