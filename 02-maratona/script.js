// Exercício 1 - Bolo de Pote (Meta de Vendas)

const vendasRealizadas = 35;
const metaDiaria = 30;

// Verificações usando operadores de comparação
const atingiuMeta = vendasRealizadas >= metaDiaria; // Maior ou igual
const superouMeta = vendasRealizadas > metaDiaria;  // Estritamente maior

// Exibição das mensagens
console.log("Exercício 1 - Bolo de Pote (Meta de Vendas)")
console.log("--- Relatório de Vendas ---");
console.log(`Vendas: ${vendasRealizadas} | Meta: ${metaDiaria}`);

if (atingiuMeta) {
    console.log("✅ Você atingiu a meta do dia.");
} else {
    console.log("❌ A meta ainda não foi alcançada. Continue tentando!");
}

if (superouMeta) {
    const extra = vendasRealizadas - metaDiaria;
    console.log(`🚀 Você superou a meta em ${extra} bolos!`);
}
console.log("\n");


// Exercício 2 - Confeitaria (Frete Grátis)

const valorPedido = 180;
const isVIP = true;

// Regra de negócio: Frete grátis se (Valor > 200) OU (é VIP)
const temFreteGratis = (valorPedido > 200) || isVIP;

// Resultado
console.log("Exercício 2 - Confeitaria (Frete Grátis)")
console.log(`Valor do pedido: R$ ${valorPedido}`);
console.log(`Cliente é VIP? ${isVIP ? "Sim" : "Não"}`);

if (temFreteGratis) {
    console.log("🚚 Muito bom: O frete é GRÁTIS!");
} else {
    console.log("📦 O frete será cobrado para este pedido.");
}
console.log("\n");

/* Exercício 3 - Um atelie de costura oferece 10% se
O valor do serviço for maior ou igual a R$ 500
E
O cliente for antigo
*/

let valorServico = 650;
let clienteAntigo = true;

if (valorServico >= 500 && clienteAntigo) {
    console.log("Exercício 3");
    console.log("Cliente tem direito a 10% de desconto");
} else {
    console.log("Cliente não tem direito ao desconto");
}
console.log("\n");

/* Exercício 4 - Um psicologo atente apenas se:
O horario estiver disponivel
E
O paciente estiver cadastrado
 
Considere:
Horario disponivel true
Paciente cadastrado false
 
Verifique se a consulta pode ser agendada
 
*/

let horarioDisponivel = true;
let pacienteCadastrado = false;

console.log("Exercício 4");
if (horarioDisponivel && pacienteCadastrado) {
    console.log("Consulta pode ser agendada");
} else {
    console.log("Consulta não pode ser agendada");
}