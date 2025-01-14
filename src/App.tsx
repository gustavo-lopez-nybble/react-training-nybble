import { useState } from 'react'
import './App.css'
import { ButtonPrimary, BoardCode } from './components/common';

function App() {

  const [counter, setCounter] = useState(0);
  const onClickSetCounter = () => {
    setCounter(counter + 1);
  }



  const [text, setText] = useState('Hello World');
  const onClickChangeText = () => {
    setText('hola mundo');
  }




  let counterIncreaseCustom = 10;
  const onClickSetCounterIncrease = () => {
    counterIncreaseCustom++;
    console.log('counterIncreaseCustom ', counterIncreaseCustom);
  }



  const [counterByReference, setCounterByReference] = useState(0);
  const onClickSetCounterbyReference = () => {
    setCounterByReference(counterByReference + 1);
    setCounterByReference(counterByReference + 2);
    setCounterByReference(counterByReference + 3);
    setCounterByReference(counterByReference + 5);
    setCounterByReference(counterByReference + 20);
    setCounterByReference(counterByReference + 100);
    setCounterByReference(counterByReference + 10); // will take the last value
  }



  const [counterAsMethod, setCounterAsMethod] = useState(0);
  const onClickSetCounterAsMethod = () => {
    setCounterAsMethod(( c ) => c + 1); // for each sentence or click
    setCounterAsMethod(( c ) => c + 2); // there will be a new value 
    setCounterAsMethod(( c ) => c + 3); // for the next sentence
    setCounterAsMethod(( c ) => c + 5); // adding the previous value
    setCounterAsMethod(( c ) => c + 20);
    setCounterAsMethod(( c ) => c + 100);
    setCounterAsMethod(( c ) => c + 10); // in this case, the value will be 141
  }


  const Container = ({ btnLabel, btnOnClick, barcodeText, children }: {
    btnLabel: string,
    btnOnClick: () => void,
    barcodeText: string,
    children?: React.ReactNode
  }) => {

    return (
      <div className='container' style={{ marginBottom: '3rem' }}>
        <hr />
        <BoardCode text={barcodeText} />
        <ButtonPrimary label={btnLabel} onClick={btnOnClick} />
        {children}
      </div>
    );
  }

  return (
    <>
      <Container
        btnLabel={`Counter ${counter}`}
        btnOnClick={onClickSetCounter}
        barcodeText={`
          const [ counter, setCounter ] = useState(0);
          const onClickSetCounter = () => {
            setCounter(counter + 1);
          }
        `}
      />


      <Container
        btnLabel='Change text'
        btnOnClick={onClickChangeText}
        barcodeText={`
          const [text, setText] = useState('Hello World');
          const onClickChangeText = () => {
            setText('hola mundo');
          }  
        `}
      >
        <h3>{text}</h3>
      </Container>


      <Container
        btnLabel={`Counter increase ${counterIncreaseCustom}`}
        btnOnClick={onClickSetCounterIncrease}
        barcodeText={`
          let counterIncreaseCustom = 10;
          const onClickSetCounterIncrease = () => {
            counterIncreaseCustom++;
            console.log('counterIncreaseCustom ', counterIncreaseCustom);
          }
        `}
      >
        <small style={{ color: 'cyan', opacity: 0.5, fontStyle: 'italic', padding: '1rem' }}>
          show the console to see the value of counterIncreaseCustom
        </small>
      </Container>


      <Container
        btnLabel={`Counter by reference ${counterByReference} `}
        btnOnClick={onClickSetCounterbyReference}
        barcodeText={`
          const [ counterByReference, setCounterByReference ] = useState(0);
          const onClickSetCounterbyReference = () => {
            setCounterByReference(counterByReference + 1);
            setCounterByReference(counterByReference + 2);
            setCounterByReference(counterByReference + 3);
            setCounterByReference(counterByReference + 5);
            setCounterByReference(counterByReference + 20);
            setCounterByReference(counterByReference + 100);
            setCounterByReference(counterByReference + 10); // will take the last value
          }
        `}
      />


      <Container
        btnLabel={`Counter as method ${counterAsMethod} `}
        btnOnClick={onClickSetCounterAsMethod}
        barcodeText={`
          const [counterAsMethod, setCounterAsMethod] = useState(0);
          const onClickSetCounterAsMethod = () => {
            setCounterAsMethod(( c ) => c + 1); // for each sentence or click
            setCounterAsMethod(( c ) => c + 2); // there will be a new value 
            setCounterAsMethod(( c ) => c + 3); // for the next sentence
            setCounterAsMethod(( c ) => c + 5); // adding the previous value
            setCounterAsMethod(( c ) => c + 20);
            setCounterAsMethod(( c ) => c + 100);
            setCounterAsMethod(( c ) => c + 10); // in this case, the value will be 141
          }
        `}
      />
    </>
  )
}

export default App
