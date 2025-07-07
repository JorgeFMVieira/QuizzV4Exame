import React, { useState } from 'react'
import questions from '../../utils/question'
import styles from './Game.module.css'

const Game = () => {
    const [nivel, setNivel] = useState<'easy' | 'medium' | 'hard' | null>(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selected, setSelected] = useState<number | null>(null)
    const [score, setScore] = useState(0)

    const handleNivel = (n: 'easy' | 'medium' | 'hard') => {
        setNivel(n)
        setCurrentQuestion(0)
        setScore(0)
        setSelected(null)
    }

    const handleAnswer = (index: number) => {
        if (selected !== null) return
        setSelected(index)
        if (index === questions[nivel!][currentQuestion].correctIndex) {
            setScore((s) => s + 1)
        }
    }

    const nextQuestion = () => {
        setSelected(null)
        setCurrentQuestion((q) => q + 1)
    }

    if (!nivel) {
        return (
            <div className={styles.level}>
                <h2>Escolhe o nível:</h2>
                <div className={styles.nvl}>
                    <button onClick={() => handleNivel('easy')}>easy</button>
                    <button onClick={() => handleNivel('medium')}>medium</button>
                    <button onClick={() => handleNivel('hard')}>hard</button>
                </div>
            </div>
        )
    }

    const questionSet = questions[nivel]
    const question = questionSet[currentQuestion]

    if (currentQuestion >= questionSet.length) {
        return (
            <div className={styles.level}>
                <h2>Terminaste o nível {nivel}!</h2>
                <p>Pontuação: {score} / {questionSet.length}</p>
                <button onClick={() => setNivel(null)}>Voltar ao menu</button>
            </div>
        )
    }

    return (
        <div className={styles.level}>
            <h2>Nível: {nivel}</h2>
            <p>Pergunta {currentQuestion + 1} de {questionSet.length}</p>
            <h3>{question.question}</h3>
            {question.options.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    style={{
                        backgroundColor:
                            selected === null ? '' :
                                idx === question.correctIndex ? 'lightgreen' :
                                    selected === idx ? 'salmon' : ''
                    }}
                >
                    {opt}
                </button>
            ))}
            {selected !== null && currentQuestion < questionSet.length - 1 && (
                <div>
                    <button onClick={nextQuestion}>Próxima</button>
                </div>
            )}
            {selected !== null && currentQuestion === questionSet.length - 1 && (
                <div>
                    <button onClick={nextQuestion}>Ver Resultado</button>
                </div>
            )}
        </div>
    )
}

export default Game
