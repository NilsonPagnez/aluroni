import { useState } from 'react'
import styles from './Ordenador.module.scss'
import Opcoes from './Opcoes.json'
import classNames from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador({ ordenador, setOrdenador }: Props) {

    const [aberto, setAberto] = useState(false)
    const nomeOrdenador = ordenador && Opcoes.find(opcao => opcao.value === ordenador)?.nome

    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--ativo']]: ordenador !== ""
            })}
            onBlur={() => setAberto(false)}
            onClick={() => setAberto(!aberto)}>
            <span>Ordenar Por{`: ${nomeOrdenador}`}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}

            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto,
            })}>
                {Opcoes.map(opcao => (
                    <div
                        className={styles.ordenador__option} key={opcao.value}
                        onClick={() => setOrdenador(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Ordenador