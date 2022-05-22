const opcoes = document.querySelectorAll('.escolha');
let vitoria = 0;
let derrota = 0;
let empate = 0;


opcoes.forEach((escolha) => {
    escolha.addEventListener('click', () => {
        let computador = Math.floor(Math.random() * 3);
        const escolhaComputador = opcoes[computador].getAttribute('data-nome');
        const escolhaCompuadorId = document.getElementById('computador');
        escolhaCompuadorId.src = `./src/img/${escolhaComputador}.png`;

        const escolhaUser = escolha.getAttribute('data-nome');
        const nomeEscolha = document.getElementById('user');
        nomeEscolha.src = `./src/img/${escolhaUser}.png`;

        escolhaCompuadorId.classList.remove('vitoria','derrota','empate');
        nomeEscolha.classList.remove('vitoria','derrota','empate');
        
        
        if (escolhaUser === escolhaComputador) {
            empate++;
            document.getElementById('empate').innerHTML = empate;
            nomeEscolha.classList.add('empate');
            escolhaCompuadorId.classList.add('empate');
        } else if ((escolhaUser === 'pedra') && (escolhaComputador === 'tesoura') ||
            (escolhaUser === 'papel') && (escolhaComputador === 'pedra') ||
            (escolhaUser === 'tesoura') && (escolhaComputador === 'papel')
        ) {
            vitoria++;
            document.getElementById('vitoria').innerHTML = vitoria;
            nomeEscolha.classList.add('vitoria');
            escolhaCompuadorId.classList.add('derrota');
        } else {
            derrota++;
            document.getElementById('derrota').innerHTML = derrota;
            nomeEscolha.classList.add('derrota');
            escolhaCompuadorId.classList.add('vitoria');
        }

    })
})

