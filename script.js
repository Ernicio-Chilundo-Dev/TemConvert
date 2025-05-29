document.addEventListener("DOMContentLoaded", () => {
  const inputTemp = document.getElementById('input-temp');
  const inputUnit = document.getElementById('input-unit');
  const outputUnit = document.getElementById('output-unit');
  const convertBtn = document.getElementById('convert-btn');
  const result = document.getElementById('result');

  function convertTemperatura(value, from, to) {
    if (from === to) return value;

    let celsius;

    // Converter para Celsius primeiro
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5 / 9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      default:
        return null;
    }

    // Converter de Celsius para a unidade desejada
    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return (celsius * 9 / 5) + 32;
      case 'kelvin':
        return celsius + 273.15;
      default:
        return null;
    }
  }

  convertBtn.addEventListener('click', () => {
    const temp = parseFloat(inputTemp.value);
    const fromUnit = inputUnit.value;
    const toUnit = outputUnit.value;

    if (isNaN(temp)) {
      result.textContent = "Por favor, insira um valor numérico válido.";
      return;
    }

    const converted = convertTemperatura(temp, fromUnit, toUnit);

    if (converted == null) {
      result.textContent = "Erro na conversão.";
    } else {
      result.textContent = `${temp} ${fromUnit} = ${converted.toFixed(2)} ${toUnit}`;
    }
  });
});
