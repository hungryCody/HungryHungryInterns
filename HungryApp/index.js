function submitNotice(clickedId) {
    var location = document.getElementById("location").value;
    var user = document.getElementById("usr").value;
    var room = document.getElementById("roomNumber").value;
    var building = document.getElementById("building").value;
    console.log(clickedId);

    console.log(location);
    console.log(user);
    console.log(room);
    console.log(building);

    //    console.log(document.getElementById("location").value);
}

function configureDropDownLists(ddl1,ddl2) {
    var colours = ['Black', 'White', 'Blue'];
    var shapes = ['Square', 'Circle', 'Triangle'];
    var names = ['John', 'David', 'Sarah'];
    

    switch (ddl1.value) {
        case 'Richmond':
            ddl2.options.length = 0;
            for (i = 0; i < colours.length; i++) {
                createOption(ddl2, colours[i], colours[i]);
            }
            break;
        case 'McLean':
            ddl2.options.length = 0; 
        for (i = 0; i < shapes.length; i++) {
            createOption(ddl2, shapes[i], shapes[i]);
            }
            break;
        case 'SanFran':
            ddl2.options.length = 0;
            for (i = 0; i < names.length; i++) {
                createOption(ddl2, names[i], names[i]);
            }
            break;
        case 'Plano':
            ddl2.options.length = 0;
            for (i = 0; i < names.length; i++) {
                createOption(ddl2, names[i], names[i]);
            }
        case 'NewYork':
            ddl2.options.length = 0;
            for (i = 0; i < names.length; i++) {
                createOption(ddl2, names[i], names[i]);
            }
        case 'Chicago':
            ddl2.options.length = 0;
            for (i = 0; i < names.length; i++) {
                createOption(ddl2, names[i], names[i]);
            }
        case 'Delaware':
            ddl2.options.length = 0;
            for (i = 0; i < names.length; i++) {
                createOption(ddl2, names[i], names[i]);
            }
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