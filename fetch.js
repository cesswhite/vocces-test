const users = [];

async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        users.push(...data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function createRow(user) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.setAttribute("id", `wrapper-${user.id}`);

    const container = document.createElement("div");
    container.classList.add("row");
    container.setAttribute("id", `container-${user.id}`);

    const fields = [
        { name: "id", class: "col" },
        { name: "name", class: "col" },
        { name: "username", class: "col" },
        { name: "phone", class: "col" },
        { name: "email", class: "col" },
    ];

    fields.forEach((field) => {
        const span = document.createElement("span");
        span.classList.add(field.class, "truncate-text");
        span.innerText = truncateText(user[field.name], 20);
        container.appendChild(span);
    });

    const hiddenData = document.createElement("div");
    hiddenData.classList.add("hidden-data", "text-dark");
    hiddenData.setAttribute("id", `hidden-data-${user.id}`);
    hiddenData.style.display = "none";

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("hidden-container");

    const titleAddress = document.createElement("span");
    titleAddress.classList.add("title-info-hidden-data");
    titleAddress.innerText = "Street";

    const addressInfo = document.createElement("p");
    addressInfo.innerText = `${user.address.street} ${user.address.suite}`;

    const postalCode = document.createElement("p");
    postalCode.innerText = `${user.address.city} ${user.address.zipcode}`;

    addressContainer.appendChild(titleAddress);
    addressContainer.appendChild(addressInfo);
    addressContainer.appendChild(postalCode);

    const companyContainer = document.createElement("div");
    companyContainer.classList.add("hidden-container");

    const titleCompany = document.createElement("span");
    titleCompany.classList.add("title-info-hidden-data");
    titleCompany.innerText = "Company";

    const companyInfo = document.createElement("p");
    companyInfo.innerText = `${user.company.name}`;

    companyContainer.appendChild(titleCompany);
    companyContainer.appendChild(companyInfo);

    hiddenData.appendChild(addressContainer);
    hiddenData.appendChild(companyContainer);

    container.addEventListener("click", () => {
        const isOpen = hiddenData.style.display === "none";
        hiddenData.style.display = isOpen ? "flex" : "none";
        hiddenData.classList.toggle("open", isOpen);
    });

    wrapper.appendChild(container);
    wrapper.appendChild(hiddenData);

    return wrapper;
}

function displayData() {
    const container = document.createElement("div");
    users.forEach((user) => {
        const row = createRow(user);
        container.appendChild(row);
    });
    containerTable.appendChild(container);
}

window.addEventListener("DOMContentLoaded", async () => {
    if (document.readyState !== "loading") {
        await getData();
        displayData();
    } else {
        console.log("Not ready");
    }
});
