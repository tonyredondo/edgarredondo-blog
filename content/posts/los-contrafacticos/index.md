---
title: "Los Contrafácticos"
date: 2017-08-27
draft: false
featured_image: "/images/los-contrafacticos/image_1.jpg"
categories:
  - Lógica
---

# A diario nos apetece especular sobre la historia “real”…
**¿Te anotas en el juego de los Contrafácticos?**
Decir que 
*“La lógica no tiene nada que ver con la realidad”*
 es una tosca racionalización del deseo de subordinar la realidad a nuestros caprichos. Y como me he propuesto procurar contagiarlos cada vez más de racionalidad, les traigo esta vez un tema cargado de mucha Lógica. Venga, realmente es fácil de entender, pero lamentablemente de un desconocimiento muy generalizado entre todos nosotros, lo que abre una puerta a que, fácilmente, nos puedan manipular.
Comencemos pues con un paseo rasante por 
**los Condicionales Lógicos**
, no está de más decir que la Lógica ha estudiado la peculiar relación entre antecedente y consecuente…causas, efectos, de las oraciones con esas características. No se asusten, pues el viaje será muy corto, para que finalmente aterricemos en nuestro verdadero destino: “Los Contrafácticos”.
![Imagen 1](/images/los-contrafacticos/image_1.jpg)
## Condicionales
En Lógica un Condicional se refiere a dos proposiciones conectadas por:
**“Si….entonces…”**
Aunque en la Lógica lo importante es la forma de argumentar (no en el contenido de los argumentos), voy a ir colocando ejemplos para que sea más fácil su comprensión.
Comencemos con un Condicional muy sencillo, y además evidente en nuestra cotidianidad, el cual nos servirá de hilo conductor del presente discurso. Este es:
*“Si llueve, entonces hay nubes en el cielo.”*
Existe una convención de representar las proposiciones con letras enunciativas (variables proposicionales, que toman del alfabeto latino comenzando por la “p”). Así que podemos hacer:
**p**
 =”Si llueve.”
**q**
 =”hay nubes en el cielo.”
Y además, podemos reemplazar el Condicional “
**Si….entonces…**
” con un símbolo para la implicación: “ 
**–> **
”
Por lo que el Condicional de la implicación del ejemplo:
“
**Si **
llueve, 
**entonces**
 hay nubes en el cielo.”
![lluvia y nubes](/images/los-contrafacticos/image_2.jpg)
Podemos simbolizarlo así:
**p –> q**
Que, para la que queremos explicar en este artículo, leeremos 
“
**Si  p  entonces  q**
”
o también:
**“p  implica a  q”**
La proposición a la izquierda de 
**‘–>’**
 se llama el antecedente (en este caso 
**p**
), y la proposición a la derecha del símbolo “ 
**–> **
” se llama el consecuente (en este caso 
**q**
).
Ahora bien, en la Lógica, el 
*“valor de verdad”*
 de una implicación es una función de los valores de verdad del antecedente y el consecuente.
En efecto, una implicación únicamente es falsa cuando el antecedente es verdadero y el consecuente falso. En los demás casos es siempre verdadera. 
Acá les muestro la  Tabla de Verdad para (
**p –> q**
), que es válida para cualesquiera proposiciones 
**p**
 y 
**q:**
![Tabla de la Verdad](/images/los-contrafacticos/image_3.jpg)
Es importante entender que en una implicación la relación que se establece entre antecedente y consecuente es meramente 
*suficiente*
, y no, 
*necesaria*
 y 
*suficiente*
. 
Expliquemos esto.
En efecto, en nuestro ejemplo parece evidente que la lluvia es condición suficiente para que haya nubes en el cielo, como también parece evidente que sería falso que lloviera y no hubiera nubes en el cielo.
Luego, tenemos que:
1) Si «
**p**
 implica 
**q**
»
1.1) 
La veracidad de 
**p**
, basta para 
garantizar
 la de 
