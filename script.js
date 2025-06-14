function getBill(){
    var packages = document.getElementById('packages').value;

    var days = parseInt(document.getElementById('days').value);

    var guest = parseInt(document.getElementById('guest').value);

    var addPackages = document.getElementById('addPackages').value;


    let package_cost =0;
    let addPackage =0;
    let final_cost =0;
    let result = '';

    if (!packages || isNaN(days) || isNaN(guest)) {
        result = 'Please select valid options or enter valid numbers';
    } else{
        switch(packages) {
            case 'colombo':
                package_cost = 99;
                break;
            case 'kandy':
                package_cost = 150;
                break;
            case 'galle':
                package_cost = 120;
                break;
            case 'ella':
                package_cost = 200;
                break;
            case 'kitulgala':
                package_cost = 180;
                break;
            case 'knuckles':
                package_cost = 250;
                break;
            case 'mirissa':
                package_cost = 170;
                break;
            case 'unawatuna':
                package_cost = 210;
                break;
            case ' negombo':
                package_cost = 130;
                break;
        }

        switch(addPackages){
            case 'no':
                addPackage = 0;
                break;
            case 'veg':
                addPackage = 10;
                break;
            case 'fish':
                addPackage = 12;
                break;
            case 'chicken':
                addPackage = 15;
                break;
        }

        let total_per_guest = (package_cost + addPackage) * days;
        final_cost = total_per_guest * guest;

        result = `Total : $${final_cost}
        Selected Package: ${packages}
        Number of Days: ${days}
        Number of Guest: ${guest}
        Additional Packages: ${addPackages}`
    }

    let choose = confirm('Are you sure you want to continue?');

    if(choose){
        document.getElementById('result').innerText = `${result}`;
    }
    else{
        document.getElementById('result').innerText = `Please Try Again!`;
    }
    
}


function getSearch(){
    var packages = document.getElementById('packages').value;

    var days = parseInt(document.getElementById('days').value);

    var guest = parseInt(document.getElementById('guest').value);

    date = document.getElementById("date").value;

    let package_cost =0;
    let final_cost =0;
    let result = '';

    if (!packages || isNaN(days) || isNaN(guest)) {
        result = 'Please select valid options or enter valid numbers';
    } else{
        switch(packages) {
            case 'colombo':
                package_cost = 99;
                break;
            case 'kandy':
                package_cost = 150;
                break;
            case 'galle':
                package_cost = 120;
                break;
            case 'ella':
                package_cost = 200;
                break;
            case 'kitulgala':
                package_cost = 180;
                break;
            case 'knuckles':
                package_cost = 250;
                break;
            case 'mirissa':
                package_cost = 170;
                break;
            case 'unawatuna':
                package_cost = 210;
                break;
            case ' negombo':
                package_cost = 130;
                break;
        }

        let total_per_guest = (package_cost) * days;
        final_cost = total_per_guest * guest;

        result = `Total : $${final_cost}
        Check-in Date: ${date}
        Selected Package: ${packages}
        Number of Days: ${days}
        Number of Guest: ${guest}`
    }

    let choose = confirm('Are you sure you want to continue?');

    if(choose){
        window.alert(result);
    }
    else{
        document.getElementById('result').innerText = `Please Try Again!`;
    }
    
}