function addDocument(name){
    var sidebar = document.getElementById("sidebar");
    var documentNode = document.createElement('li');
    documentNode.innerHTML = '<a href="#">' + name + '</a>';
    sidebar.appendChild(documentNode)
}
