function chutar(){
	// SORTEAR UM NUMERO ALEATORIO SECRETO
	let numeroSecreto = parseInt(Math.random()*11)
	console.log(numeroSecreto)

	// PEGAR O NUMERO DIGITADO
	let chute = parseInt (document.querySelector("#valor").value)

	/**

     * OPERADORES RELACIONAIS

     * < --> menor

     * > --> maior

     * <= --> menor ou igual

     * >= --> maior ou igual

     * == --> igual

     * != --> diferente

     */

	// COMPARAR O NUMERO DIGITADO COM O NUMERO ALEATORIO SECRETO
		if (numeroSecreto == chute) {
			// SE TIVER CORRETO E OS NUMEROS FOREM IGUAIS, MOSTRAR A MENSAGEM QUE A PESSOA ACERTOU
			document.querySelector(".resultado").innerHTML = "Você acertou"
		}

		else
		{
			// SE TIVER ERRADO E OS NUMEROS FOREM DIFERENTES, MOSTRAR A MENSAGEM QUE A PESSOA ERROU
			document.querySelector(".resultado").innerHTML = "Você errou, tente novamente"
		}
}