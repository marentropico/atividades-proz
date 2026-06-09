print("Usando For")
for andar in range(1, 21):
    if andar == 13:
        continue  
    else:
        print(andar, "º andar")

print("Usando While")
andar = 1
while andar <= 20:
    if andar == 13:
        andar = andar + 1
        continue
    else:
        print(andar, "º andar")
    andar = andar + 1

print("Usando Do-While")
andar = 1
while True:
    if andar != 13:
        print(andar, "º andar")
    
    andar = andar + 1

    if andar > 20:
        break

print("Desafio - Ordem Decrescente")
for andar in range(20, 0, -1):
    if andar == 13:
        continue
    else:
        print(andar, "º andar")