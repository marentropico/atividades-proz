# Entrada de dados
rodas = int(input("Digite o número de rodas do veículo: "))
peso = float(input("Digite o peso do veículo em kg: "))
pessoas = int(input("Digite o número de pessoas que cabem no veículo: "))

# Lógica de determinação da categoria do veículo
if rodas == 2 or rodas == 3:
    categoria = "A"
elif rodas >= 4:
    if peso > 6000:
        categoria = "E"
    elif pessoas > 8:
        categoria = "D"
    elif peso > 3500 and peso <= 6000:
        categoria = "C"
    else:
        categoria = "B"
else:
    categoria = "Categoria não definida"

# Saída de dados
print("Categoria:", categoria)