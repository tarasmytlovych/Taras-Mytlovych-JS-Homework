
function showUser(id) {
    if (isNaN(id)) throw new Error(`Nan user id was passed: ${id}`);
    if (Number(id) < 0) throw new Error(`ID must not be negative: ${id}`);

    return {
        "id": id
    };
}


function showUsers(ids) {
    var array = [];
    for (const id of ids) {
        try {
            var userObj = showUser(id);
            array.push(JSON.stringify(userObj));
        } catch (err) {
            console.log(`${err.message}`);
        }
    }
    console.log(`${array}`);
}

var testArrays = [-1, 0, "23", 32, "q"];
showUsers(testArrays);