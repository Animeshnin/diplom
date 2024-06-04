import React from 'react';
import './SpeedTypingTest.css'
const TypingArea =({
    typingText,
    inpFieldValue,
    timeLeft,
    mistakes,
    WPM,
    CPM,
    initTyping,
    handleKeyDown,
    resetGame,
    changeSettingHandleClick,
    changeTextHandleClick    }) => {
    return(
        <div>
            <div>
                <div className={'setting'}>
                    <div className={"mode"}>
                        <p className={'click'} onClick={event => changeTextHandleClick(event)}>Русский</p>
                        <p className={'click'} onClick={event => changeTextHandleClick(event)}>Английский</p>
                        <p className={'click'} onClick={event => changeTextHandleClick(event)}>JavaScript</p>

                    </div>
                <div className={'stopwatch'}>
                     <p className={'click'} onClick={event => changeSettingHandleClick(event)}>15</p>
                     <p className={'click'} onClick={event => changeSettingHandleClick(event)}>30</p>
                     <p className={'click'} onClick={event => changeSettingHandleClick(event)}>45</p>
                     <p className={'click'} onClick={event => changeSettingHandleClick(event)}>60</p>
                </div>
                </div>
            </div>
            <div className="section">
                <div className="section1">
                    <p id="paragraph">{typingText}</p>
                </div>
                <div className="section2">
                    <ul className="resultDetails">
                        <li className="time">
                            <p className={"colorBlue"}>Оставшееся время:</p>
                            <span className={"colorBlue"}>
              <b >{timeLeft}</b>s
            </span>
                        </li>
                        <li className="mistake">
                            <p  className={"colorBlue"}>Ошибки:</p>
                            <span className={"colorBlue"}>{mistakes}</span>
                        </li>
                        <li className="wpm">
                            <p  className={"colorBlue"}>WPM:</p>
                            <span className={"colorBlue"}>{WPM}</span>
                        </li>
                        <li className="cpm">
                            <p  className={"colorBlue"}>CPM:</p>
                            <span className={"colorBlue"}>{CPM}</span>
                        </li>
                    </ul>
                    <button onClick={resetGame} className="btn">
                        Попробывать еще раз
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TypingArea;