Alloy.Collections.tasks.fetch();

function handleRowClick(e) {
    Alloy.Collections.tasks.at(e.index).set("completed", !Alloy.Collections.tasks.at(e.index).get("completed"));    
}

function handleAdd() {
    if ($.taskName.value) {
        Alloy.Collections.tasks.add(Alloy.Globals.reste.createModel("task", {
            description: $.taskName.value,
            completed: false
        }));

        $.taskName.value = "";

    } else {
        alert("Enter a description!");
    }
}

$.index.open();
