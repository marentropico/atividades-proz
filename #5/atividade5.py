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

# Nomear operações
def nomear_operacao(operacao):
    if operacao == 1:
        return "Soma"
    elif operacao == 2:
        return "Subtração"
    elif operacao == 3:
        return "Multiplicação"
    elif operacao == 4:
        return "Divisão"
    else:
        return ""

# Formatar o resultado
def formatar_numero(valor):
    if valor % 1 == 0:
        return str(int(valor))
    return str(valor).replace('.', ',')

# Interface
while True:
    print("\nEscolha a operação:")
    print("\n-------------------")
    print("1 - Soma          |")
    print("2 - Subtração     |")
    print("3 - Multiplicação |")
    print("4 - Divisão       |")
    print("0 - Sair          |")
    print("-------------------")
    try:
        # Inputs do usuário
        operacao_escolhida = int(input("\nDigite a operação escolhida: "))
        if operacao_escolhida == 0:
            print("\nEncerrando o programa. Até mais!\n")
            break
        if operacao_escolhida < 0 or operacao_escolhida > 4:
            print("\nEssa opção não existe. Tente novamente.")
            continue
        numero1 = float(input("\nDigite o primeiro número: ").replace(',', '.'))
        numero2 = float(input("Digite o segundo número: ").replace(',', '.'))

        # Print do Resultado
        resultado = calculadora(numero1, numero2, operacao_escolhida)
        print(f"\nO resultado da {nomear_operacao(operacao_escolhida)} é {formatar_numero(resultado)}")

    except ValueError:
        print("Por favor, insira um número válido.")