$("button").click(function () {
    $.ajax({
        method: "POST",
        url: "/users",
        data: {
            name: $("#exampleInputName").val(),
            age: $("#exampleInputAge").val(),
            item: $("#exampleInputItem").val(),
            description: $("#exampleInputDescription").val()
        }
    }).then(function (data) {
        console.log(data);
    });

    $("#exampleInputName").val(""),
        $("#exampleInputAge").val(""),
        $("#exampleInputItem").val(""),
        $("#exampleInputDescription").val("")
});

function getUsers() {
    $.ajax({
        method: "GET",
        url: "/users",
    })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                var nameDiv = $("<div>").text(data[i].name);
                var ageDiv = $("<div>").text(data[i].age);
                $("#users").append(nameDiv, ageDiv);
                
            };
        });
}

getUsers();