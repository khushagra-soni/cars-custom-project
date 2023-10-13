// script.js

function calculateServiceCost() {
    const serviceForm = document.getElementById('service-form');
    const selectedServices = serviceForm.querySelectorAll('input[name="service"]:checked');
    const tireCount = parseInt(document.getElementById('tire-count').value);
    
    let totalCost = 0;
    let totalTime = 0;

    selectedServices.forEach(function(service) {
        const serviceName = service.value;

        switch (serviceName) {
            case 'car-wash':
                totalCost += 50;
                totalTime += 1;
                break;
            case 'oil-change':
                totalCost += 25;
                totalTime += 0.5;
                break;
            case 'full-service':
                totalCost += 100;
                totalTime += 3;
                break;
            case 'tyre-checking':
                totalCost += 5;
                totalTime += 0.5;
                break;
            case 'tyre-replacement':
                totalCost += 30 * tireCount;
                totalTime += 1 * tireCount;
                break;
        }
    });

    document.getElementById('cost').textContent = `$${totalCost}`;
    document.getElementById('time').textContent = `${totalTime} hours`;
}
