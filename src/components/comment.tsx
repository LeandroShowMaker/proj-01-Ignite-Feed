import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeletComment() { 
        console.log('deletar')
        onDeleteComment(content)
    }
    function hadleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/LeandroShowMaker.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>LeandroShowMaker</strong>
                        <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca De 1 Hora Atrás</time>
                    </div>
                    <button onClick={handleDeletComment} title='Deletar Comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
                </div>
                <footer>
                    <button onClick={hadleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}