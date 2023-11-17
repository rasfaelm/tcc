// Função para converter Comprimento/ Distância
function converterComprimento() {
    const valorEntrada = parseFloat(document.getElementById("comprimento").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntrada").value;
    const unidadeSaida = document.getElementById("unidadeDeSaida").value;
    let resultado;
    let explicacao;

    // Realize as conversões aqui com base nas unidades de entrada e saída selecionadas
    if (unidadeEntrada === "metros" && unidadeSaida === "quilometros") {
        resultado = valorEntrada / 1000;
        explicacao = `${valorEntrada} metros / 1000 = ${resultado} quilômetros`;
    } else if (unidadeEntrada === "metros" && unidadeSaida === "milhas") {
        resultado = valorEntrada * 0.000621371;
        explicacao = `${valorEntrada} metros * 0.000621371 = ${resultado} milhas`;
    } else if (unidadeEntrada === "quilometros" && unidadeSaida === "metros") {
        resultado = valorEntrada * 1000;
        explicacao = `${valorEntrada} quilometros * 1000 = ${resultado} metros`;
    } else if (unidadeEntrada === "quilometros" && unidadeSaida === "milhas") {
        resultado = valorEntrada * 0.621371;
        explicacao = `${valorEntrada} quilometros * 0.621371 = ${resultado} milhas`;
    } else if (unidadeEntrada === "milhas" && unidadeSaida === "metros") {
        resultado = valorEntrada / 0.000621371;
        explicacao = `${valorEntrada} milhas / 0.000621371 = ${resultado} metros`;
    } else if (unidadeEntrada === "milhas" && unidadeSaida === "quilometros") {
        resultado = valorEntrada / 0.621371;
        explicacao = `${valorEntrada} milhas / 0.621371 = ${resultado} quilômetros`;
    } else {
        resultado = valorEntrada; // Se as unidades de entrada e saída forem as mesmas
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoComprimento").value = resultado;
    document.getElementById("explicacaoComprimento").textContent = explicacao;
}

// Função para converter Peso/ Massa
function converterPeso() {
    const valorEntrada = parseFloat(document.getElementById("peso").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaPeso").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaPeso").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "quilogramas" && unidadeSaida === "gramas") {
        resultado = valorEntrada * 1000;
        explicacao = `${valorEntrada} quilogramas * 1000 = ${resultado} gramas`;
    } else if (unidadeEntrada === "quilogramas" && unidadeSaida === "libras") {
        resultado = valorEntrada * 2.20462;
        explicacao = `${valorEntrada} quilogramas * 2.20462 = ${resultado} libras`;
    } else if (unidadeEntrada === "gramas" && unidadeSaida === "quilogramas") {
        resultado = valorEntrada / 1000;
        explicacao = `${valorEntrada} gramas / 1000 = ${resultado} quilogramas`;
    } else if (unidadeEntrada === "gramas" && unidadeSaida === "libras") {
        resultado = valorEntrada / 453.592;
        explicacao = `${valorEntrada} gramas / 453.592 = ${resultado} libras`;
    } else if (unidadeEntrada === "libras" && unidadeSaida === "quilogramas") {
        resultado = valorEntrada / 2.20462;
        explicacao = `${valorEntrada} libras / 2.20462 = ${resultado} quilogramas`;
    } else if (unidadeEntrada === "libras" && unidadeSaida === "gramas") {
        resultado = valorEntrada * 453.592;
        explicacao = `${valorEntrada} libras * 453.592 = ${resultado} gramas`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoPeso").value = resultado;
    document.getElementById("explicacaoPeso").textContent = explicacao;
}

// Função para converter Velocidade
function converterVelocidade() {
    const valorEntrada = parseFloat(document.getElementById("velocidade").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaVelocidade").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaVelocidade").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "metrosPorSegundo" && unidadeSaida === "quilometrosPorHora") {
        resultado = valorEntrada * 3.6;
        explicacao = `${valorEntrada} Metros Por Segundo * 3.6 = ${resultado} Quilometros Por Hora`;
    } else if (unidadeEntrada === "metrosPorSegundo" && unidadeSaida === "milhasPorHora") {
        resultado = valorEntrada * 2.23694;
        explicacao = `${valorEntrada} Metros Por Segundo * 2.23694 = ${resultado} Milhas Por Hora`;
    } else if (unidadeEntrada === "quilometrosPorHora" && unidadeSaida === "metrosPorSegundo") {
        resultado = valorEntrada / 3.6;
        explicacao = `${valorEntrada} Quilometros Por Hora / 3.6 = ${resultado} Metros Por Segundo`;
    } else if (unidadeEntrada === "quilometrosPorHora" && unidadeSaida === "milhasPorHora") {
        resultado = valorEntrada / 1.60934;
        explicacao = `${valorEntrada} Quilometros Por Hora / 1.60934 = ${resultado} Milhas Por Hora`;
    } else if (unidadeEntrada === "milhasPorHora" && unidadeSaida === "metrosPorSegundo") {
        resultado = valorEntrada / 2.23694;
        explicacao = `${valorEntrada} Milhas Por Hora / 2.23694 = ${resultado} Metros Por Segundo`;
    } else if (unidadeEntrada === "milhasPorHora" && unidadeSaida === "quilometrosPorHora") {
        resultado = valorEntrada * 1.60934;
        explicacao = `${valorEntrada} Milhas Por Hora * 1.60934 = ${resultado} Quilometros Por Hora`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoVelocidade").value = resultado;
    document.getElementById("explicacaoVelocidade").textContent = explicacao;
}

// Função para converter Área
function converterArea() {
    const valorEntrada = parseFloat(document.getElementById("area").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaArea").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaArea").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "metrosQuadrados" && unidadeSaida === "quilometrosQuadrados") {
        resultado = valorEntrada * 0.000001;
        explicacao = `${valorEntrada} Metros Quadrados * 0.000001 = ${resultado} Quilometros Quadrados`;
    } else if (unidadeEntrada === "metrosQuadrados" && unidadeSaida === "acres") {
        resultado = valorEntrada * 0.000247;
        explicacao = `${valorEntrada} Metros Quadrados * 0.000247 = ${resultado} Acres`;
    } else if (unidadeEntrada === "acres" && unidadeSaida === "metrosQuadrados") {
        resultado = valorEntrada * 4046.86;
        explicacao = `${valorEntrada} Acres * 4046.86 = ${resultado} Metros Quadrados`;
    } else if (unidadeEntrada === "acres" && unidadeSaida === "quilometrosQuadrados") {
        resultado = valorEntrada * 0.00404686;
        explicacao = `${valorEntrada} Acres * 0.00404686 = ${resultado} Quilometros Quadrados`;
    } else if (unidadeEntrada === "quilometrosQuadrados" && unidadeSaida === "metrosQuadrados") {
        resultado = valorEntrada * 1000000;
        explicacao = `${valorEntrada} Quilometros Quadrados * 1000000 = ${resultado} Metros Quadrados`;
    } else if (unidadeEntrada === "quilometrosQuadrados" && unidadeSaida === "acres") {
        resultado = valorEntrada * 247.105;
        explicacao = `${valorEntrada} Quilometros Quadrados * 247.105 = ${resultado} Acres`;
    } else if (unidadeEntrada === "quilometrosQuadrados" && unidadeSaida === "hectares") {
        resultado = valorEntrada * 100;
        explicacao = `${valorEntrada} Quilometros Quadrados * 100 = ${resultado} hectares`;
    } else if (unidadeEntrada === "hectares" && unidadeSaida === "metrosQuadrados") {
        resultado = valorEntrada * 10000;
        explicacao = `${valorEntrada} hectares * 10000 = ${resultado} Metros Quadrados`;
    } else if (unidadeEntrada === "hectares" && unidadeSaida === "acres") {
        resultado = valorEntrada * 2.471;
        explicacao = `${valorEntrada} hectares * 2.471 = ${resultado} Acres`;
    } else if (unidadeEntrada === "hectares" && unidadeSaida === "quilometrosQuadrados") {
        resultado = valorEntrada * 0.01;
        explicacao = `${valorEntrada} hectares * 0.01 = ${resultado} Quilometros Quadrados`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoArea").value = resultado;
    document.getElementById("explicacaoArea").textContent = explicacao;
}


// Função para converter Temperatura
function converterTemperatura() {
    const valorEntrada = parseFloat(document.getElementById("temperatura").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaTemperatura").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaTemperatura").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "celsius" && unidadeSaida === "fahrenheit") {
        resultado = (valorEntrada * 9/5) + 32;
        explicacao = `(${valorEntrada} celsius * 9/5) + 32 = ${resultado} fahrenheit`;
    } else if (unidadeEntrada === "celsius" && unidadeSaida === "kelvin") {
        resultado = valorEntrada + 273.15;
        explicacao = `${valorEntrada} celsius + 273.15 = ${resultado} kelvin`;
    } else if (unidadeEntrada === "fahrenheit" && unidadeSaida === "celsius") {
        resultado = (valorEntrada - 32) * 5/9;
        explicacao = `(${valorEntrada} fahrenheit - 32) * 5/9 = ${resultado} celsius`;
    } else if (unidadeEntrada === "fahrenheit" && unidadeSaida === "kelvin") {
        resultado = (valorEntrada + 459.67) * 5/9;
        explicacao = `(${valorEntrada} fahrenheit + 459.67) * 5/9 = ${resultado} kelvin`;
    } else if (unidadeEntrada === "kelvin" && unidadeSaida === "celsius") {
        resultado = valorEntrada - 273.15;
        explicacao = `${valorEntrada} kelvin - 273.15 = ${resultado} celsius`;
    } else if (unidadeEntrada === "kelvin" && unidadeSaida === "fahrenheit") {
        resultado = (valorEntrada * 9/5) - 459.67;
        explicacao = `(${valorEntrada} kelvin * 9/5) - 459.67 = ${resultado} fahrenheit`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoTemperatura").value = resultado;
    document.getElementById("explicacaoTemperatura").textContent = explicacao;
}

// Função para converter Tempo
function converterTempo() {
    const valorEntrada = parseFloat(document.getElementById("tempo").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaTempo").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaTempo").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "segundos" && unidadeSaida === "minutos") {
        resultado = valorEntrada / 60;
        explicacao = `${valorEntrada} segundos / 60 = ${resultado} minutos`;
    } else if (unidadeEntrada === "segundos" && unidadeSaida === "horas") {
        resultado = valorEntrada / 3600;
        explicacao = `${valorEntrada} segundos / 3600 = ${resultado} horas`;
    } else if (unidadeEntrada === "minutos" && unidadeSaida === "segundos") {
        resultado = valorEntrada * 60;
        explicacao = `${valorEntrada} minutos * 60 = ${resultado} segundos`;
    } else if (unidadeEntrada === "minutos" && unidadeSaida === "horas") {
        resultado = valorEntrada / 60;
        explicacao = `${valorEntrada} minutos / 60 = ${resultado} horas`;
    } else if (unidadeEntrada === "horas" && unidadeSaida === "segundos") {
        resultado = valorEntrada * 3600;
        explicacao = `${valorEntrada} horas * 3600 = ${resultado} segundos`;
    } else if (unidadeEntrada === "horas" && unidadeSaida === "minutos") {
        resultado = valorEntrada * 60;
        explicacao = `${valorEntrada} horas * 60 = ${resultado} minutos`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoTempo").value = resultado;
    document.getElementById("explicacaoTempo").textContent = explicacao;
}

// Função para converter Densidade
function converterDensidade() {
    const valorEntrada = parseFloat(document.getElementById("densidade").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaDensidade").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaDensidade").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "quilogramasPorMetroCubico" && unidadeSaida === "gramasPorCentimetroCubico") {
        resultado = valorEntrada * 1000;
        explicacao = `${valorEntrada} Quilogramas Por Metro Cubico * 1000 = ${resultado} Gramas Por Centimetro Cubico`;
    } else if (unidadeEntrada === "gramasPorCentimetroCubico" && unidadeSaida === "quilogramasPorMetroCubico") {
        resultado = valorEntrada / 1000;
        explicacao = `${valorEntrada} Gramas Por Centimetro Cubico / 1000 = ${resultado} Quilogramas Por Metro Cubico`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoDensidade").value = resultado;
    document.getElementById("explicacaoDensidade").textContent = explicacao;
}

// Função para converter Energia
function converterEnergia() {
    const valorEntrada = parseFloat(document.getElementById("energia").value);
    const unidadeEntrada = document.getElementById("unidadeDeEntradaEnergia").value;
    const unidadeSaida = document.getElementById("unidadeDeSaidaEnergia").value;
    let resultado;
    let explicacao;

    if (unidadeEntrada === "joules" && unidadeSaida === "calorias") {
        resultado = valorEntrada * 0.239;
        explicacao = `${valorEntrada} joules * 0.239= ${resultado} calorias`;
    } else if (unidadeEntrada === "joules" && unidadeSaida === "quilowattshora") {
        resultado = valorEntrada * 0.00027778;
        explicacao = `${valorEntrada} joules * 0.00027778 = ${resultado} quilowatts-hora`;
    } else if (unidadeEntrada === "calorias" && unidadeSaida === "joules") {
        resultado = valorEntrada / 0.239;
        explicacao = `${valorEntrada} calorias / 0.239 = ${resultado} joules`;
    } else if (unidadeEntrada === "calorias" && unidadeSaida === "quilowattshora") {
        resultado = valorEntrada * 0.000001162;
        explicacao = `${valorEntrada} calorias * 0.000001162; = ${resultado} quilowatts-hora`;
    } else if (unidadeEntrada === "quilowattshora" && unidadeSaida === "joules") {
        resultado = valorEntrada * 3600000;
        explicacao = `${valorEntrada} quilowatts-hora * 3600000 = ${resultado} joules`;
    } else if (unidadeEntrada === "quilowattshora" && unidadeSaida === "calorias") {
        resultado = valorEntrada * 859845.23;
        explicacao = `${valorEntrada} quilowatts-hora * 859845.23 = ${resultado} calorias`;
    } else {
        resultado = valorEntrada;
        explicacao = `${valorEntrada} (unidade de saída é igual à unidade de entrada)`;
    }

    document.getElementById("resultadoEnergia").value = resultado;
    document.getElementById("explicacaoEnergia").textContent = explicacao;
}