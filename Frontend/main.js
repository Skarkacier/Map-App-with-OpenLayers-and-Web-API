const raster = new ol.layer.Tile({
    source: new ol.source.OSM(),
});
const source = new ol.source.Vector({ wrapX: false });
const vector = new ol.layer.Vector({
    source: source,
});

const mapView = new ol.View({
    center: [3944479.1755277887, 4678992.235938764],
    zoom: 6.7,
});

const map = new ol.Map({
    layers: [raster, vector],
    target: "map",
    view: mapView,
});

document.getElementById("button").addEventListener("click", () => {
    var draw = new ol.interaction.Draw({
        type: "Point",
        source: source,
    });
    map.addInteraction(draw);
    draw.setActive(true);
    draw.on("drawend", function (e) {
        draw.setActive(false);
        let feature = e.feature;
        let coord = feature.getGeometry().getCoordinates();
        coordinate = ol.proj.transform(coord, "EPSG:3857", "EPSG:4326");
        var jspanel = jsPanel.create({
            theme: "primary",
            headerTitle: "Add Location",
            panelSize: {
                width: () => {
                    return Math.min(400, window.innerWidth * 0.9);
                },
                height: () => {
                    return Math.min(250, window.innerHeight * 0.6);
                },
            },
            borderRadius: ".33rem",
            theme: "indigo",
            content: `
            <div class="panel-content-1">
                <p id="coordx">X = ${coordinate[0]}</p>
                <p id="coordy">Y = ${coordinate[1]}</p>
                <label for="locName">Location Name</label>
                <input type="text" id="locName">
                <button id="add" onclick="addItem(locName.value, ${coordinate[0]}, ${coordinate[1]})">Add</button>
            </div>
        `,
        });
        document
            .getElementById("add")
            .addEventListener("click", () => jspanel.close());

        function addItem(name, x, y) {
            fetch("http://localhost:5139/Location/Post", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    name: name,
                    x: x,
                    y: y,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log("Success:", result);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
        window.addItem = addItem;
    });
});

function getItems() {
    fetch("http://localhost:5139/Location")
        .then((response) => {
            if (response.ok) {
                console.log("HTTP request successful");
            } else {
                console.log("HTTP request unsuccessful");
            }
            return response;
        })
        .then((response) => response.json())
        .then((data) => {
            // Verileri döngü ile işaretleyerek haritada göster
            data.forEach((item) => {
                const coordinate = ol.proj.transform(
                    [item.x, item.y],
                    "EPSG:4326",
                    "EPSG:3857"
                );
                const feature = new ol.Feature(new ol.geom.Point(coordinate));
                source.addFeature(feature);
            });
        })
        .catch((error) => console.log(error));
}
window.onload = function () {
    getItems();
};

document.getElementById("button2").addEventListener("click", () => {
    var jspanel = jsPanel.create({
        theme: "primary",
        headerTitle: "Edit",
        panelSize: {
            width: () => {
                return Math.min(450, window.innerWidth * 0.9);
            },
            height: () => {
                return Math.min(340, window.innerHeight * 0.6);
            },
        },
        borderRadius: ".33rem",
        theme: "indigo",
        content: `
        <div class="panel-content-2">
            <label for="Id">Id</label>
            <input type="number" id="Id">
            <label for="locName">Location Name</label>
            <input type="text" id="locName">
            <label for="locX">X</label>
            <input type="number" id="locX">
            <label for="locY">Y</label>
            <input type="number" id="locY">
            <button id="Update" onclick="putItem(Id.value, locName.value, locX.value, locY.value)">Update</button>
            <button id="Delete" onclick="deleteItem(Id.value)">Delete</button>
            <button id="Data">Locations</button>
        </div>
    `,
    });
    document
        .getElementById("Update")
        .addEventListener("click", () => jspanel.close());
    document
        .getElementById("Delete")
        .addEventListener("click", () => jspanel.close());
    document
        .getElementById("Data")
        .addEventListener("click", () => jspanel.close());

    document.getElementById("Data").addEventListener("click", () => {
        fetch("http://localhost:5139/Location")
            .then((response) => {
                if (response.ok) {
                    console.log("HTTP request successful");
                } else {
                    console.log("HTTP request unsuccessful");
                }
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                const tableRows = data
                    .map(
                        (item) => `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.x}</td>
                        <td>${item.y}</td>
                    </tr>
                `
                    )
                    .join("");
                const tableContent = `
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Location Name</th>
                                <th>X</th>
                                <th>Y</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                `;

                var jspanel = jsPanel.create({
                    theme: "primary",
                    headerTitle: "Edit",
                    panelSize: {
                        width: () => {
                            return Math.min(550, window.innerWidth * 0.9);
                        },
                        height: () => {
                            return Math.min(300, window.innerHeight * 0.6);
                        },
                    },
                    borderRadius: ".33rem",
                    theme: "indigo",
                    content: tableContent,
                });
            })
            .catch((error) => console.log(error));

        jspanel.content.style.overflow = "auto";
        jspanel.content.addEventListener("scroll", () => {
            jspanel.resize("auto", "auto");
        });
    });

    function putItem(Id, name, x, y) {
        fetch(`${"http://localhost:5139/Location/Put"}/${Id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                Id: Id,
                name: name,
                x: x,
                y: y,
            }),
        })
            .then(() => getItems())
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    window.putItem = putItem;

    function deleteItem(id) {
        fetch(`${"http://localhost:5139/Location/Del"}/${id}`, {
            method: "DELETE",
        })
            .then(() => getItems())
            .catch((error) => console.error("Unable to delete item.", error));
    }
    window.deleteItem = deleteItem;
});
