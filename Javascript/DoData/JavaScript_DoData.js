var data = [];
function loading() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = changetolistdata(this)
            HienThi(data);
        }
    };
    xhttp.open("GET", "Data/sanpham.xml", true);
    xhttp.send();
    var lstproduct;
    var xmlDoc;

    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;
        var lstmuc = ['polo']
        for (j = 0; j < lstmuc.length; j++) {
            lstproduct = xmlDoc.getElementsByTagName(lstmuc[j])[0].getElementsByTagName("product");
            var detailmuc = [];
            for (i = 0; i < lstproduct.length; i++) {
                var product = lstproduct[i]
                var detailproduct = []
                detailproduct.push(product.getElementsByTagName("type")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("name")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("id")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("price")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("image")[0].childNodes[0].nodeValue
                )
                detailmuc.push(detailproduct)
            }
            data.push(detailmuc)
        }
        return data;
    }
    function HienThi(lstrecord) {
        tbody = document.getElementById("mainbody")
        numtdeachrow = 4;
        widthimage = 300;
        heightimage = 300;
        for (i = 0; i < lstrecord.length; i++) {
            var trhead = document.createElement("tr")
            var tdhead = document.createElement("td")
            tdhead.setAttribute('colspan', 4)
            tdhead.setAttribute('class', 'DanhMucSP')
            tbody.appendChild(trhead)
            switch (i) {
                case 0:
                    tdhead.setAttribute('id', 'cateNoi')
                    tdhead.setAttribute('name', 'polo')
                    tdhead.innerText = 'POLO'
                    break;

            }
            trhead.appendChild(tdhead)
            for (k = 0; k < parseInt(lstrecord[i].length / numtdeachrow); k++) {
                var tr = document.createElement("tr")
                tbody.appendChild(tr)
                var record1 = lstrecord[i][k * numtdeachrow]
                var record2 = lstrecord[i][k * numtdeachrow + 1]
                var record3 = lstrecord[i][k * numtdeachrow + 2]
                var record4 = lstrecord[i][k * numtdeachrow + 3]
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                td1.setAttribute('valign', 'top')
                td1.setAttribute('class', 'itemproduct')
                td2.setAttribute('valign', 'top')
                td2.setAttribute('class', 'itemproduct')
                td3.setAttribute('valign', 'top')
                td3.setAttribute('class', 'itemproduct')
                td4.setAttribute('valign', 'top')
                td4.setAttribute('class', 'itemproduct')
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                var img1 = document.createElement("img")
                img1.setAttribute("src", "Image/" + record1[4])
                img1.setAttribute("class", "imgproduct")
                img1.setAttribute("width", widthimage)
                img1.setAttribute("height", heightimage)
                td1.appendChild(img1)

                var content1 = document.createElement("p")
                content1.innerHTML = "<b>" + record1[1].toUpperCase() + "</b>" + "<br/>"
                    + record1[3]
                content1.setAttribute('color', '#000000');
                td1.appendChild(content1)
                var img2 = document.createElement("img")
                img2.setAttribute("src", "Image/" + record2[4])
                img2.setAttribute("class", "imgproduct")
                img2.setAttribute("width", widthimage)
                img2.setAttribute("height", heightimage)
                td2.appendChild(img2)

                var content2 = document.createElement("p")
                content2.innerHTML = "<b>" + record2[1].toUpperCase() + "</b>" + "<br/>"
                    + record2[3]
                content2.setAttribute('color', '#000000');
                td2.appendChild(content2)

                var img3 = document.createElement("img")
                img3.setAttribute("src", "Image/" + record3[4])
                img3.setAttribute("class", "imgproduct")
                img3.setAttribute("width", widthimage)
                img3.setAttribute("height", heightimage)
                td3.appendChild(img3)
                var content3 = document.createElement("p")
                content3.innerHTML = "<b>" + record3[1].toUpperCase() + "</b>"
                    + "<br/>" + record3[3]
                content3.setAttribute('color', '#000000');
                td3.appendChild(content3)
                var img4 = document.createElement("img")
                img4.setAttribute("src", "Image/" + record4[4])
                img4.setAttribute("class", "imgproduct")
                img4.setAttribute("width", widthimage)
                img4.setAttribute("height", heightimage)
                td4.appendChild(img4)
                var content4 = document.createElement("p")
                content4.innerHTML = "<b>" + record4[1].toUpperCase() + "</b>"
                    + "<br/>" + record3[3]
                content4.setAttribute('color', '#000000');
                td4.appendChild(content4)
            }
            if (lstrecord[i].length % numtdeachrow != 0) {
                var trlast = document.createElement('tr')
                tbody.appendChild(trlast)
                for (j = 0; j < (lstrecord[i].length % numtdeachrow); j++) {
                    var td = document.createElement("td")
                    td.setAttribute('class', 'itemproduct')
                    trlast.appendChild(td)
                    record = lstrecord[i][(parseInt(lstrecord[i].length / numtdeachrow) * 3) + j]
                    var img = document.createElement("img")
                    img.setAttribute("src", "Image/" + record[4])
                    img.setAttribute("class", "imgproduct")
                    img.setAttribute("width", widthimage)
                    img.setAttribute("height", heightimage)
                    td.appendChild(img)
                    var content = document.createElement("p")
                    content.innerHTML = "<b>" + record[1].toUpperCase() + "</b>" + "<br/>" +
                        record[3]
                    content.setAttribute('color', '#000000');
                    td.appendChild(content)

                }
            }

        }


    }
}
