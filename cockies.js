// Função para obter o valor do cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

// Função para definir o cookie com validade de um mês
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    } else {
        // Se o número de dias não for fornecido, define a validade como um mês (30 dias)
        var month = 30 * 24 * 60 * 60 * 1000;
        var date = new Date();
        date.setTime(date.getTime() + month);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para verificar se o cookie já está definido
function checkCookie() {
    var gameState = getCookie('gameState');
    if (!gameState) {
        // Se o cookie não estiver definido, define-o com um estado inicial vazio
        setCookie('gameState', JSON.stringify({}), 30); // Defina o valor inicial do estado do jogo aqui
    }
}

// Chamar a função checkCookie quando a página for carregada para verificar e carregar o estado do jogo existente
window.onload = checkCookie;
