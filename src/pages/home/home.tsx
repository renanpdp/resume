import reactLogo from '@/assets/react.svg'
import { increment, selectCount } from '@/features/counter/counter-slice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import style from './home.module.css'
import viteLogo from '/vite.svg'

const Home = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div>
      <div className={style.logos}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={style.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${style.logo} ${style.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={style.card}>
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={style.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
