import React, {useEffect, useState} from 'react';
import TypingArea from "./TypingArea";

const  SpeedTypingTest = () => {
    const paragraphsEnglish = [
        "A plant is one of the most important living things that develop on the earth and is" +
        "made up of stems, leaves, roots, and so on.Parts of Plants: The part of the plant" +
        "that developed beneath the soil is referred to as root and the part that grows" +
        "outside of the soil is known as shoot. The shoot consists of stems, branches, l-" +
        "eaves, fruits, and flowers. Plants are made up of six main parts: roots, stems," +
        "leaves, flowers, fruits, and seeds.",
        "The root is the part of the plant that grows in the soil. The primary root emerges" +
        "from the embryo. Its primary function is to provide the plant stability in the earth" +
        "and make other mineral salts from the earth available to the plant for various metabolic" +
        "processes There are three types of roots i.e. Tap Root, Adventitious Roots, and Lateral" +
        "Root. The roots arise from the parts of the plant and not from the rhizomes roots.",
        "Stem is the posterior part that remains above the ground and grows negatively geotropic." +
        "Internodes and nodes are found on the stem. Branch, bud, leaf, petiole, flower, and" +
        "inflorescence on a node are all those parts of the plant that remain above the ground" +
        "and undergo negative subsoil development. The trees have brown bark and the young and" +
        "newly developed stems are green. The roots arise from the parts of plant and not from" +
        "the rhizomes roots.",
        "It is the blossom of a plant. A flower is the part of a plant that produces seeds," +
        "which eventually become other flowers. They are the reproductive system of a plant." +
        "Most flowers consist of 04 main parts that are sepals, petals, stamens, and carpels." +
        "The female portion of the flower is the carpels. The majority of flowers are hermaphrodites," +
        "meaning they have both male and female components. Others may consist of one of two parts" +
        "and may be male or female.",
        "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit" +
        "the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows." +
        "The scampish closet reveals itself as a sclerous llama to those who look. A hip is the" +
        "skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a" +
        "trumpet from the right perspective. A freebie flight is a wrench of the mind. Some" +
        "posit the croupy."
    ];
    const paragraphsRussian = [
        "Быстрая и точная печать - важные навыки в современном мире. Чем лучше вы владеете этими навыками, тем эффективнее вы работаете. Развивайте свою скорость и точность каждый день. Не забывайте об удобной позе и правильном использовании клавиатуры. Постепенно увеличивайте сложность текстов для тренировок, и вы достигнете высоких результатов!",
        "В мире, где встречаются волшебство и реальность, каждый момент наполнен смыслом. Под лучами заката рождается новый день, полный надежды и возможностей. Сердце бьется в унисон с ритмом времени, а мысли витают в воздухе, словно птицы в небе. Необходимо лишь смело шагнуть вперед, открывая двери к новым горизонтам и позволяя себе мечтать. Пусть каждое дыхание наполняет нас энергией и вдохновляет на подвиги. Даже самые маленькие шаги могут привести к великим перемещениям. Погрузитесь в мир мечтаний и откройте для себя бесконечные возможности!",
        "В мире полном загадок и тайн каждый шаг - это новое приключение. Лучи солнца проникают сквозь листву деревьев, озаряя тёплым светом землю. Воздух наполнен ароматами цветов и трав, создавая атмосферу умиротворения и вдохновения. Слушайте пение птиц и шум ветра, и вы услышите голос природы, мудрость которой не имеет границ. Даже в самых маленьких моментах жизни скрыто бесконечное величие. Откройте своё сердце для чудес и позвольте себе увидеть красоту в каждой мельчайшей детали. В этом великом путешествии ваш дух станет светилом, освещающим путь к новым горизонтам.",
        "На вершине горы открывается захватывающий вид на бескрайние просторы. Под ногами простирается зеленая долина, словно цветущий сад, а вдалеке горизонт теряется в облаках. Воздух наполнен ароматом свежести и чистоты, в которой можно ощутить силу природы. Звуки птиц и шум водопада создают гармонию, погружая в состояние умиротворения и вдохновения. В этом уединенном месте время останавливается, и душа находит свой покой, обретая связь с бесконечной просторностью мира.",
        "В городском парке цветы расцветают под лучами утреннего солнца. Листья деревьев шелестят на ветру, создавая мелодичный звук, словно приглашая нас прогуляться. Дети играют на площадке, смеясь и радуясь моменту. Вокруг царит атмосфера тепла и доброты, которая заставляет сердце биться в унисон с ритмом жизни. В этом мире каждый уголок природы пронизан живой энергией, наполняя нас силой и вдохновением для новых свершений."
    ]

    const paragraphsJavaScript = [
        "if else else if switch for while function Array push() pop() includes() map() filter() reduce() forEach() toUpperCase() toLowerCase() documentElement embeds forms hidden",
        "links title append() getElementsByName getElementsByClassName getElementById getAnimations open prepend write cut DOMContentLoaded scroll Attr DOMError DOMTokenList Element event ",
        "selectionchange copy getElementsByClassName evaluate exitPointerLock getAnimations close title scripts images",
    ];


    //
    const [typingText, setTypingText] = useState('');
    const [paragraphsText, setParagraphsText] = useState(paragraphsRussian)
    const [inpFieldValue, setInpFieldValue] = useState('');
    const [maxTime, setMaxTime] = useState(60);
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [charIndex, setCharIndex] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [WPM, setWPM] = useState(0);
    const [CPM, setCPM] = useState(0);

    const changeSettingHandleClick = (event) => {
        setMaxTime(event.target.textContent)
    }

    const loadParagraph = () => {
        const ranIndex = Math.floor(Math.random() * paragraphsText.length);
        const inputField = document.getElementsByClassName('input-field')[0];
        document.addEventListener("keydown", () => inputField.focus());
        const content = Array.from(paragraphsText[ranIndex]).map((letter, index) => (
            <span key={index} style={{ color: (letter !== ' ') ? 'black' : 'transparent' }}
                  className={`char ${index === 0 ? 'active' : ''}`}>
                {(letter !== ' ') ? letter : '_'}
            </span>
        ));
        setTypingText(content);
        setInpFieldValue('');
        setCharIndex(0);
        setMistakes(0);
        setIsTyping(false);

    };

    const changeTextHandleClick = (event) => {
        if(event.target.textContent === "Русский"){
            setParagraphsText(paragraphsRussian)
        }
        else if(event.target.textContent === "Английский"){
            setParagraphsText(paragraphsEnglish)
        } else {
            setParagraphsText(paragraphsJavaScript)
        }

    }

    const handleKeyDown = (event) => {

        // все элементы имевшие класс .char, присваивается charackters
        const characters = document.querySelectorAll('.char');
        // если нажатая клавиша это Backspace введенный символ больше нуля и таймер не ноль
        if (event.key === 'Backspace' && charIndex > 0 &&
            charIndex < characters.length && timeLeft > 0) {
            // стирает абсолютно все данные 
            if (characters[charIndex - 1].classList.contains('correct')) {
                characters[charIndex - 1].classList.remove('correct');
            }
            if (characters[charIndex - 1].classList.contains('wrong')) {
                characters[charIndex - 1].classList.remove('wrong');
                setMistakes(mistakes - 1);
            }
            characters[charIndex].classList.remove('active');
            characters[charIndex - 1].classList.add('active');
            setCharIndex(charIndex - 1);
            let cpm = (charIndex - mistakes - 1) * (60 / (maxTime - timeLeft));
            cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
            setCPM(parseInt(cpm, 10));
            let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
            wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
            setWPM(wpm);
        }
    }



    const initTyping = (event) => {

        const characters = document.querySelectorAll('.char');
        let typedChar = event.target.value;
        if (charIndex < characters.length && timeLeft > 0) {
            let currentChar = characters[charIndex].innerText;
            if (currentChar === '_') currentChar = ' ';
            if (!isTyping) {
                setIsTyping(true);
            }
            if (typedChar === currentChar) {
                setCharIndex(charIndex + 1);
                if (charIndex + 1 < characters.length) characters[charIndex + 1].classList.add('active');
                characters[charIndex].classList.remove('active');
                characters[charIndex].classList.add('correct');
            } else {
                setCharIndex(charIndex + 1);
                setMistakes(mistakes + 1);
                characters[charIndex].classList.remove('active');
                if (charIndex + 1 < characters.length) characters[charIndex + 1].classList.add('active');
                characters[charIndex].classList.add('wrong');
            }

            if (charIndex === characters.length - 1) setIsTyping(false);

            let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
            wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
            setWPM(wpm);

            let cpm = (charIndex - mistakes) * (60 / (maxTime - timeLeft));
            cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
            setCPM(parseInt(cpm, 10));
        } else {
            setIsTyping(false);
        }
    };

    const resetGame = () => {
        setIsTyping(false);
        setTimeLeft(maxTime);
        setCharIndex(0);
        setMistakes(0);
        setTypingText('');
        setCPM(0);
        setWPM(0);
        const characters = document.querySelectorAll('.char');
        characters.forEach(span => {
            span.classList.remove("correct");
            span.classList.remove('wrong');
            span.classList.remove('active');
        });
        characters[0].classList.add('active');

        loadParagraph();
    };

    useEffect(() => {
        loadParagraph();
    }, [paragraphsText]);

    useEffect(() => {
        let interval;
        if (isTyping && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
                let cpm = (charIndex - mistakes) * (60 / (maxTime - timeLeft));
                cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
                setCPM(parseInt(cpm, 10));
                let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                setWPM(wpm);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsTyping(false);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isTyping, timeLeft]);


    return (
        <div className="container">
            <input
                type="text"
                className="input-field"
                value={inpFieldValue}
                onChange={initTyping}
                onKeyDown={handleKeyDown}
            />
            {/* Render the TypingArea child component */}
            <TypingArea
                typingText={typingText}
                inpFieldValue={inpFieldValue}
                timeLeft={timeLeft}
                mistakes={mistakes}
                WPM={WPM}
                CPM={CPM}
                initTyping={initTyping}
                handleKeyDown={handleKeyDown}
                resetGame={resetGame}
                changeSettingHandleClick={changeSettingHandleClick}
                changeTextHandleClick={changeTextHandleClick}
            />
        </div>
    );
}

export default SpeedTypingTest;