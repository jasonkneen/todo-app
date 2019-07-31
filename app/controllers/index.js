Alloy.Collections.tasks.fetch();

function handleRowClick(e) {
    Alloy.Collections.tasks.at(e.index).set("completed", !Alloy.Collections.tasks.at(e.index).get("completed"));
}

function filterModels(collection) {

    console.warn($.displayFilter.index)

    if ($.displayFilter.index == 0) {
        return collection.models;
    }

    if ($.displayFilter.index == 1) {
        return collection.where({
            completed: false
        });
    }

    if ($.displayFilter.index == 2) {
        return collection.where({
            completed: true
        });
    }
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

function updateFilter(){
    Alloy.Collections.tasks.trigger("change");
}

$.index.open();