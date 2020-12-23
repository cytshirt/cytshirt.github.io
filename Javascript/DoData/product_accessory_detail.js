// JavaScript source code
var data = [];
function loading2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = changetolistdata(this);
            HienThi(data);
        }
    };
    xhttp.open("GET", "Data/sanpham.xml", true);
    xhttp.send();
    var lstproduct;
    var xmlDoc;
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function (m, key, value) {
                vars[key] = value;
            });
        return vars;
    }

    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;
        var lstmuc = ['accessory']
        for (j = 0; j < lstmuc.length; j++) {
            lstproduct = xmlDoc.getElementsByTagName(lstmuc[j])[0].getElementsByTagName("product");
            var detailmuc = [];
            for (i = 0; i < lstproduct.length; i++) {
                var product = lstproduct[i]
                var detailproduct = []
                detailproduct.push(product.getElementsByTagName("type")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("name")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("id")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("description")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("price")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("image")[0].childNodes[0].nodeValue,

                )
                detailmuc.push(detailproduct)
            }
            data.push(detailmuc)
        }
        return data;
    }
    function HienThi(lstrecord) {
        var idsp = unescape(getUrlVars()["id"])
        tbody = document.getElementById("detailproduct2")
        var tr = document.createElement("tr")
        tbody.appendChild(tr)

        var td1 = document.createElement("td")
        var td2 = document.createElement("td")

        td1.setAttribute('valign', 'top')
        td1.setAttribute('class', 'motatd1')
        td1.setAttribute('align', 'center')
        td2.setAttribute('valign', 'top')
        td2.setAttribute('class', 'motatd2')
        tr.appendChild(td1)
        tr.appendChild(td2)

        for (var i = 0; i < lstrecord.length; i++) {
            for (var j = 0; j < lstrecord[i].length; j++) {
                if (lstrecord[i][j][2] == idsp) {
                    var img = document.createElement("img")
                    img.setAttribute("src", "Data/ImgProduct/" + lstrecord[i][j][5])
                    img.setAttribute("class", "imgproduct")

                    td1.appendChild(img)
                    var ten = document.createElement("div")
                    ten.setAttribute('class', 'nameproductdt')
                    ten.innerHTML = "<b>" + lstrecord[i][j][1].toUpperCase() + "</b>"
                    td2.appendChild(ten)


                    var gia = document.createElement("div")
                    gia.setAttribute('class', 'giaproductdt')
                    gia.innerHTML = lstrecord[i][j][4] + " VNĐ"
                    td2.appendChild(gia)

                    var hr = document.createElement("hr")
                    hr.setAttribute('class', 'hrdetail')
                    td2.appendChild(hr)

                    var title = document.createElement("span")
                    title.setAttribute('class', 'titleChiTiet')
                    title.innerHTML = "Product detail:"
                    td2.appendChild(title);

                    var mota = document.createElement("div")
                    mota.setAttribute('class', 'motasp')
                    mota.innerHTML = lstrecord[i][j][3]
                    td2.appendChild(mota)




                    var titlesize = document.createElement("span")
                    titlesize.setAttribute('class', 'titleSiz')
                    titlesize.innerHTML = "Size" + "</br>"
                    td2.appendChild(titlesize);

                    var sizebox = document.createElement("div")
                    sizebox.setAttribute('class', 'sizebox')

                    var lable = document.createElement("label")
                    lable.setAttribute('class', 'radio')
                    var inputsize = document.createElement("input")
                    inputsize.setAttribute('class', 'inputsize')
                    inputsize.type = "radio"
                    lable.appendChild(inputsize);
                    var spansize = document.createElement("span")
                    spansize.innerText = "S"
                    lable.appendChild(spansize);
                    sizebox.appendChild(lable)


                    var lable2 = document.createElement("label")
                    lable2.setAttribute('class', 'radio')
                    var inputsize2 = document.createElement("input")
                    inputsize2.type = "radio"
                    inputsize2.setAttribute('class', 'inputsize')
                    lable2.appendChild(inputsize2);
                    var spansize2 = document.createElement("span")
                    spansize2.innerText = "M"
                    lable2.appendChild(spansize2);
                    sizebox.appendChild(lable2)


                    var lable3 = document.createElement("label")
                    lable3.setAttribute('class', 'radio')
                    var inputsize3 = document.createElement("input")
                    inputsize3.type = "radio"
                    inputsize3.setAttribute('class', 'inputsize')
                    lable3.appendChild(inputsize);
                    var spansize3 = document.createElement("span")
                    spansize3.innerText = "L"
                    lable3.appendChild(spansize3);
                    sizebox.appendChild(lable3)


                    var lable4 = document.createElement("label")
                    lable4.setAttribute('class', 'radio')
                    var inputsize4 = document.createElement("input")
                    inputsize4.setAttribute('class', 'inputsize')
                    inputsize4.type = "radio"
                    lable4.appendChild(inputsize4);
                    var spansize4 = document.createElement("span")
                    spansize4.innerText = "XL"
                    lable4.appendChild(spansize4);
                    sizebox.appendChild(lable4)
                    td2.appendChild(sizebox);

                    var text = document.createElement("span")
                    text.setAttribute('class', 'txt')
                    text.innerHTML = "Số lượng: " + "</br>"
                    td2.appendChild(text)

                    var quantitycontainer = document.createElement("div")
                    quantitycontainer.setAttribute('class', 'quantity')
                    var plus = document.createElement("span")
                    plus.setAttribute('class', 'plus')
                    var quant = document.createElement("span")
                    var minus = document.createElement("span")
                    minus.setAttribute('class', 'minus')
                    plus.innerText = '+'
                    quant.innerText = '1'
                    minus.innerText = '-'
                    plus.setAttribute("class", "btnquant")
                    minus.setAttribute("class", "btnquant")
                    plus.setAttribute("onclick", "xuLyquant(1)")
                    minus.setAttribute("onclick", "xuLyquant(-1)")
                    quant.setAttribute("id", "idquant")
                    var divdathang = document.createElement("div")
                    divdathang.setAttribute('class', 'button-order-contain')
                    var btndathang = document.createElement("button")
                    btndathang.setAttribute('class', 'button-order')
                    btndathang.innerHTML = "ADD TO CART "
                    divdathang.appendChild(btndathang)
                    quantitycontainer.appendChild(minus)
                    quantitycontainer.appendChild(quant)
                    quantitycontainer.appendChild(plus)
                    quantitycontainer.appendChild(divdathang)
                    td2.appendChild(quantitycontainer)




                }
            }

        }

    }


}
function xuLyquant(stt) {
    quant = document.getElementById("idquant");
    quantnum = parseFloat(quant.childNodes[0].nodeValue);
    // gia = document.getElementById("idbtndathang");
    //giasp = parseFloat(gia.childNodes[0].nodeValue.substring(2)) / quantnum;

    if (quantnum != 1 || stt != -1) {
        quantnum = quantnum + stt;
        quant.innerText = quantnum + "";
        // gia.innerHTML = "+ " + (giasp * quantnum)
    }

}

