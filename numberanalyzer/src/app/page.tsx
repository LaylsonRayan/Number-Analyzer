import React, { useState } from 'react';

const AnalisadorNumeros = () => {
  const [num, setNum] = useState('');
  const [valores, setValores] = useState<number[]>([]);

  const inNumero = (n: string) => {
    const parsedNum = Number(n);
    return parsedNum >= 1 && parsedNum <= 100;
  };

  const inLista = (n: string, l: number[]) => {
    return l.indexOf(Number(n)) !== -1;
  };

  const adicionar = () => {
    if (inNumero(num) && !inLista(num, valores)) {
      setValores([...valores, Number(num)]);
    } else {
      alert('Valor inválido ou já encontrado na lista.');
    }
    setNum('');
  };

  const finalizar = () => {
    if (valores.length === 0) {
      alert('Adicione valores antes de finalizar.');
    } else {
      const tot = valores.length;
      const maior = Math.max(...valores);
      const menor = Math.min(...valores);
      const soma = valores.reduce((acc, curr) => acc + curr, 0);
      const media = soma / tot;

      // Exibindo os resultados
      console.log(`Ao todo, temos ${tot} números cadastrados.`);
      console.log(`O maior valor informado foi ${maior}.`);
      console.log(`O menor valor informado foi ${menor}.`);
      console.log(`Somando todos os valores, temos ${soma}.`);
      console.log(`A média de todos os valores é ${media}.`);
    }
  };

  return (
    <div className="text-center p-2">
      <section className="bg-white rounded-xl p-4 w-[500px] m-auto shadow-[5px_5px_10px_black]">
        <div>
          Número entre 1 e 100:
          <input type="number" name="fnum" value={num} onChange={(e) => setNum(e.target.value)} />
          <input type="button" value="Adicionar" onClick={adicionar} />
          <br /><br />
          <select name="flista" size={6}>
            {valores.map((valor, index) => (
              <option key={index}>Valor {valor} foi adicionado</option>
            ))}
          </select>
          <br />
          <input type="button" value="Finalizar" onClick={finalizar} />
        </div>
        <div>
          {/* Resultado */}
        </div>
      </section>
      <footer className="text-white text-center italic">
        <p>&copy; Curso em vídeo</p>
      </footer>
    </div>
  );
};

export default AnalisadorNumeros;
