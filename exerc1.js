    function valoreMaiorQueMedia(lista) {
    const media = lista.reduce((acc, valor) => acc + valor, 0) / lista.length;
    return lista.filter(valor => valor > media);
  }

  function menorValor(lista) {
    return Math.min(...lista);
  }
  
  function somaLista(lista) {
    return lista.reduce((acc, valor) => acc + valor, 0);
  }
  
  function valoresMenoresQue20(lista) {
    return lista.filter(valor => valor < 20);
  }
  
  const valores = [10, 12, 15, 35, 40];
  console.log("Valores maiores que a média:", valoreMaiorQueMedia(valores));
  console.log("Menor valor da lista:", menorValor(valores));
  console.log("Soma dos itens da lista:", somaLista(valores));
  console.log("Valores menores que 20:", valoresMenoresQue20(valores));
  