**q**
. 
En nuestro ejemplo tendríamos que:
***Si** está lloviendo, **entonces** hay nubes en el cielo.*
Es decir, si es cierto que está lloviendo, puedo 
garantizar
, de que debe haber nubes en el cielo.
1.2) 
**p**
 es condición 
suficiente
 para 
**q**
. 
En el ejemplo se tiene:
*Que esté lloviendo*
** es condición suficiente**
**para**
*asegurar que debe haber nubes en el cielo.*
Es decir, el hecho de que esté lloviendo me exime de tener que saber algo más, ese hecho es 
suficiente
 para asegurar de que debe haber nubes en el cielo.
1.3
) De «
**p**
 implica 
**q**
» NO se puede deducir que «
**q**
 implica 
**p**
». 
En el ejemplo se tiene que:
De: 
«
**Si **
está lloviendo 
**entonces**
 hay nubes en el cielo»
**NO **
se puede deducir que:
*«**Si **hay nubes en el cielo **entonces** está lloviendo».*
Es decir, no es necesario que llueva para que haya nubes en el cielo. Venga, puede haber nubes en el cielo y no estar lloviendo, de hecho es lo más común.
![Nubes sin lluvia](/images/los-contrafacticos/image_4.jpg)
1.4) Si 
«
**p**
 implica 
**q**
» y se da 
**p**
, entonces se da 
**q**
Corresponde a la conocida Regla de Inferencia MP, o “Modus Ponendo 
Ponens”
. En la inteligencia artificial, el modus ponens, como también se le llama, se denomina encadenamiento directo. 
En nuestro ejemplo tendríamos que:
**Si **
«está lloviendo, 
**entonces**
 hay nubes en el cielo »
**Y, en efecto,**
 realmente: está lloviendo,
**Entonces, **
debe ocurrir que
**:**
 hay nubes en el cielo.
1.5) Si 
«
**p**
 implica 
**q**
» y ocurre 
**NO**
**q**
, entonces ocurre 
**NO**
** p**
Corresponde a la Regla de Inferencia MT, o “Modus Tollendo 
Tollens”
. 
En el ejemplo se tiene que:
Si 
« está lloviendo, 
**entonces**
 hay nubes en el cielo »
y se da que
**:**
**NO **
hay nubes en el cielo,
**Entonces, **
realmente
**:**
**NO**
 está lloviendo.
![cielo sin nubes](/images/los-contrafacticos/image_5.jpg)
El 
**modus tollens**
 está estrechamente relacionado con el 
**modus ponens**
. Existen, además, dos formas similares de argumentación, pero que lógicamente no son válidas: negar el antecedente, y afirmar el consecuente.
Veamos la primera posibilidad, (la que nos lleva a nuestro destino) es decir, negar el antecedente. ¿Qué sucedería si la causa que se ha manejado como tal, no hubiese sucedido? Es el momento de plantearse el 
**condicional contrafáctico**
. Una oración contrafáctica es, como veremos, una oración condicional en la que interviene cierta noción de posibilidad.
![Imagen 6](/images/los-contrafacticos/image_6.jpg)
## **Condicional Contrafáctico**
Llamamos
**Condicional Contrafáctico**
: aquellos condicionales de las forma: 
2)  Si 
**A**
 entonces 
**B**
, pero no sucede 
**A.**
En nuestro ejemplo sería:
**Si**
 está lloviendo, 
**entonces**
 hay nubes en el cielo, 
**pero no**
 está lloviendo
**…**
En este caso no puedes concluir nada sobre si hay, o no, nubes en el cielo (puede, o no, haberlas). 
Como se ve, este tipo de Condicional no proporciona conocimiento a pesar de parecerlo, como si lo hacen los condicionales cuyos antecedentes son verdaderos. El 
**condicional contrafáctico **
va más allá de la verdad o falsedad de los sucesos, como también de su probabilidad.
**Contrafáctico**
literalmente significa “contrario a los hechos”, es decir, toda situación que no ha sucedido en nuestro Universo actualmente observable (Universo fáctico, o real), es decir, el antecedente no describe ningún hecho que haya sucedido realmente en el mundo, por ello no son verdaderos, ni falsos. 
**Ahhh, pero podría haber ocurrido**
. 
Un contrafáctico por plausible que parezca no sirve para refutar nada, a menos que venga acompañado de una nueva y argumentada teoría. Es sólo indicación de que quizás otra explicación alternativa a la aceptada es posible, pero mientras no se de esa explicación, como ya dijimos el condicional  
**Contrafáctico**
 no es ni verdadero ni falso.
