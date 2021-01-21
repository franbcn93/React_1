import './App.css';

function Title() {
  return ( <div id = "title" >
    Hello world </div>
  )
}

// const App = () => < div > My component: < Title / > < br / > < Title / > < br / > < Title / > < /div>

function App() {
  return ( <div>
    My component: <Title/> <br/> <Title/> <br/> <Title/>
    </div>
  );
}

export default App;
