function switchTheme(){
    const theme= document.getElementById("theme").value;
    document.getElementsByTagName("meta")[0].content = theme;
}