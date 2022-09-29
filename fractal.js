const quadro = document.getElementById("quadro");
let contexto = quadro.getContext("2d");
let frame = 0;

function desenha(inicioX, inicioY, comprimento, angulo, branchWidth) {
    contexto.lineWidth = branchWidth;

    contexto.beginPath();
    contexto.save();

    contexto.strokeStyle = "green";
    contexto.fillStyle = "green";

    contexto.translate(inicioX, inicioY);//move o canva e sua origem nos eixos x: vertical e y: horizontal
    contexto.rotate(angulo * Math.PI / 180);//roda o objeto desenhado dentro do canva, aceita angulos em radianos. a direção da rotação é determinada pelo valor positivo ou negativo
    contexto.moveTo(0, 0);//move o quadro pra determinada coordenada
    contexto.lineTo(0, -comprimento);//adiciona um novo ponto e cria uma linha reta para AQUELE ponto DO ultimo ponto especificado
    contexto.stroke();//é utilizado para desenhar as linhas criadas pelo método anterior.

    contexto.shadowBlur = 10;
    contexto.shadowColor = "rgba(0,0,0,0.8)";

    if (comprimento < 10) {//determina quando parar a recursão, quando parar o desenho.
        contexto.restore();//retorna o quadro para o ultimo estado salvo
        return;
    }

    desenha(0, -comprimento, comprimento * 0.8, angulo - 10, branchWidth * 0.8);//chamada recursiva
    desenha(0, -comprimento, comprimento * 0.8, angulo + 10, branchWidth * 0.8);//chamada recursiva

    contexto.restore();//outra chamada para o método restore
}

desenha(400, 600, 120, 0, 10)