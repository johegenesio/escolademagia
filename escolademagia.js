function resultado() {
    let cmd = document.getElementById("poder").value;
    let hec = document.getElementById("habilidade").value;
    let grm = document.getElementById("grau_respeito").value;
    let eup = document.getElementById("etica").value;
    let dte = document.getElementById("equipe").value;
    let dpc = document.getElementById("aprender").value;
    let cor_res = document.getElementById("cor_res")
    let btn = document.getElementById("btn")
    if (cmd == 'Fogo' && hec == 'Controle de Elementos') {
        document.getElementById("res").innerHTML = 'Passou na qualificação';
        cor_res.style.backgroundColor = "#8dd8a9"
        btn.style.backgroundColor = "#8dd8a9"
    } else if (cmd == 'Cura' && hec == 'Feitiços de Proteção') {
        document.getElementById("res").innerHTML = 'Passou na qualificação';
        cor_res.style.backgroundColor = "#8dd8a9"
        btn.style.backgroundColor = "#8dd8a9"
    } else if (cmd == 'Transformação' && grm >= 8) {
        document.getElementById("res").innerHTML = 'Passou na qualificação';
        cor_res.style.backgroundColor = "#8dd8a9"
        btn.style.backgroundColor = "#8dd8a9"
    } else if (cmd == 'Ilusão' && eup == 'Sim' && dte == 'Sim') {
        document.getElementById("res").innerHTML = 'Passou na qualificação';
        cor_res.style.backgroundColor = "#8dd8a9"
        btn.style.backgroundColor = "#8dd8a9"
    } else {
        document.getElementById("res").innerHTML = 'Não passou na qualificação';
        cor_res.style.backgroundColor = "#d88d8d"
        btn.style.backgroundColor = "#d88d8d"
    }
}