$.getJSON("data.json", function(data) {
    const tbody = $(".dataTable tbody");
    tbody.empty();

    $.each(data, function(index, item) {
        const row = `
        <tr>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td><a href="https://www.google.com/maps?q=${item.location}" target=_blank class="map-btn">View in Google Maps<img src="Google_Maps_pin.svg.webp"alt="img of pin" width="9" height="16"></a></td>
        </tr>
        `;
        tbody.append(row);
    });
})


