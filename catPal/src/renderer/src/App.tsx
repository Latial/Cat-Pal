import cat from './assets/black_cat_pixel_art.gif';

function App(): React.JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Tasks</a>
          </li>
          <li>
            <a href="">Cat</a>
          </li>
        </ul>
      </div>
      <div id="cat">
        <img src={cat} alt="cat" width={130} />
      </div>
    </>
  )
}

export default App
