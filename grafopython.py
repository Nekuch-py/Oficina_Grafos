#criando e imprimindo grafos em python
print("Imprima todas as conexões, mostrando quem conhece quem."),

print("Como fazer:")
grafo = {
    "João":["Maria"],
    "Maria": ["João","Pedro"],
    "Pedro": ["Maria"]
}
for pessoa in grafo:
    print(f"{pessoa} conhece: {','.join(grafo[pessoa])}")