function submitNotice(clickedId) {
    var location = document.getElementById("locationList").value;
    var Title = document.getElementById("titleDescription").value;
    var Room = document.getElementById("roomNumber").value;
    var building = document.getElementById("bldgList").value;
    var endTime = document.getElementById("endDate").value;
    console.log(clickedId);

    console.log(location);
    console.log(Title);
    console.log(Room);
    console.log(building);

    createFoodEvent(Title, Room, building, location, endTime);
    //    console.log(document.getElementById("location").value);
}

function createFoodEvent(txtTitle, txtRoom, txtBuilding, txtLocation, txtEndTime) {
    firebase.database().ref('users/' + userId).set({
        Title: txtTitle,
        Room: txtRoom,
        Building: txtBuilding,
        Location: txtLocation,
        EndDate: txtEndTime,
    });
}

function configureDropDownLists(ddl1, ddl2) {
    var Richmond = ['1', '2', '3', '4', '5', '6', '7', '8', 'TC', 'CC'];
    var McLean = ['Towers 1', 'Towers 2', '1750', 'McLean HQ'];
    var Plano = ['1', '2', '3', 'TC', 'CC', '5', '6'];


    switch (ddl1.value) {
    case 'Richmond':
        ddl2.options.length = 0;
        for (i = 0; i < Richmond.length; i++) {
            createOption(ddl2, Richmond[i], Richmond[i]);
        }
        break;
    case 'McLean':
        ddl2.options.length = 0;
        for (i = 0; i < McLean.length; i++) {
            createOption(ddl2, McLean[i], McLean[i]);
        }
        break;
    case 'Plano':
        ddl2.options.length = 0;
        for (i = 0; i < Plano.length; i++) {
            createOption(ddl2, Plano[i], Plano[i]);
        }
        break;
    default:
        ddl2.options.length = 0;
        break;
    }

}

function createOption(ddl, text, value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
}