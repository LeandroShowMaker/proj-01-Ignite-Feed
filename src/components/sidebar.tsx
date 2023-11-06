import {PencilLine} from 'phosphor-react'
import { Avatar } from './avatar'

import styles from './sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover} 
             src="https://images.unsplash.com/photo-1549605659-32d82da3a059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar src='https://github.com/LeandroShowMaker.png'/>

                <strong>Leandro ShowMaker</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}