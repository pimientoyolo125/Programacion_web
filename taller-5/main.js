let dataTable;
let dataTableIsInitialized = false;



const initDataTable = async() => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }

    await listUsers();

    dataTable = $("#datatable_users").DataTable();

    dataTableIsInitialized = true;
};

const listUsers = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        let content = ``;
        users.forEach((user, index) => {
            content += `
                <tr>
                    <th>${index + 1}</th>
                    <th>${user.name}</th>
                    <th>${user.email}</th>
                    <th>${user.address.city}</th>
                    <th>${user.company.name}</th>
                </tr>`;
        });
        tableBody_users.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async() => {
    await initDataTable();
});