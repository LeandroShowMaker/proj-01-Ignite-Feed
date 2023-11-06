// JSX = JavaScript + XML
import { Post, PostType } from './components/post'

import { Header } from './components/header'

import { Sidebar } from './components/sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/LeandroShowMaker.png',
      name: 'Leandro ShowMaker',
      role: 'Web Developer'
     },
     content: [
      {type:'paragraph', content: 'Fala Galera'},
      {type:'paragraph', content: 'acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RockeSeat. O nome do projeto e Doctor Care'},
      {type:'link', content:'jane.design/doctorcare'},
     ],
     publishedAt: new Date('2023-09-08 20:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayke Brito',
      role: 'CTO @RocketSeat'
     },
     content: [
      {type:'paragraph', content: 'Fala Galera'},
      {type:'paragraph', content: 'acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RockeSeat. O nome do projeto e Doctor Care'},
      {type:'link', content:'jane.design/doctorcare'},
     ],
     publishedAt: new Date('2023-09-10 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />       
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
               post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
