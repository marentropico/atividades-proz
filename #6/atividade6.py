# Função de Calcular idade
def calcular_idade(ano_nasc):
    ano_22 = 2022
    return ano_22 - ano_nasc

# Input do User
nome_user = input("\nDigite seu nome completo: ")

# Loop principal
while True:
    try:
        input_ano = input("Digite seu ano de nascimento ou Digite 0 para Sair: ")
        # Erro de campo vazio
        if input_ano == "":
            raise Exception("Campo vazio, por favor digite um ano.")
        # Erro de campo não numérico
        if not input_ano.isdigit():
            raise Exception("Por favor, digite apenas números inteiros.")
        # Break
        if int(input_ano) == 0:
            print("\nEncerrando programa. Até mais!\n")
            break
        # Erro de intervalo
        if int(input_ano) < 1922 or int(input_ano) > 2021:
            raise Exception("Intervalo Inválido, por favor digite uma data entre 1922 e 2021.")
        # Calcular idade
        idade = calcular_idade(int(input_ano))
        # Print do resultado
        print("\n--- RESULTADO ---")
        print(f"Nome do Usuário: {nome_user}")
        print(f"Idade no ano de 2022: {idade} anos\n")
    # Erro inesperado
    except Exception as erro:
        print(f"\nErro: {erro}\nTente novamente.\n")