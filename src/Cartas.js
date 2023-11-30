import { useState, useRef } from 'react'
import Card from './Carta'

export default function Cards() {
    const [cards, setCards] = useState([
        { id: 0, name: 'JavaScript', status: '', img: './imgCartas/javascript.png' },
        { id: 0, name: 'JavaScript', status: '', img: './imgCartas/javascript.png' },
        { id: 1, name: 'Next', status: '', img: './imgCartas/nextjs.png' },
        { id: 1, name: 'Next', status: '', img: './imgCartas/nextjs.png' },
        { id: 2, name: 'Node', status: '', img: './imgCartas/nodejs.png' },
        { id: 2, name: 'Node', status: '', img: './imgCartas/nodejs.png' },
        { id: 3, name: 'React', status: '', img: './imgCartas/reactjs.js' },
        { id: 3, name: 'React', status: '', img: './imgCartas/reactjs.js' },
        { id: 4, name: 'TypeScript', status: '', img: './imgCartas/typescript.png' },
        { id: 4, name: 'TypeScript', status: '', img: './imgCartas/typescript.png' },
        { id: 5, name: 'ViteJS', status: '', img: './imgCartas/vitejs.png' },
        { id: 5, name: 'ViteJS', status: '', img: './imgCartas/vitejs.png' },

    ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'ativa coincide'
            cards[currentCard].status = 'ativa coincide'
            setPreviousCardState(-1)
        }else{
            cards[currentCard].status = 'ativa'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'incompativel'
                cards[previousCardState].status = 'incompativel'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {
        
        if(index !== previousIndex.current){
            if(cards[index].status === 'ativa coincide'){
                alert('corresponde')
            }else{
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'ativa'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
            alert('carta selecionada')
        }

    }

    return (
      <div className="conteudoCartas">
        { cards.map((card, index) => {
            return <Card key={index} card={card} index={index} clickhandler={clickhandler} />
        })}
      </div>
    );
}