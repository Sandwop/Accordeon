import Item from './Components/Item';
import woman from './img/woman.svg';

function App() {

  const faqList = [
    {id: 1, question: 'How many team members can I invite?', content: 'Answer of the first question.'},
    {id: 2, question: 'What is the maximum file upload size?', content: 'Answer of the second question.'},
    {id: 3, question: 'How do I reset my password?', content: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
    {id: 4, question: 'Can I cancel my subscription?', content: 'Answer of the fourth question.'},
    {id: 5, question: 'Do you provide additional support?', content: 'Answer of the fifth question.'}
  ]

  return (
    <div className="app">
      <div className="container">
        <div className="column colLeft">
          <img className='imgWoman' src={woman} />
        </div>
        <div className="column colRight">
          <h1>FAQ</h1>
          <ul>
            {faqList.map((item) => {
              return(
                <Item key={item.id} question={item.question} content={item.content} />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
