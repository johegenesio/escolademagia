let CMD = window.prompt('Qual sua capacidade mágica dominante').toLowerCase();
let HEC = window.prompt('Qual sua habilidade específica').toLowerCase();
let GRPM = window.prompt('Qual seu grau de respeito pela magia');
let AEUP = window.prompt('Qual sua adesão à ética na utilização dos poderes').toLowerCase();
let DPE = window.prompt('Qual sua disposição para trabalhar em equipe').toLowerCase();
let DAC = window.prompt('Qual seu desejo de aprender constantemente').toLowerCase();

if (CMD === 'fogo' && HEC === 'controle de elementos') {
    console.log('Passou no teste');
} else if (CMD === 'cura' && HEC === 'feitiços de proteção') {
    console.log('Passou no teste');
} else if (CMD === 'transformação' && GRPM >= 8) {
    console.log('Passou no teste');
} else if (CMD === 'ilusão' && AEUP === 'sim' && DPE === 'sim') {
    console.log('Passou no teste');
} else {
    console.log('Não passou no teste');
}