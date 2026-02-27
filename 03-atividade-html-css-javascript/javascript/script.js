function calcularFrete() {
    // 1. Capturar os elementos da tela
    const inputValor = document.getElementById('valorPedido');
    const checkVIP = document.getElementById('isVIP');
    const boxResultado = document.getElementById('resultadoFrete');

    // 2. Obter os valores atuais
    const valor = Number(inputValor.value);
    const vip = checkVIP.checked; // Isso já é um booleano (true ou false)

    // 3. Aplicar a lógica do Exercício 2
    // Regra: Valor > 200 OU Cliente VIP
    const temDireito = (valor > 200) || vip;

    // 4. Atualizar a tela conforme o resultado
    if (temDireito) {
        boxResultado.innerHTML = "🚚 <strong>Frete Grátis Liberado!</strong>";
        boxResultado.className = "status-box frete-gratis";
    } else {
        boxResultado.innerHTML = "📦 <strong>Frete será cobrado.</strong><br><small>Gaste mais de R$ 200 ou torne-se VIP!</small>";
        boxResultado.className = "status-box frete-pago";
    }
}