Ahora bien, lamentablemente, en el lenguaje natural y coloquial es muy fácil construir y argumentar con 
**Contrafácticos**
. Mostraré algunos ejemplos:
Son muy comunes en el caso del que afirma está convencido que el antecedente es verdadero, y por ello asume lo contrario para derivar algo fantástico:
2.1) 
**Si tú no eres mi hermano, entonces nosotros somos marcianos.**
También cuando se inculpa o se le reprocha algo a alguien: 
2.2) 
**Si Caldera no hubiese soltado a Chávez, Venezuela no estaría como está**
.
Acá se establece una conexión entre dos eventos: el gesto de Caldera con Chávez y la situación actual de Venezuela. Si el que escucha quiere demostrar que tal acusación es infundada, debe demostrar que la situación actual de Venezuela es independiente de la libertad de Chávez (Tal vez buscando otros datos y/o echándole la culpa a otro personaje o evento).
Un contrafáctico histórico-religioso sería por ejemplo: 
**2.3) Si Pilato no se hubiese lavado las manos y Jesús no hubiera sido crucificado, entonces….**
Muy posiblemente habría estallado una rebelión judía contra Roma como de hecho aconteció algunos años más tarde. Lo que es mucho más importante: el cristianismo no se habría construido simbólicamente sobre el sufrimiento en la cruz. Tal vez incluso, el cristianismo no hubiese llegado a nacer, si hemos de creer que Jesús no era exactamente un “cristiano”.
También es muy común ofrecer explicaciones basados en experiencias previas:
**2.4)  Si le arrojaras la piedra a esa ventana le romperías el vidrio.**
Acá el lenguaje tiene el papel de proto-ciencia. Este tipo de contrafáctico no enuncia nada real, el antecedente no describe ningún hecho específico que ya haya ocurrido, sólo generalidades probables, por ello no son verdaderas ni falsas.
## **Contrafácticos, la Literatura y el Cine**
![Imagen 7](/images/los-contrafacticos/image_7.jpg)
Según 
[Wikipedia](https://es.wikipedia.org/wiki/Ucron%C3%ADa)
 “
*Ucronía*
” es lo que no existe en ningún tiempo.
La ucronía especula sobre 
**realidades alternativas ficticias**
, a través de una línea histórica ficticia en la cual los hechos se han desarrollado de diferente forma de cómo los conocemos. Esa hipotética nueva línea histórica se desarrolla a partir de un evento histórico extensamente conocido, significativo o relevante, que en la Ucronía ocurre de modo diferente al ocurrido. 
El momento o acontecimiento común que separa a la realidad histórica conocida y aceptada de la realidad ucrónica se llama “
*punto Jonbar*
” o punto de divergencia, el cual es un acontecimiento singular y relevante que determina la historia futura. 
La Ucronía ha logrado encontrar grande popularidad en escenarios como el cine y la literatura. Se caracteriza porque la trama transcurre en un mundo desarrollado a partir de un punto en el pasado en el que algún acontecimiento sucedió de forma diferente a como ocurrió en realidad (por ejemplo, los vencidos de determinada guerra serían los vencedores, como podría ser, por ejemplo, la victoria de los nazis en la Segunda Guerra Mundial). 
![Imagen 8](/images/los-contrafacticos/image_8.jpg)
En una Ucronía  debe realizarse una construcción lógica de 
**una historia hipotética**
 que se atenga a una realidad verosímil a partir de hechos históricos conocidos. La Ucronía comienza pues en la escisión de la historia real y una posible historia imaginaria, lo que constituiría el hilo del relato, destinada, por el escritor, a sentar como una verdad filosófica, superior a la misma historia. Es decir, escribe la historia, no tal como fue, sino tal como podría haber sido, sacando así a la luz un mundo hipotético.
La Ucronía presenta múltiples similitudes con otro género literario: la 
*Historia Contrafactual*
, incluso puede llegar a haber confusiones sobre las divisiones de estos dos géneros literarios, la gran diferencia está referida a que en una Ucronía no se tiene necesidad de que sus escenarios estén basados en hechos históricamente plausibles, mientras que un relato dentro de la 
*Historia Contrafactual*
 debe ser al mismo tiempo tanto verosímil, como plausible. 
En efecto, mientras la 
*Historia Contrafactual*
 parte de una premisa (condición contrafactual o punto de partida) y explora los posibles cambios en la historia, las Ucronías suelen despreciar el proceso y utilizan la historia alterna como un escenario para desarrollar un relato de ficción.
La 
*Historia Contrafactual*
, llamada también historia alterna o historia virtual es el resultado de un ejercicio de abstracción sobre los sucesos históricos que pretende dilucidar a un curso hipotético de acontecimientos históricos, respondiendo a la pregunta «
**¿Qué habría pasado si …?**
» (la historia hubiese tomado otros derroteros a los que de hecho tomó. Así las cosas, la 
*Historia Contrafáctica*
 se muestra como un muy interesante juego profético (pese a referirse al pasado)). 
La
* Historia Contrafactual*
, en su mayor rigor académico, parte de un cambio, llamado también condición o premisa contrafactual o punto de partida, y busca determinar, de acuerdo a los datos conocidos sobre el comportamiento de los pueblos y los individuos, cómo los hechos hubieran sido diferentes, o iguales, a nuestra historia.
La premisa contrafactual debe ser interesante y tener consecuencias importantes sobre el mundo que conocemos desde el punto de vista histórico.  Por ejemplo no es lo mismo pensar  en « ¿Qué hubiera pasado durante la segunda guerra mundial si Adolf Hitler se hubiera afeitado su clásico bigote?» que pensamos no tendría graves consecuencias históricas. Por el contrario, especular con la muerte de Hitler en el atentado de julio de 1944, hecho que si hubiese podido haber tenido consecuencias marcadamente diferentes.
## **Historia y Contrafáctico**
*El presente no sería como es si el pasado no hubiese sido como fue.
*
*Somos el resultado de lo que nos precedió.*
La historia tal como la conocemos, es objetiva por cuanto su “
*objeto*
”, nuestro pasado, es auténticamente aprehendido por el historiador, pero también es subjetiva, por cuanto el pasado captado o aprehendido, se limita a los hechos considerados más relevantes de todo el entretejido histórico. 
En efecto, normalmente el historiador estudia documentos, o fuentes históricas, que nos permiten conocer el pasado, bajo el aspecto, o ángulo particular, según el cual dicho pasado fue interrogado, y de esa forma busca los nexos, o conexiones, entre los “hechos” que esas fuentes dan cuenta.
![Imagen 9](/images/los-contrafacticos/image_9.jpg)
Ante esta situación el gran problema que aflora es: 
**¿Serán esos nexos causales? **
En efecto, e inconveniente es que, generalmente, el historiador escoge alguna, o algunas, causas de un determinado hecho por considerarlas más relevantes que otras, aunque esté consciente del entramado histórico que pone de manifiesto la presencia de múltiples factores que condujeron a que se produjera tal, o cual, evento.
Es decir, en definitiva, lo que tenemos es el pasado, captado y plasmado por el historiador bajo un ángulo particular, lo cual dificulta el rastreo de las “
*verdaderas*
” causas de un determinado hecho, porque quizás no fueron considerados como relevantes por el historiador.
Es por ello que si cualquiera de nosotros trata de 
**establecer un sentido**
 de los hechos históricos identificando una causalidad entre eventos que ocurrieron en un pasado y para ello se basa en documentos históricos debe de estar consciente de que la información, a diferencia de la lógica académica, dista de ser completa y por ello, sus conclusiones no son definitivas, siempre serán revisables ante la adquisición de nuevas informaciones. Es por ello que las conclusiones no son ni absurdas, ni falsas, además, cuya 
**verdad tampoco está garantizada.**
Llegados a este punto es válido preguntarse. ¿Qué hubiera sucedido si la causa que se ha manejado como tal, no hubiese sucedido así, sino que hubiese tomado otro valor? Esa es el momento de plantearse en el estudio de la historia el 
*Condicional Contrafáctico*
,  que evidentemente va más allá de la verdad o falsedad de los sucesos. Tal vez utilizando la argumentación contrafáctica podríamos tratar de hallar las contradicciones argumentativas de manera de ir trazando límites que permitan acercarnos a la verdad.
## **A manera de Conclusión**
Pues venga, el mundo seguirá dando vueltas y a nosotros no nos queda otra que seguir viviendo nuestras vidas, trabajando, aprendiendo, haciendo política y, seguro, así seguiremos escuchando bobadas y exabruptos… ¡qué le vamos a hacer! Somos así: somos animales expuestos a las pasiones. Pero animales, a la vez, capaces de lucidez e inteligencia. 
Es por ello que debemos estar preparados para saltar al terreno de juego, donde muy probablemente nos conseguiremos con Contrafácticos. Estará en nosotros el saber manejar esa jugada. 
Ahhh, y si nuestros adversarios se vienen con muchas ínfulas, nunca está demás el recordar que Sir Karl Popper, considerado como uno de los filósofos más grandes de la Ciencia, propuso, en primer lugar, el criterio de la “
*falsabilidad*
” como una forma de trazar una línea clara entre la Ciencia y la pseudociencia. Venga,  la capacidad de ser refutada es lo que hace científica una teoría. Y resulta que un 
**Contrafáctico**
 jamás podrá ser falseado, o refutado, porque simplemente nunca ocurrió.
Como dijimos, es muy posible que utilizando la argumentación contrafáctica conseguiríamos hallar las contradicciones en las explicaciones dadas, de manera de ir delineando una ruta que nos permita acercarnos a la verdad histórica, aunque debemos estar conscientes que un contrafáctico en muy raras ocasiones puede echar por tierra una teoría establecida, a menos que su argumentación tenga muy buena fundamentación.
También debe de estar claro que los Contrafácticos no son malos de por sí… Como hemos visto, en el fondo se tratan de ejercicios de “ciencia ficción”. Ahora bien, ficciones que podrían ser útiles a la hora de comprender, desde otra perspectiva, el colorido de una determinada época o suceso.
![Imagen 10](/images/los-contrafacticos/image_10.jpg)
Pienso que los hombres no aceptan un 
**Contrafáctico**
 por medio de un proceso de pensamiento, se aferran a él – a cualquier 
**Contrafáctico**
– porque encaja con sus emociones. No juzguen la verdad de una argumentación de ese tipo por su correspondencia con la realidad…  lamentablemente juzgan la realidad por su correspondencia con su emociones.
Para terminar quisiera que se tomaran unos minutos para reflexionar sobre todas las elucubraciones que a diario hacemos sobre la base de Contrafácticos: 
Que si la oposición en Venezuela hubiera participado en las elecciones parlamentarias a la Asamblea Nacional, de diciembre del 2005, otro gallo cantaría… Que si el gobierno español hubiera tomado una actitud más frontal estaría España protegida de las agresiones del terrorismo islamista o yihadista…. Que si Neymar no se va del Barça otro hubiese sido el resultado de la Supercopa de España 2017… 
En fin, esto es a diario… Sólo una última: 
¿Si no hubiesen leído este artículo estarían más expuestos a los Contrafácticos?
… Venga… 
**Juguemos a los Contrafácticos**
…  
![Imagen 11](/images/los-contrafacticos/image_11.png)