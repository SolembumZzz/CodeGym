class Order {
    constructor(orderID, date, status, customer, email, tel, location) {
        this.orderID = orderID;
        this.date = date;
        this.status = status;
        this.customer = customer;
        this.email = email;
        this.tel = tel;
        this.location = location;
    }
}

//add local storage

// const orderData = [];

const orders = [
    new Order(1, "Jul-20-2022", "Pending", "Han Nguyen", "hannguyen7796@gmail.com", "0924018513", "Da Nang"),
    new Order(2, "Feb-20-2022", "Canceled", "Phuong Thao", "phuong@gmail.com", "0935670606", "Hue"),
    new Order(3, "Jul-21-2022", "Dispatched", "Nhan Nguyen", "Nhan@gmail.com", "0915438794", "Ho Chi Minh"),
    new Order(4, "Mar-12-2022", "Suspended", "Uyen Phuong", "Uyen@gmail.com", "0915770407", "Ha Noi")
]

function renderOrders() {
    let htmls = orders.map(function (order) {
        return `
            <tr>
                <td><input type="checkbox" name="checkOrder" id="checkbox${order.orderID}"></td>
                <td>${order.orderID}</td>
                <td>${order.date}</td>
                <td id="status_${order.orderID}">${order.status}</td>
                <td id="customer_${order.orderID}">${order.customer}</td>
                <td id="email_${order.orderID}">${order.email}</td>
                <td id="tel_${order.orderID}">${order.tel}</td>
                <td id="location_${order.orderID}">${order.location}</td>
                <td class="action">
                    <i title="Modify order" class="fas fa-cogs" onclick="openMenu(${order.orderID})"></class=>
                        <i title="Edit order" class="fas fa-pen-nib" onclick="editOrder(${order.orderID})"></i>
                            <i title="Save" class="fas fa-save" onclick="saveEdit(${order.orderID})"></i>
                            <i title="Cancel" class="fas fa-times" onclick="cancelEdit(${order.orderID})"></i>
                        <i title="Remove order" class="fa fa-trash" onclick="removeOrder(${order.orderID})"></i>
                </td>
            </tr>`
    })
    document.getElementById('orderList').innerHTML = htmls.join('');
}

function submitNew() {
    let currentID = findMaxID() + 1;
    let date = document.getElementById('inputDate').value;
    let status = document.getElementById('inputStatus').value;
    let customer = document.getElementById('inputCustomer').value;
    let email = document.getElementById('inputEmail').value;
    let tel = document.getElementById('inputTel').value;
    let location = document.getElementById('inputLocation').value;

    orders.push(new Order(currentID, date, status, customer, email, tel, location));
    renderOrders();
    clearForm();
}

function findMaxID() {
    let sortedOrders = [...orders].sort(function (a, b) { return b.orderID - a.orderID; })
    return sortedOrders[0].orderID;
}

function clearForm() {
    document.getElementById('inputDate').value = '';
    document.getElementById('inputStatus').value = '';
    document.getElementById('inputCustomer').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputTel').value = '';
    document.getElementById('inputLocation').value = '';
}

function getOrderByID(currentID) {
    return orders.find(function (order) {
        return order.orderID === currentID;
    })
}

function openMenu(currentID) {

}

function editOrder(currentID) {
    let order = getOrderByID(currentID);
    let status = document.querySelector(`#status_${order.orderID}`);
    status.innerHTML = `<select id="changeStatus_${order.orderID}">
                            <option value="pending" ${(order.status == 'Pending') ? 'selected': ""}>Pending</option>
                            <option value="dispatched" ${(order.status == 'Dispatched') ? 'selected': ""}>Dispatched</option>
                            <option value="suspended" ${(order.status == 'Suspended') ? 'selected': ""}>Suspended</option>
                            <option value="canceled" ${(order.status == 'Canceled') ? 'selected': ""}>Canceled</option>
                        </select>`

    let customer = document.querySelector(`#customer_${order.orderID}`);
    customer.innerHTML = `<input type="text" id="changeCustomer_${order.orderID}" value="${order.customer}">`

    let email = document.querySelector(`#email_${order.orderID}`);
    email.innerHTML = `<input type="email" id="changeEmail_${order.orderID}" value="${order.email}">`

    let tel = document.querySelector(`#tel_${order.orderID}`);
    tel.innerHTML = `<input type="tel" id="changeTel_${order.orderID}" value="${order.tel}">`

    let location = document.querySelector(`#location_${order.orderID}`);
    location.innerHTML = `<input type="text" id="changeLocation_${order.orderID}" value="${order.location}">`

}

function saveEdit(currentID) {

}

function cancelEdit(currentID) {

}

function removeOrder(currentID) {
    let confirmed = window.confirm('Are you sure to delete this order?')
    if (confirmed) {
        let position = orders.findIndex(function (order) {
            return order.orderID === currentID;
        })
        orders.splice(position, 1);
        renderOrders();
    }
}

function selectAll() {

}

(function () {
    renderOrders();
})()