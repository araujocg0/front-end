const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

let expressao = '';

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const valor = botao.textContent;

            if (valor === 'c') {
                expressao = '';
                display.textContent = '0';
                return;
            }

            if (valor === '=') {
                try {
                    expressao = eval(expressao).toString();
                    display.textContent = expressao;
                } catch {
                    display.textContent = 'ERRO';
                    expressao = '';
                }
                return;
            }
            
            expressao += valor;
            display.textContent = expressao;
        });
    }
    );