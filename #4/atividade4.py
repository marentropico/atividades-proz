# Função Calculadora
def calculadora(num1, num2, operacao):
    if operacao == 1:
        return (num1 + num2)
    elif operacao == 2:
        return (num1 - num2)
    elif operacao == 3:
        return (num1 * num2)
    elif operacao == 4:
        if num2 == 0:
            return 0
        return (num1 / num2)
    else:
        return 0

# Formatar o resultado
def formatar_numero(valor):
    if valor % 1 == 0:
        return str(int(valor))
    return str(valor).replace('.', ',')

# Inputs do usuário
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))
operacao_escolhida = int(input("Digite 1 para Somar, 2 para Subtrair, 3 para Multiplicar, 4 para Dividir: "))

# Print do Resultado
resultado = calculadora(numero1, numero2, operacao_escolhida)
print("O resultado é", formatar_numero(resultado))