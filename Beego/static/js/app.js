document.addEventListener('DOMContentLoaded', function () {
    console.log('Beego application loaded');
});

function showAlert(message, type) {
    var alert = document.createElement('div');
    alert.className = 'alert alert-' + type;
    alert.textContent = message;
    var container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alert, container.firstChild);
        setTimeout(function () {
            alert.remove();
        }, 5000);
    }
}

function handleFormSubmit(formId, callback) {
    var form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        fetch(form.action, {
            method: form.method || 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
                if (callback) callback(result);
            })
            .catch(function (error) {
                showAlert('An error occurred', 'error');
            });
    });
}
