Alloy.Collections.tasks.fetch();

function handleRowClick(e) {
    Alloy.Collections.tasks.at(e.index).set("completed", !Alloy.Collections.tasks.at(e.index).get("completed"));
    Alloy.Collections.tasks.at(e.index).save();
}

function handleAdd() {
    if ($.taskName.value) {
        Alloy.Collections.tasks.add(Alloy.Globals.mock.createModel("task", {
            description: $.taskName.value,
            completed: false
        }));

        $.taskName.value = "";

    } else {
        alert("Enter a description!");
    }
}

$.index.open();
