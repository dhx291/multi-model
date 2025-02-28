import { useState } from 'react'
import classNames from 'classnames';
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  
  return (
    <div className={classNames(
      'min-h-screen p-4',
      {
        'bg-white text-black': theme === 'light',
        'bg-gray-900 text-white': theme === 'dark'
      }
    )}>
      <div>
        <h1 className={`p-1 text-green-400`}>Tailwind 样式的标题</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button 
          size="large" 
          onClick={() => setCount((count) => count + 1)}
          className={classNames(
            'mt-4 shadow-lg',
            { 'bg-purple-500': count > 5 } // 当计数大于5时改变按钮颜色
          )}
        >
          count is {count}
        </Button>
        
        <Button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="mt-4"
        >
          切换主题
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
